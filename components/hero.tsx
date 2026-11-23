'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Check, Copy, Sparkles, X } from 'lucide-react'
import AsciiRocket from './ascii-rocket'
import { BASE } from '@/lib/content'
import { buildPrompt, claudeUrl } from '@/lib/prompt'
import { useProgress } from '@/lib/progress'

const CHIPS = [
  'Take me through my current level',
  'Help me write a pitch for Britannia',
  'Explain how a second brain works',
  'Prepare me for a client meeting tomorrow',
]

export default function Hero({ launchKey }: { launchKey: number }) {
  const p = useProgress()
  const [goal, setGoal] = useState('')
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const prompt = buildPrompt(goal, {
    done: p.s.done,
    completed: p.completed,
    xp: p.xp,
    rank: p.rank.title,
    currentTitle: p.current.title,
    currentN: p.current.n,
  })

  const copy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <header id='top' className='hq-grain relative isolate flex min-h-[100svh] flex-col overflow-hidden'>
      {/* photograph */}
      <div className='absolute inset-0 -z-20'>
        <img src={`${BASE}/img/hero.jpg`} alt='' className='h-full w-full scale-[1.04] object-cover object-[50%_70%]' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,rgb(17_12_8/0)_0%,rgb(17_12_8/0.35)_60%,rgb(17_12_8/0.8)_100%)]' />
        <div className='absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#110c08]/60 to-transparent' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_18%_38%_at_50%_66%,rgb(17_12_8/0.82),rgb(17_12_8/0.35)_60%,transparent_100%)]' />
        <div className='absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-b from-transparent via-[#110c08]/70 to-[#110c08]' />
      </div>

      {/* the living rocket */}
      <AsciiRocket lift={p.pct} launchKey={launchKey} className='pointer-events-none absolute -bottom-[6svh] left-1/2 -z-10 h-[62svh] w-[min(640px,100vw)] -translate-x-1/2' />

      <div className='relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-5 pt-24 text-center sm:pt-28'>
        <p className='hq-label hq-rise' style={{ animationDelay: '.1s' }}>
          VisionOOH HQ · Mission control for Akshay
        </p>
        <h1 className='font-display mt-5 text-[clamp(3rem,7.4vw,6rem)] leading-[0.9] drop-shadow-[0_4px_30px_rgb(0_0_0/0.35)]'>
          <span className='hq-rise block -translate-x-[6%]' style={{ animationDelay: '.2s' }}>Learn.</span>
          <span className='hq-rise block translate-x-[4%]' style={{ animationDelay: '.35s' }}>Build.</span>
          <span className='hq-rise hq-shimmer block translate-x-[12%] italic' style={{ animationDelay: '.5s' }}>Launch.</span>
        </h1>

        {/* the centre: connect to Claude */}
        <form
          onSubmit={e => {
            e.preventDefault()
            setOpen(true)
          }}
          className='hq-glass hq-rise group mt-auto w-full max-w-2xl rounded-[28px] p-2 text-left transition focus-within:shadow-[0_0_0_1px_rgb(255_138_61/0.55),0_0_80px_-10px_rgb(255_138_61/0.55)]'
          style={{ animationDelay: '.7s' }}
        >
          <div className='flex items-center gap-3 px-4 pt-3'>
            <span className='relative flex size-2'>
              <span className='absolute inline-flex size-full animate-ping rounded-full bg-[var(--hq-amber)] opacity-70' />
              <span className='relative inline-flex size-2 rounded-full bg-[var(--hq-amber)]' />
            </span>
            <span className='hq-label !text-[10px]'>Input to connect to Claude</span>
          </div>
          <div className='flex flex-col gap-2 sm:flex-row sm:items-end'>
            <textarea
              value={goal}
              onChange={e => setGoal(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  setOpen(true)
                }
              }}
              rows={2}
              placeholder='What do you want to do today?'
              className='min-h-[64px] w-full resize-none bg-transparent px-4 py-3 text-[17px] text-[var(--hq-cream)] placeholder:text-[var(--hq-dim)] focus:outline-none'
            />
            <button
              type='submit'
              className='mx-1 mb-1 inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[20px] bg-[var(--hq-cream)] px-5 text-[15px] font-medium text-[#1a120b] transition hover:bg-white active:scale-[0.97]'
            >
              <Sparkles className='size-4' /> Connect to Claude
            </button>
          </div>
        </form>
        <p className='hq-rise mt-3 text-[13px] text-[var(--hq-ash)]' style={{ animationDelay: '.8s' }}>Opens a fresh Claude chat that already knows you, VisionOOH and your level.</p>
        <div className='hq-rise mb-4 mt-3 flex max-w-2xl flex-wrap justify-center gap-2' style={{ animationDelay: '.85s' }}>
          {CHIPS.map(c => (
            <button
              key={c}
              onClick={() => {
                setGoal(c)
                setOpen(true)
              }}
              className='rounded-full border border-[var(--hq-line)] bg-black/20 px-3.5 py-1.5 text-[13px] text-[var(--hq-ash)] backdrop-blur transition hover:border-[var(--hq-amber)] hover:text-[var(--hq-cream)]'
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className='relative z-10 mx-auto flex w-full max-w-7xl items-end justify-between px-6 pb-6 font-display text-[clamp(1rem,1.7vw,1.5rem)] leading-tight text-[var(--hq-cream)]/75'>
        <span className='hidden max-w-[14ch] text-left sm:block'>Built for Akshay Jhinga, VisionOOH</span>
        <span className='hidden max-w-[16ch] text-right sm:block'>your AI, learned one level at a time.</span>
        <span className='w-full text-center text-[15px] sm:hidden'>Built for Akshay Jhinga · VisionOOH</span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md'
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 30, scale: 0.97, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              onClick={e => e.stopPropagation()}
              className='hq-glass relative w-full max-w-2xl rounded-[28px] p-6 text-left sm:p-8'
            >
              <button onClick={() => setOpen(false)} className='absolute right-4 top-4 rounded-full p-2 text-[var(--hq-ash)] hover:text-white' aria-label='Close'>
                <X className='size-5' />
              </button>
              <p className='hq-label'>Your Claude briefing is ready</p>
              <h3 className='font-display mt-3 text-4xl'>Your briefing is <em className='text-[var(--hq-amber2)]'>ready.</em></h3>
              <p className='mt-3 text-[15px] text-[var(--hq-ash)]'>
                This tells Claude who you are, your business, your level ({p.rank.title}, {p.xp} XP) and what you want. Open it in Claude, or copy it into your “My Business” Project.
              </p>
              <pre className='font-code mt-5 max-h-56 overflow-auto whitespace-pre-wrap rounded-2xl border border-[var(--hq-line)] bg-black/40 p-4 text-[12px] leading-relaxed text-[var(--hq-ash)]'>
                {prompt}
              </pre>
              <div className='mt-5 flex flex-wrap gap-3'>
                <a
                  href={claudeUrl(prompt)}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex h-12 items-center gap-2 rounded-full bg-[var(--hq-amber)] px-6 font-medium text-[#1a0d04] transition hover:brightness-110'
                >
                  Open in Claude <ArrowUpRight className='size-4' />
                </a>
                <button onClick={copy} className='inline-flex h-12 items-center gap-2 rounded-full border border-[var(--hq-line)] px-6 text-[var(--hq-cream)] hover:border-[var(--hq-cream)]'>
                  {copied ? <Check className='size-4' /> : <Copy className='size-4' />} {copied ? 'Copied' : 'Copy briefing'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
