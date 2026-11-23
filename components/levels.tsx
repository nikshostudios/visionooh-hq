'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Check, Clock, Copy, Rocket, Sparkles, Target } from 'lucide-react'
import { LEVELS, LEVEL_BONUS, QUIZ_XP, type Level } from '@/lib/content'
import { claudeUrl } from '@/lib/prompt'
import { levelDone, useProgress } from '@/lib/progress'
import { cn } from '@/lib/utils'
import { HalftoneBackdrop } from '@/components/ui/halftone-flow-hero'

function PromptBox({ text }: { text: string }) {
  const [c, setC] = useState(false)
  return (
    <div className='mt-3 overflow-hidden rounded-xl border border-[var(--hq-line)] bg-black/35'>
      <pre className='font-code max-h-40 overflow-auto whitespace-pre-wrap p-3.5 text-[12.5px] leading-relaxed text-[var(--hq-cream)]/85'>{text}</pre>
      <div className='flex gap-1 border-t border-[var(--hq-line)] p-1.5'>
        <button
          onClick={async () => {
            await navigator.clipboard.writeText(text)
            setC(true)
            setTimeout(() => setC(false), 1500)
          }}
          className='inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12.5px] text-[var(--hq-ash)] hover:bg-white/5 hover:text-white'
        >
          {c ? <Check className='size-3.5' /> : <Copy className='size-3.5' />} {c ? 'Copied' : 'Copy prompt'}
        </button>
        <a href={claudeUrl(text)} target='_blank' rel='noreferrer' className='inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12.5px] text-[var(--hq-amber2)] hover:bg-white/5'>
          Try it in Claude <ArrowUpRight className='size-3.5' />
        </a>
      </div>
    </div>
  )
}

