'use client'

import { useEffect, useState } from 'react'
import { BASE } from '@/lib/content'
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
  leads: ico(<><rect x='4' y='10' width='16' height='10' rx='2.5' /><path d='M8 10V7a4 4 0 0 1 8 0v3' /><path d='M12 14v2' /></>),
}

/** The one navbar. On the home page links are in-page anchors; elsewhere they point back home. */
export default function Nav({ active, onChange, home }: { active: number; onChange?: (i: number) => void; home: boolean }) {
  const [small, setSmall] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    const f = () => setSmall(mq.matches)
    f()
    mq.addEventListener('change', f)
    return () => mq.removeEventListener('change', f)
  }, [])
  const h = (id: string) => (home ? `#${id}` : `${BASE}/#${id}`)
  return (
    <div className='fixed left-1/2 top-3 z-[70] -translate-x-1/2'>
      <LiquidNavbar
        tone='dark'
        compact={small}
        active={active}
        onChange={i => onChange?.(i)}
        items={[
          { label: 'Home', href: h('top'), icon: NimbusIcons.home, fx: 'glow' },
          { label: 'Levels', href: h('levels'), icon: ICONS.levels, fx: 'spin' },
          { label: 'Brain', href: h('brain'), icon: ICONS.brain, fx: 'pop' },
          { label: 'Toolkit', href: h('toolkit'), icon: ICONS.tools, fx: 'wave' },
          { label: 'Leads', href: `${BASE}/leads/`, icon: ICONS.leads, fx: 'plane' },
        ]}
      />
    </div>
  )
}
