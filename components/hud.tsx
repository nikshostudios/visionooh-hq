'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from 'motion/react'
import { Rocket } from 'lucide-react'
import { LEVELS } from '@/lib/content'
import { useProgress } from '@/lib/progress'

function Count({ to }: { to: number }) {
  const v = useMotionValue(to)
  const r = useTransform(v, x => Math.round(x).toLocaleString('en-IN'))
  useEffect(() => {
    const c = animate(v, to, { duration: 0.9, ease: 'easeOut' })
    return () => c.stop()
  }, [to, v])
  return <motion.span>{r}</motion.span>
}

/** Fixed score panel, plus the level-up celebration. Calls onLaunch when a level completes. */
export default function Hud({ onLaunch }: { onLaunch: () => void }) {
  const p = useProgress()
  const prev = useRef<number | null>(null)
  const [celebrate, setCelebrate] = useState<number | null>(null)

  useEffect(() => {
    if (!p.hydrated) return
    if (prev.current !== null && p.completed > prev.current) {
      setCelebrate(p.completed)
      onLaunch()
      setTimeout(() => setCelebrate(null), 3600)
    }
    prev.current = p.completed
  }, [p.completed, p.hydrated, onLaunch])

  const nextAt = p.rank.next?.min ?? p.max
  const base = p.rank.next ? p.rank.min : 0
  const rankPct = Math.min(1, (p.xp - base) / Math.max(1, nextAt - base))
  const lvl = LEVELS[celebrate ? celebrate - 1 : 0]

  return (
    <>
      <a href='#levels' className='hq-glass fixed right-3 top-3 z-[60] hidden w-[230px] rounded-2xl p-3.5 sm:block' aria-label='Your progress'>
        <div className='flex items-center justify-between'>
          <span className='hq-label !text-[9.5px]'>Rank</span>
          <span className='font-code text-[11px] text-[var(--hq-amber2)]'>
            <Count to={p.xp} /> XP
          </span>
        </div>
        <p className='font-display mt-1 text-[22px] leading-none'>{p.rank.title}</p>
        <div className='mt-3 h-1.5 overflow-hidden rounded-full bg-white/10'>
          <motion.div className='h-full rounded-full bg-gradient-to-r from-[var(--hq-amber)] to-[var(--hq-amber2)]' animate={{ width: `${rankPct * 100}%` }} transition={{ type: 'spring', stiffness: 70, damping: 18 }} />
        </div>
        <div className='mt-2 flex justify-between text-[10.5px] text-[var(--hq-ash)]'>
          <span>{p.rank.next ? `${nextAt - p.xp} XP to ${p.rank.next.title}` : 'Top rank reached'}</span>
          <span>{p.completed}/{LEVELS.length}</span>
        </div>
        <div className='mt-2.5 flex gap-1'>
          {LEVELS.map((l, i) => (
            <span key={l.id} className={`h-1 flex-1 rounded-full ${i < p.completed ? 'bg-[var(--hq-amber)]' : 'bg-white/10'}`} />
          ))}
        </div>
      </a>



      <AnimatePresence>
        {celebrate && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='pointer-events-none fixed inset-0 z-[90] grid place-items-center bg-black/55 backdrop-blur-sm'>
            <div className='absolute inset-0 overflow-hidden'>
              {Array.from({ length: 70 }).map((_, i) => (
                <motion.span
                  key={i}
                  className='font-code absolute text-[13px] text-[var(--hq-amber2)]'
                  style={{ left: `${(i * 37) % 100}%`, top: '100%' }}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: -900 - (i % 7) * 60, opacity: [0, 1, 0] }}
                  transition={{ duration: 2.4 + (i % 5) * 0.3, delay: (i % 10) * 0.05, ease: 'easeOut' }}
                >
                  {'0123456789+'[i % 11]}
                </motion.span>
              ))}
            </div>
            <motion.div initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 16 }} className='text-center'>
              <Rocket className='mx-auto size-10 text-[var(--hq-amber)]' />
              <p className='hq-label mt-4 !text-[var(--hq-amber2)]'>Level {celebrate} complete · +50 XP bonus</p>
              <p className='font-display mt-2 text-[clamp(3rem,9vw,6.5rem)] leading-none'>{lvl?.code}</p>
              <p className='mt-3 text-lg text-[var(--hq-ash)]'>{p.rank.title} · {p.xp} XP. Liftoff.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
