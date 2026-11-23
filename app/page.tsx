'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Hero from '@/components/hero'
import Hud from '@/components/hud'
import Levels from '@/components/levels'
import { BrainExplorer, Footer, Glossary, HowItWorks, Numbers, Toolkit } from '@/components/sections'
import { LiquidNavbar, NimbusIcons } from '@/components/ui/liquid-glass-navbar'

const ico = (d: React.ReactNode) => (
  <svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
    {d}
  </svg>
)
const ICONS = {
  levels: ico(<path d='M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Zm0 0v18M4 7.5l8 4.5 8-4.5' />),
  brain: ico(<><path d='M9 4a3 3 0 0 0-3 3v.2A3 3 0 0 0 4 10a3 3 0 0 0 1 2.2A3 3 0 0 0 7 17a3 3 0 0 0 5 1.6V5.4A3 3 0 0 0 9 4Z' /><path d='M15 4a3 3 0 0 1 3 3v.2a3 3 0 0 1 2 2.8 3 3 0 0 1-1 2.2A3 3 0 0 1 17 17a3 3 0 0 1-5 1.6' /></>),
  tools: ico(<path d='M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17v3h3l5.2-5.2a4 4 0 0 0 5.3-5.3l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z' />),
}

const STEPS = [
  ['01', 'Connect to Claude', 'Type a task in the box above. Claude opens with a full briefing on you, VisionOOH and your level.'],
  ['02', 'Do a mission', 'Do the task in Claude, on your real work. Then come back here and tick it.'],
  ['03', 'Earn XP and rank up', 'Finish a level to earn bonus XP and launch the rocket. Cadet to Mission Control.'],
]

export default function Page() {
  const [launch, setLaunch] = useState(0)
  const [active, setActive] = useState(0)
  useEffect(() => {
    const ids = ['top', 'levels', 'brain', 'numbers', 'toolkit']
    const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      entries => {
        const vis = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (vis) setActive(ids.indexOf(vis.target.id))
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.1, 0.5] }
    )
    els.forEach(e => io.observe(e))
    return () => io.disconnect()
  }, [])
  const onLaunch = useCallback(() => {
    setLaunch(k => k + 1)
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <main className='relative overflow-x-clip'>
      <div className='fixed left-1/2 top-3 z-[70] -translate-x-1/2'>
        <LiquidNavbar
          tone='dark'
          active={active}
          onChange={i => setActive(i)}
          items={[
            { label: 'Home', href: '#top', icon: NimbusIcons.home, fx: 'glow' },
            { label: 'Levels', href: '#levels', icon: ICONS.levels, fx: 'spin' },
            { label: 'Brain', href: '#brain', icon: ICONS.brain, fx: 'pop' },
            { label: 'Launch', href: '#numbers', icon: NimbusIcons.plane, fx: 'plane' },
            { label: 'Toolkit', href: '#toolkit', icon: ICONS.tools, fx: 'wave' },
          ]}
        />
      </div>
      <Hud onLaunch={onLaunch} />
      <Hero launchKey={launch} />

      <section className='mx-auto max-w-7xl px-5 pt-10'>
        <p className='hq-label'>01 · How this works</p>
        <div className='mt-6 grid gap-px overflow-hidden rounded-[28px] border border-[var(--hq-line)] bg-[var(--hq-line)] md:grid-cols-3'>
          {STEPS.map(([n, t, b], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className='bg-[var(--hq-bg)] p-8'
            >
              <span className='font-code text-[12px] text-[var(--hq-amber)]'>{n}</span>
              <p className='font-display mt-3 text-[2rem] leading-none'>{t}</p>
              <p className='mt-3 text-[15px] text-[var(--hq-ash)]'>{b}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Levels />
      <HowItWorks />
      <BrainExplorer />
      <Numbers />
      <Toolkit />
      <Glossary />
      <Footer />
    </main>
  )
}