function LevelPanel({ level }: { level: Level }) {
  const p = useProgress()
  const [pop, setPop] = useState<string | null>(null)
  const tasksDone = level.tasks.filter(t => p.s.done.includes(t.id)).length
  const finished = levelDone(p.s, level)

  return (
    <motion.div
      key={level.id}
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className='grid gap-6 lg:grid-cols-[0.8fr_1.2fr]'
    >
      <div className='hq-glass relative overflow-hidden rounded-[28px]'>
        <HalftoneBackdrop palette='ember' dotSize={6} scrim={0.86} />
        <div className='relative p-7'>
        <div className='font-display pointer-events-none absolute -right-4 -top-10 text-[11rem] leading-none text-white/[0.05]'>{level.n}</div>
        <p className='hq-label !text-[var(--hq-amber2)]'>Level {level.n} · {level.code}</p>
        <h3 className='font-display mt-3 text-[2.6rem] leading-[1]'>{level.title}</h3>
        <p className='mt-2 text-[var(--hq-cream)]/80'>{level.tagline}</p>
        <div className='mt-5 flex items-center gap-4 text-[13px] text-[var(--hq-ash)]'>
          <span className='inline-flex items-center gap-1.5'><Clock className='size-3.5' /> {level.minutes} min</span>
          <span>{tasksDone}/{level.tasks.length} missions</span>
          {finished && <span className='inline-flex items-center gap-1 text-[var(--hq-amber2)]'><Check className='size-3.5' /> Complete</span>}
        </div>
        <div className='mt-6 flex gap-3 rounded-2xl bg-[var(--hq-amber)]/10 p-4 text-[14.5px] text-[var(--hq-cream)]'>
          <Target className='mt-0.5 size-4 shrink-0 text-[var(--hq-amber)]' />
          <span><span className='text-[var(--hq-amber2)]'>Your result:</span> {level.result}</span>
        </div>
        <p className='hq-label mt-8'>The briefing</p>
        <ul className='mt-3 space-y-3'>
          {level.learn.map((l, i) => (
            <li key={i} className='flex gap-3 text-[15.5px] leading-relaxed text-[var(--hq-cream)]/90'>
              <span className='font-code mt-1 text-[11px] text-[var(--hq-amber)]'>0{i + 1}</span>
              {l}
            </li>
          ))}
        </ul>
        <div className='mt-8 rounded-2xl border border-dashed border-[var(--hq-line)] p-4 text-[13px] text-[var(--hq-ash)]'>
          Do every mission and get the quick check right for a <span className='text-[var(--hq-amber2)]'>+{LEVEL_BONUS} XP</span> bonus and a rocket launch.
        </div>
        </div>
      </div>

      <div className='space-y-3'>
        {level.tasks.map((t, i) => {
          const done = p.s.done.includes(t.id)
          return (
            <motion.div
              key={t.id}
              layout
              className={cn('relative rounded-[22px] border p-5 transition-colors', done ? 'border-[rgb(255_138_61/0.35)] bg-[rgb(255_138_61/0.06)]' : 'border-[var(--hq-line)] bg-white/[0.025] hover:bg-white/[0.04]')}
            >
              <div className='flex items-start gap-4'>
                <button
                  onClick={() => {
                    if (!done) {
                      setPop(t.id)
                      setTimeout(() => setPop(null), 1100)
                    }
                    p.toggle(t.id)
                  }}
                  aria-pressed={done}
                  aria-label={done ? `Mark ${t.title} not done` : `I completed: ${t.title}`}
                  title={done ? 'Completed. Tap to undo.' : 'Tap when you have done this'}
                  className={cn('relative mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition', done ? 'border-[var(--hq-amber)] bg-[var(--hq-amber)] text-[#1a0d04]' : 'border-[var(--hq-ash)]/50 hover:border-[var(--hq-amber)]')}
                >
                  {done && <Check className='size-4' strokeWidth={3} />}
                  <AnimatePresence>
                    {pop === t.id && (
                      <motion.span initial={{ y: 0, opacity: 1 }} animate={{ y: -34, opacity: 0 }} transition={{ duration: 1 }} className='font-code absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-semibold text-[var(--hq-amber2)]'>
                        +{t.xp} XP
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <div className='min-w-0 flex-1'>
                  <div className='flex flex-wrap items-baseline justify-between gap-2'>
                    <p className={cn('text-[16px] font-medium', done && 'text-[var(--hq-cream)]/70 line-through decoration-[var(--hq-amber)]/50')}>
                      <span className='font-code mr-2 text-[11px] text-[var(--hq-dim)]'>M{level.n}.{i + 1}</span>
                      {t.title}
                    </p>
                    <span className='font-code text-[11px] text-[var(--hq-amber2)]'>+{t.xp} XP</span>
                  </div>
                  <p className='mt-1 text-[14.5px] text-[var(--hq-ash)]'>{t.body}</p>
                  {t.link && (
                    <a href={t.link.href} target={t.link.href.startsWith('http') ? '_blank' : undefined} rel='noreferrer' className='mt-2.5 inline-flex items-center gap-1.5 text-[13.5px] text-[var(--hq-amber2)] hover:underline'>
                      {t.link.label} <ArrowUpRight className='size-3.5' />
                    </a>
                  )}
                  {t.prompt && <PromptBox text={t.prompt} />}
                </div>
              </div>
            </motion.div>
          )
        })}

        <p className='px-2 text-[13px] text-[var(--hq-dim)]'>Only tick it once you’ve actually done it. It’s your own log, nobody’s checking.</p>
        <div className='rounded-[22px] border border-[var(--hq-line)] bg-white/[0.02] p-5'>
          <p className='hq-label flex items-center gap-2'><Sparkles className='size-3.5 text-[var(--hq-amber)]' /> Quick check · +{QUIZ_XP} XP each</p>
          <div className='mt-4 space-y-5'>
            {level.quiz.map((q, qi) => {
              const key = `${level.id}-${qi}`
              const picked = p.s.quiz[key]
              const answered = picked !== undefined
              const right = picked === q.answer
              return (
                <div key={key}>
                  <p className='text-[15.5px] font-medium'>{q.q}</p>
                  <div className='mt-2.5 grid gap-2 sm:grid-cols-3'>
                    {q.options.map((o, oi) => (
                      <button
                        key={o}
                        onClick={() => p.answer(key, oi)}
                        className={cn(
                          'rounded-xl border px-3.5 py-2.5 text-left text-[14px] transition',
                          picked === oi
                            ? oi === q.answer
                              ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-100'
                              : 'border-rose-400/50 bg-rose-400/10 text-rose-100'
                            : 'border-[var(--hq-line)] text-[var(--hq-cream)]/85 hover:border-[var(--hq-ash)]'
                        )}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                  {answered && <p className={cn('mt-2 text-[13.5px]', right ? 'text-emerald-200/80' : 'text-rose-200/80')}>{right ? 'Correct. ' : 'Not quite. Try again. '}{q.why}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Levels() {
  const p = useProgress()
  const [sel, setSel] = useState(LEVELS[0].id)
  useEffect(() => {
    if (p.hydrated) setSel(p.current.id)
    // only on first load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p.hydrated])
  const level = LEVELS.find(l => l.id === sel)!
  const firstOpen = LEVELS.findIndex(l => !levelDone(p.s, l))

  return (
    <section id='levels' className='relative mx-auto max-w-7xl px-5 py-28 sm:py-36'>
      <div className='flex flex-wrap items-end justify-between gap-6'>
        <div>
          <p className='hq-label'>02 · The mission map</p>
          <h2 className='font-display mt-4 text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.95]'>
            Nine levels to <em className='text-[var(--hq-amber2)]'>orbit.</em>
          </h2>
          <p className='mt-4 max-w-xl text-[17px] text-[var(--hq-ash)]'>
            Each level is 10 to 60 minutes of real VisionOOH work, not homework. Do the missions, pass the quick check, earn XP. Progress saves on this device.
          </p>
        </div>
        <div className='text-right'>
          <p className='font-display text-6xl'>{p.completed}<span className='text-[var(--hq-dim)]'>/{LEVELS.length}</span></p>
          <p className='hq-label'>levels complete</p>
          <p className='font-code mt-2 text-[12px] text-[var(--hq-amber2)] sm:hidden'>{p.rank.title} · {p.xp} XP{p.rank.next ? ` · ${p.rank.next.min - p.xp} XP to ${p.rank.next.title}` : ''}</p>
        </div>
      </div>

      {/* orbit track */}
      <p className='hq-label mt-10 text-right !text-[10px] sm:hidden'>Swipe to see all nine →</p>
      <div className='relative mt-4 overflow-x-auto pb-4 pt-9 [mask-image:linear-gradient(to_right,#000_85%,transparent)] [scrollbar-width:none] sm:mt-14 sm:[mask-image:none]'>
        <div className='relative flex min-w-[940px] items-center justify-between px-4'>
          <div className='absolute left-8 right-8 top-[27px] h-px bg-[var(--hq-line)]' />
          <motion.div
            className='absolute left-8 top-[27px] h-px bg-gradient-to-r from-[var(--hq-amber)] to-[var(--hq-amber2)] shadow-[0_0_14px_var(--hq-amber)]'
            animate={{ width: `calc((100% - 4rem) * ${Math.max(0, p.completed) / (LEVELS.length - 1)})` }}
            transition={{ type: 'spring', stiffness: 60, damping: 18 }}
          />
          {LEVELS.map((l, i) => {
            const done = levelDone(p.s, l)
            const active = l.id === sel
            const next = i === firstOpen
            return (
              <button key={l.id} onClick={() => setSel(l.id)} className='group relative z-10 flex w-24 flex-col items-center gap-3'>
                <span
                  className={cn(
                    'grid size-14 place-items-center rounded-full border text-[15px] transition duration-300',
                    done ? 'border-[var(--hq-amber)] bg-[var(--hq-amber)] text-[#1a0d04]' : 'border-[var(--hq-line)] bg-[var(--hq-bg2)] text-[var(--hq-cream)]',
                    active && 'hq-ring scale-110',
                    !done && !active && 'group-hover:border-[var(--hq-ash)]'
                  )}
                >
                  {done ? <Check className='size-5' strokeWidth={2.6} /> : next ? <Rocket className='size-5 text-[var(--hq-amber2)]' /> : <span className='font-display text-xl'>{l.n}</span>}
                </span>
                <span className={cn('font-code text-[10px] tracking-[0.18em] transition', active ? 'text-[var(--hq-cream)]' : 'text-[var(--hq-dim)]')}>{l.code}</span>
                {next && <span className='absolute -top-7 whitespace-nowrap rounded-full bg-[var(--hq-amber)]/15 px-2 py-0.5 text-[10px] text-[var(--hq-amber2)]'>Next up</span>}
              </button>
            )
          })}
        </div>
      </div>

      <div className='mt-10'>
        <AnimatePresence mode='wait'>
          <LevelPanel key={level.id} level={level} />
        </AnimatePresence>
      </div>
    </section>
  )
}
