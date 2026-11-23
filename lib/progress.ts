'use client'

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'
import { LEVELS, LEVEL_BONUS, MAX_XP, QUIZ_XP, RANKS, type Level } from './content'

type State = { done: string[]; quiz: Record<string, number>; name: string }

const KEY = 'visionooh-hq-v1'
const EMPTY: State = { done: [], quiz: {}, name: 'Akshay' }
let state: State = EMPTY
const listeners = new Set<() => void>()
let loaded = false

const load = () => {
  if (loaded || typeof window === 'undefined') return
  loaded = true
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) state = { ...EMPTY, ...JSON.parse(raw) }
  } catch {}
}

const save = (next: State) => {
  state = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {}
  listeners.forEach(l => l())
}

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

export const levelDone = (s: State, l: Level) =>
  l.tasks.every(t => s.done.includes(t.id)) && l.quiz.every((q, i) => s.quiz[`${l.id}-${i}`] === q.answer)

export const xpOf = (s: State) => {
  let xp = 0
  for (const l of LEVELS) {
    for (const t of l.tasks) if (s.done.includes(t.id)) xp += t.xp
    l.quiz.forEach((q, i) => {
      if (s.quiz[`${l.id}-${i}`] === q.answer) xp += QUIZ_XP
    })
    if (levelDone(s, l)) xp += LEVEL_BONUS
  }
  return xp
}

export const rankOf = (xp: number) => {
  let r = RANKS[0]
  let next: (typeof RANKS)[number] | null = null
  for (let i = 0; i < RANKS.length; i++) {
    if (xp >= RANKS[i].min) {
      r = RANKS[i]
      next = RANKS[i + 1] ?? null
    }
  }
  return { ...r, next }
}

export function useProgress() {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    load()
    setHydrated(true)
    listeners.forEach(l => l())
  }, [])
  const s = useSyncExternalStore(subscribe, () => state, () => EMPTY)

  const toggle = useCallback((id: string) => {
    const done = state.done.includes(id) ? state.done.filter(d => d !== id) : [...state.done, id]
    save({ ...state, done })
  }, [])
  const answer = useCallback((key: string, i: number) => save({ ...state, quiz: { ...state.quiz, [key]: i } }), [])
  const reset = useCallback(() => save(EMPTY), [])

  const xp = xpOf(s)
  const completed = LEVELS.filter(l => levelDone(s, l)).length
  const current = LEVELS.find(l => !levelDone(s, l)) ?? LEVELS[LEVELS.length - 1]

  return { s, hydrated, xp, max: MAX_XP, pct: xp / MAX_XP, rank: rankOf(xp), completed, current, toggle, answer, reset }
}
