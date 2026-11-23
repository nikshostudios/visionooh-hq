'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Check, Copy, Download, FileText, Folder, RotateCcw } from 'lucide-react'
import { BASE, GLOSSARY, KIT, SKILLS, STATS, VAULT } from '@/lib/content'
import { useProgress } from '@/lib/progress'
import { SyntraCore } from '@/components/ui/syntra-hero'
import { WarpCarousel, type WarpCard } from '@/components/ui/warp-carousel'
import { cn } from '@/lib/utils'

const Head = ({ n, label, title, accent, body }: { n: string; label: string; title: string; accent: string; body?: string }) => (
  <div className='max-w-3xl'>
    <p className='hq-label'>{n} · {label}</p>
    <h2 className='font-display mt-4 text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.95]'>
      {title} <em className='text-[var(--hq-amber2)]'>{accent}</em>
    </h2>
    {body && <p className='mt-5 max-w-xl text-[17px] text-[var(--hq-ash)]'>{body}</p>}
  </div>
)

/* ---------- 03 · how it works ---------- */
export function HowItWorks() {
  return (
    <section id='how' className='relative mx-auto max-w-7xl px-5 py-24'>
      <div className='grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]'>
        <Head
          n='03'
          label='Inside the machine'
          title='How your AI'
          accent='thinks.'
          body='Five layers, bottom to top. Your files and your second brain feed Claude. Your skills turn its thinking into pitches, plans and messages. Hover the core to open it up.'
        />
        <div className='relative'>
          <SyntraCore />
        </div>
      </div>
    </section>
  )
}

/* ---------- 04 · second brain explorer ---------- */
export function BrainExplorer() {
  const [sel, setSel] = useState(0)
  const item = VAULT[sel]
  return (
    <section id='brain' className='relative overflow-hidden py-28'>
      <div className='absolute inset-0 -z-10'>
        <img src={`${BASE}/img/core.jpg`} alt='' className='h-full w-full object-cover opacity-35' />
        <div className='absolute inset-0 bg-gradient-to-b from-[#110c08] via-[#110c08]/70 to-[#110c08]' />
      </div>
      <div className='mx-auto max-w-7xl px-5'>
        <Head
          n='04'
          label='Your second brain'
          title='A memory that never'
          accent='forgets.'
          body='Your VisionOOH Brain is a folder of simple notes. You read it in Obsidian; Claude reads the same folder. Tap each part to see what lives there.'
        />
        <div className='mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]'>
          <div className='hq-glass rounded-[28px] p-3'>
            <p className='font-code px-3 pb-2 pt-2 text-[12px] text-[var(--hq-ash)]'>~/VisionOOH-Brain</p>
            {VAULT.map((v, i) => (
              <button
                key={v.path}
                onClick={() => setSel(i)}
                className={cn('flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition', i === sel ? 'bg-[var(--hq-amber)]/15 text-white' : 'text-[var(--hq-cream)]/80 hover:bg-white/5')}
              >
                {v.kind === 'folder' ? <Folder className={cn('size-4', i === sel ? 'text-[var(--hq-amber)]' : 'text-[var(--hq-ash)]')} /> : <FileText className='size-4 text-[var(--hq-ash)]' />}
                <span className='font-code text-[13.5px]'>{v.path}</span>
                <span className='ml-auto text-[12px] text-[var(--hq-dim)]'>{v.title}</span>
              </button>
            ))}
          </div>
          <AnimatePresence mode='wait'>
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.35 }}
              className='hq-glass flex flex-col justify-between rounded-[28px] p-8'
            >
              <div>
                <p className='font-code text-[13px] text-[var(--hq-amber2)]'>{item.path}</p>
                <h3 className='font-display mt-3 text-5xl leading-none'>{item.title}</h3>
                <p className='mt-5 text-[17px] leading-relaxed text-[var(--hq-cream)]/85'>{item.body}</p>
              </div>
              <div className='mt-8 rounded-2xl border border-[var(--hq-line)] bg-black/30 p-4'>
                <p className='hq-label !text-[10px]'>Example</p>
                <p className='font-code mt-2 text-[13.5px] text-[var(--hq-cream)]/80'>{item.example}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='mt-6 flex flex-wrap gap-3'>
          <a href={`${KIT}/dist/VisionOOH-Second-Brain.zip`} className='inline-flex h-12 items-center gap-2 rounded-full bg-[var(--hq-cream)] px-6 font-medium text-[#1a120b] hover:bg-white'>
            <Download className='size-4' /> Download your VisionOOH Brain
          </a>
          <a href='https://obsidian.md/download' target='_blank' rel='noreferrer' className='inline-flex h-12 items-center gap-2 rounded-full border border-[var(--hq-line)] px-6 hover:border-[var(--hq-cream)]'>
            Get Obsidian (free) <ArrowUpRight className='size-4' />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------- 05 · numbers ---------- */
