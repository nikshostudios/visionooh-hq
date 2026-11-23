'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Hero from '@/components/hero'
import Hud from '@/components/hud'
import Levels from '@/components/levels'
import { BrainExplorer, Footer, Glossary, HowItWorks, Numbers, Toolkit } from '@/components/sections'
import Nav from '@/components/nav'

const STEPS = [
  ['01', 'Connect to Claude', 'Type what you want in the box up there. Claude opens already knowing you, VisionOOH and your level.'],
  ['02', 'Do a mission', 'Do it in Claude, on your real work. Then come back here and tick it off.'],
  ['03', 'Earn XP, rank up', 'Finish a level for bonus XP and watch the rocket go. Cadet to Mission Control.'],
]

export default function Page() {
  const [launch, setLaunch] = useState(0)
  const [active, setActive] = useState(0)
  useEffect(() => {
    const ids = ['top', 'levels', 'brain', 'toolkit']
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
      <Nav home active={active} onChange={setActive} />
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