const MESH: string[][] = [
  ['#1a0d05', '#3b1d0c', '#7a3a12', '#c9672a', '#ff9a4d', '#ffd2a1', '#2a150a', '#100703'],
  ['#0f0b08', '#2a2219', '#5a4a36', '#a8916f', '#efe4d2', '#6d5a42', '#1c1610', '#0b0806'],
  ['#120806', '#4a160c', '#8f2f14', '#e0562a', '#ffb07a', '#5c1d0e', '#1d0a05', '#0a0403'],
  ['#0b0d10', '#1b2630', '#3c5566', '#8fb0c0', '#f2e7d6', '#e39a5c', '#2b1a10', '#0a0807'],
]
const NUM: [string, string][] = [['#fff3e2', '#ffb37a'], ['#ffffff', '#e8d6b8'], ['#ffe2cc', '#ff8a3d'], ['#f6efe4', '#9fc3d3']]

export function Numbers() {
  const cards: WarpCard[] = STATS.map((s, i) => ({
    title: s.title,
    value: s.value,
    unit: s.unit,
    footer: s.footer,
    detail: s.detail,
    labels: s.labels,
    mesh: MESH[i],
    numeral: NUM[i],
    accent: '#ffb37a',
    glow: ['#ff8a3d', '#e8d6b8', '#ff6a2a', '#9fc3d3'][i],
  }))
  return (
    <section id='numbers' className='relative py-24'>
      <div className='mx-auto max-w-7xl px-5'>
        <Head n='05' label='Your edge' title='Bharat is your' accent='launch pad.' body='Your proof, in numbers. Drag the cards. These are the lines Claude puts in every pitch.' />
      </div>
      <div className='mx-auto mt-10 h-[min(78vw,620px)] max-w-6xl px-2'>
        <WarpCarousel cards={cards} background='#110c08' font='"Inter", system-ui, sans-serif' style={{ width: '100%', height: '100%', borderRadius: 28 }} />
      </div>
      <div className='relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-[32px] px-5'>
        <img src={`${BASE}/img/bharat.jpg`} alt='A lit, blank billboard on a highway entering an Indian town at dusk' className='h-[min(60vw,520px)] w-full rounded-[32px] object-cover' />
        <div className='absolute inset-0 mx-5 rounded-[32px] bg-gradient-to-r from-[#110c08]/90 via-[#110c08]/30 to-transparent' />
        <div className='absolute inset-y-0 left-10 flex max-w-md flex-col justify-center sm:left-16'>
          <p className='hq-label'>Visibility must follow distribution</p>
          <p className='font-display mt-3 text-[clamp(2rem,4.4vw,3.6rem)] leading-[1]'>Every blank hoarding is a pitch <em className='text-[var(--hq-amber2)]'>waiting.</em></p>
          <p className='mt-3 text-[15px] text-[var(--hq-ash)]'>7,373 decision-makers at 443 brands are on your list. Level 6 shows you how to reach them.</p>
        </div>
      </div>
    </section>
  )
}

/* ---------- 06 · toolkit ---------- */
function CopyCmd({ label, cmd }: { label: string; cmd: string }) {
  const [c, setC] = useState(false)
  return (
    <div>
      <p className='hq-label !text-[10px]'>{label}</p>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(cmd)
          setC(true)
          setTimeout(() => setC(false), 1500)
        }}
        className='font-code mt-2 flex w-full items-center gap-3 rounded-xl border border-[var(--hq-line)] bg-black/40 p-3 text-left text-[12px] text-[var(--hq-cream)]/80 hover:border-[var(--hq-ash)]'
      >
        <span className='min-w-0 flex-1 truncate'>{cmd}</span>
        {c ? <Check className='size-4 shrink-0 text-[var(--hq-amber)]' /> : <Copy className='size-4 shrink-0' />}
      </button>
    </div>
  )
}

export function Toolkit() {
  return (
    <section id='toolkit' className='mx-auto max-w-7xl px-5 py-28'>
      <Head n='06' label='The toolkit' title='Eleven skills. Built for' accent='outdoor.' body='Download a skill, then in Claude go to Settings → Capabilities → Skills → Upload skill. Start with the first two.' />
      <div className='mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {SKILLS.map((s, i) => (
          <motion.a
            key={s.id}
            href={`${KIT}/dist/${s.id}.zip`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: (i % 3) * 0.06, duration: 0.5 }}
            className='group relative overflow-hidden rounded-[22px] border border-[var(--hq-line)] bg-white/[0.025] p-5 transition hover:-translate-y-0.5 hover:border-[var(--hq-amber)]/50 hover:bg-white/[0.05]'
          >
            <div className='flex items-center justify-between'>
              <span className='hq-label !text-[10px] !text-[var(--hq-amber2)]'>{s.job}</span>
              <Download className='size-4 text-[var(--hq-dim)] transition group-hover:text-[var(--hq-amber)]' />
            </div>
            <p className='font-code mt-3 text-[16px] text-white'>{s.id}</p>
            <p className='mt-1.5 text-[14px] text-[var(--hq-ash)]'>{s.what}</p>
            <p className='font-code mt-4 text-[12px] text-[var(--hq-cream)]/60'>“{s.say}”</p>
          </motion.a>
        ))}
      </div>
      <div className='mt-8 grid gap-5 lg:grid-cols-2'>
        <div className='hq-glass rounded-[28px] p-6'>
          <p className='font-display text-3xl'>More downloads</p>
          <div className='mt-5 grid gap-2'>
            {[
              ['VisionOOH business profile', `${KIT}/profile/VisionOOH-Business-Profile.md`],
              ['VisionOOH Brain (Obsidian vault)', `${KIT}/dist/VisionOOH-Second-Brain.zip`],
              ['Your ideal customer profile (PDF)', `${KIT}/brief/VisionOOH-ICP.pdf`],
              ['The full playbook guide', `${KIT}/`],
            ].map(([l, h]) => (
              <a key={l} href={h} target='_blank' rel='noreferrer' className='flex items-center justify-between rounded-xl border border-[var(--hq-line)] px-4 py-3 text-[14.5px] hover:border-[var(--hq-ash)]'>
                {l} <ArrowUpRight className='size-4 text-[var(--hq-ash)]' />
              </a>
            ))}
          </div>
        </div>
        <div className='hq-glass rounded-[28px] p-6'>
          <p className='font-display text-3xl'>Power user: Claude Code</p>
          <p className='mt-2 text-[14.5px] text-[var(--hq-ash)]'>Level 7. Installs all eleven skills at once. Existing skills are never overwritten.</p>
          <div className='mt-5 space-y-4'>
            <CopyCmd label='Mac' cmd='curl -fsSL https://raw.githubusercontent.com/nikshostudios/akshay-claude-playbook/main/install.sh | bash' />
            <CopyCmd label='Windows (PowerShell)' cmd='irm https://raw.githubusercontent.com/nikshostudios/akshay-claude-playbook/main/install.ps1 | iex' />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- 07 · glossary ---------- */
export function Glossary() {
  const [flip, setFlip] = useState<number | null>(null)
  return (
    <section id='words' className='mx-auto max-w-7xl px-5 py-24'>
      <Head n='07' label='Words you will hear' title='AI, in plain' accent='English.' body='Tap a card to flip it.' />
      <div className='mt-12 grid grid-cols-2 gap-3 md:grid-cols-5'>
        {GLOSSARY.map((g, i) => (
          <button key={g.term} onClick={() => setFlip(flip === i ? null : i)} className='group h-44 [perspective:900px]' aria-label={`${g.term}: ${g.def}`}>
            <motion.div animate={{ rotateY: flip === i ? 180 : 0 }} transition={{ type: 'spring', stiffness: 160, damping: 18 }} className='relative h-full w-full [transform-style:preserve-3d]'>
              <div className='absolute inset-0 flex flex-col justify-between rounded-[20px] border border-[var(--hq-line)] bg-white/[0.03] p-4 text-left [backface-visibility:hidden] group-hover:border-[var(--hq-ash)]/60'>
                <span className='font-code text-[11px] text-[var(--hq-dim)]'>{String(i + 1).padStart(2, '0')}</span>
                <span className='font-display text-[1.7rem] leading-none'>{g.term}</span>
              </div>
              <div className='absolute inset-0 flex items-center rounded-[20px] border border-[var(--hq-amber)]/40 bg-[var(--hq-amber)]/10 p-4 text-left text-[13.5px] leading-snug text-[var(--hq-cream)] [backface-visibility:hidden] [transform:rotateY(180deg)]'>
                {g.def}
              </div>
            </motion.div>
          </button>
        ))}
      </div>
    </section>
  )
}

/* ---------- footer ---------- */
export function Footer() {
  const p = useProgress()
  return (
    <footer className='relative mx-auto max-w-7xl px-5 pb-28 pt-10'>
      <div className='hq-glass overflow-hidden rounded-[32px] p-10 text-center sm:p-16'>
        <p className='hq-label'>Mission status</p>
        <p className='font-display mt-4 text-[clamp(2.6rem,7vw,6rem)] leading-[0.95]'>
          {p.completed === 7 ? (
            <>You reached <em className='text-[var(--hq-amber2)]'>orbit.</em></>
          ) : (
            <>Next stop: <em className='text-[var(--hq-amber2)]'>{p.current.code.toLowerCase()}.</em></>
          )}
        </p>
        <p className='mx-auto mt-4 max-w-lg text-[var(--hq-ash)]'>{p.rank.title} · {p.xp} of {p.max} XP · {p.completed} of 7 levels</p>
        <div className='mt-8 flex flex-wrap justify-center gap-3'>
          <a href='#levels' className='inline-flex h-12 items-center rounded-full bg-[var(--hq-cream)] px-7 font-medium text-[#1a120b] hover:bg-white'>Continue my mission</a>
          <a href='#top' className='inline-flex h-12 items-center rounded-full border border-[var(--hq-line)] px-7 hover:border-[var(--hq-cream)]'>Connect to Claude</a>
        </div>
      </div>
      <div className='mt-8 flex flex-wrap items-center justify-between gap-4 text-[12.5px] text-[var(--hq-dim)]'>
        <span>Made for Akshay Jhinga (VisionOOH) by Nikhil. Progress is saved in this browser only.</span>
        <button
          onClick={() => {
            if (confirm('Reset all progress?')) p.reset()
          }}
          className='inline-flex items-center gap-1.5 hover:text-[var(--hq-ash)]'
        >
          <RotateCcw className='size-3.5' /> Reset progress
        </button>
      </div>
    </footer>
  )
}
