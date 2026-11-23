'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, Check, Copy, Download, KeyRound, Lock, LogOut, Search, ShieldCheck, Sparkles, X } from 'lucide-react'
import Nav from '@/components/nav'
import GlassFolder, { type ArtPreset } from '@/components/ui/glass-folder-cards'
import { HalftoneBackdrop } from '@/components/ui/halftone-flow-hero'
import { BASE } from '@/lib/content'
import { claudeUrl } from '@/lib/prompt'
import { cn } from '@/lib/utils'
import {
  forgetDevice,
  hasOwnPassword,
  lockDevice,
  openLeads,
  rememberDevice,
  rememberedKey,
  setOwnPassword,
  unlockWithCode,
  unlockWithPassword,
  type Lead,
} from '@/lib/vault'

type Stage = 'checking' | 'code' | 'setpw' | 'password' | 'open'

const GROUPS: { name: string; art: ArtPreset; blurb: string }[] = [
  { name: 'Current clients', art: 'ember', blurb: 'Amul, DS Group, Mother Dairy, Vadilal' },
  { name: 'FMCG', art: 'aurora', blurb: 'The big spenders' },
  { name: 'Dairy', art: 'glacier', blurb: 'Your home turf' },
  { name: 'Auto', art: 'dusk', blurb: 'Cars, bikes, tyres' },
  { name: 'Startup', art: 'verdant', blurb: 'Quick commerce and D2C' },
  { name: 'Durables & Paints', art: 'ember', blurb: 'Paints, fans, appliances' },
  { name: 'Mid-size', art: 'dusk', blurb: 'USD 10M to 100M' },
]
const TIERS: Record<string, string> = { A: 'Senior', B: 'Team', C: 'Mid-size' }
const PAGE = 50

/* ---------- the lock screen ---------- */
function Gate({ stage, onOpen, onStage }: { stage: Stage; onOpen: (raw: Uint8Array) => Promise<void>; onStage: (s: Stage) => void }) {
  const [code, setCode] = useState('')
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')
  const [remember, setRemember] = useState(true)
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const raw = useRef<Uint8Array | null>(null)

  const run = async (fn: () => Promise<void>) => {
    setErr('')
    setBusy(true)
    try {
      await fn()
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Something went wrong. Try again.')
    } finally {
      setBusy(false)
    }
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (stage === 'code')
      run(async () => {
        raw.current = await unlockWithCode(code)
        setCode('')
        onStage('setpw')
      })
    if (stage === 'setpw')
      run(async () => {
        if (pw.length < 8) throw new Error('Keep it 8 characters or more, bhai.')
        if (pw !== pw2) throw new Error('The two passwords don’t match.')
        await setOwnPassword(pw, raw.current!)
        if (remember) await rememberDevice(raw.current!)
        await onOpen(raw.current!)
      })
    if (stage === 'password')
      run(async () => {
        const r = await unlockWithPassword(pw)
        if (remember) await rememberDevice(r)
        await onOpen(r)
      })
  }

  const head = {
    checking: ['One sec', 'Checking this device…', ''],
    code: ['Step 1 of 2', 'Enter your access code', 'Nikhil sent you a code. You only need it once on this device.'],
    setpw: ['Step 2 of 2', 'Now set your own password', 'Pick something you’ll remember. It stays on this device, Nikhil can’t see it.'],
    password: ['Welcome back', 'Enter your password', 'The one you set the first time on this device.'],
    open: ['', '', ''],
  }[stage]

  const field = 'h-12 w-full rounded-2xl border border-[var(--hq-line)] bg-black/45 px-4 text-[16px] text-[var(--hq-cream)] placeholder:text-[var(--hq-dim)] focus:border-[var(--hq-amber)] focus:outline-none'

  return (
    <section className='relative mx-auto flex min-h-[100svh] max-w-7xl items-center justify-center px-5 pb-16 pt-28'>
      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className='relative w-full max-w-[520px] overflow-hidden rounded-[32px] border border-[var(--hq-line)] shadow-[0_40px_120px_-40px_rgb(0_0_0/0.9)]'
      >
        <HalftoneBackdrop palette='ember' dotSize={7} scrim={0.78} />
        <div className='relative p-7 sm:p-10'>
          <div className='flex items-center gap-2'>
            <span className='grid size-9 place-items-center rounded-full bg-[var(--hq-amber)]/20 text-[var(--hq-amber2)]'>
              <Lock className='size-4' />
            </span>
            <p className='hq-label !text-[var(--hq-cream)]/80'>Lead vault · {head[0]}</p>
          </div>
          <h1 className='font-display mt-6 text-[clamp(2.4rem,7vw,3.4rem)] leading-[0.95] text-white [text-shadow:0_2px_24px_rgb(0_0_0/0.6)]'>{head[1]}</h1>
          {head[2] && <p className='mt-3 text-[15.5px] leading-relaxed text-[var(--hq-cream)]/90'>{head[2]}</p>}

          {stage !== 'checking' && (
            <form onSubmit={submit} className='mt-7 space-y-3'>
              {stage === 'code' && (
                <input autoFocus value={code} onChange={e => setCode(e.target.value)} placeholder='Your access code' autoComplete='one-time-code' spellCheck={false} aria-label='Access code' className={cn(field, 'font-code uppercase tracking-[0.12em]')} />
              )}
              {stage !== 'code' && (
                <input autoFocus type='password' value={pw} onChange={e => setPw(e.target.value)} placeholder={stage === 'setpw' ? 'New password (8+ characters)' : 'Your password'} autoComplete={stage === 'setpw' ? 'new-password' : 'current-password'} aria-label='Password' className={field} />
              )}
              {stage === 'setpw' && <input type='password' value={pw2} onChange={e => setPw2(e.target.value)} placeholder='Type it again' autoComplete='new-password' aria-label='Confirm password' className={field} />}
              {stage !== 'code' && (
                <label className='flex cursor-pointer items-center gap-2.5 pt-1 text-[14px] text-[var(--hq-cream)]/90'>
                  <input type='checkbox' checked={remember} onChange={e => setRemember(e.target.checked)} className='size-4 accent-[var(--hq-amber)]' />
                  Remember this device (no password next time)
                </label>
              )}
              {err && <p role='alert' className='rounded-xl bg-rose-500/15 px-3.5 py-2.5 text-[14px] text-rose-100'>{err}</p>}
              <button disabled={busy} className='mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[var(--hq-cream)] text-[15px] font-medium text-[#1a120b] transition hover:bg-white disabled:opacity-60'>
                <KeyRound className='size-4' /> {busy ? 'Opening…' : stage === 'code' ? 'Check code' : stage === 'setpw' ? 'Save password and open' : 'Open my leads'}
              </button>
              {stage === 'password' && (
                <button type='button' onClick={() => onStage('code')} className='w-full pt-1 text-center text-[13.5px] text-[var(--hq-cream)]/75 underline-offset-4 hover:underline'>
                  Forgot it? Use the access code again
                </button>
              )}
            </form>
          )}
          <p className='mt-7 flex items-start gap-2 text-[12.5px] leading-relaxed text-[var(--hq-cream)]/70'>
            <ShieldCheck className='mt-0.5 size-4 shrink-0' /> The list is locked with AES-256. It only opens in your browser, nothing gets sent anywhere.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

/* ---------- the open vault ---------- */
function Vault({ leads, onLock, onForget }: { leads: Lead[]; onLock: () => void; onForget: () => void }) {
  const [group, setGroup] = useState<string | null>(null)
  const [company, setCompany] = useState<string | null>(null)
  const [q, setQ] = useState('')
  const [tier, setTier] = useState('all')
  const [mail, setMail] = useState('all')
  const [page, setPage] = useState(0)
  const [picked, setPicked] = useState<Set<number>>(new Set())
  const [copied, setCopied] = useState<number | null>(null)
  const [fw, setFw] = useState(200)

  useEffect(() => {
    const m = () => setFw(window.innerWidth < 640 ? Math.min(170, Math.floor((window.innerWidth - 60) / 2)) : 196)
    m()
    window.addEventListener('resize', m)
    return () => window.removeEventListener('resize', m)
  }, [])

  const byGroup = useMemo(() => {
    const g: Record<string, { n: number; cos: Record<string, number> }> = {}
    for (const l of leads) {
      const x = (g[l.group] ??= { n: 0, cos: {} })
      x.n++
      x.cos[l.company] = (x.cos[l.company] ?? 0) + 1
    }
    return g
  }, [leads])

  const idx = useMemo(() => leads.map((l, i) => ({ l, i, hay: `${l.name} ${l.title} ${l.company} ${l.place}`.toLowerCase() })), [leads])
  const rows = useMemo(() => {
    const t = q.trim().toLowerCase()
    return idx.filter(
      ({ l, hay }) =>
        (!group || l.group === group) &&
        (!company || l.company === company) &&
        (tier === 'all' || l.tier === tier) &&
        (mail === 'all' || (mail === 'any' ? !!l.email : l.status === 'VALID')) &&
        (!t || hay.includes(t))
    )
  }, [idx, group, company, tier, mail, q])
  useEffect(() => setPage(0), [group, company, tier, mail, q])

  const pages = Math.max(1, Math.ceil(rows.length / PAGE))
  const view = rows.slice(page * PAGE, page * PAGE + PAGE)
  const allOnPage = view.length > 0 && view.every(r => picked.has(r.i))
  const sel = [...picked].map(i => leads[i])

  const toggle = (i: number) =>
    setPicked(s => {
      const n = new Set(s)
      if (n.has(i)) n.delete(i)
      else n.add(i)
      return n
    })

  const exportCsv = () => {
    const cols: (keyof Lead)[] = ['name', 'title', 'company', 'group', 'tier', 'email', 'status', 'linkedin', 'place']
    const esc = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v)
    const src = picked.size ? sel : rows.map(r => r.l)
    const csv = [cols.join(','), ...src.map(l => cols.map(c => esc(String(l[c] ?? ''))).join(','))].join('\n')
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }))
    a.download = `visionooh-leads-${(company || group || 'all').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.csv`
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 2000)
  }

  const askPrompt = () => {
    const list = sel.slice(0, 25).map((l, i) => `${i + 1}. ${l.name}, ${l.title}, ${l.company}`).join('\n')
    return `I run VisionOOH, an outdoor (OOH), BTL and retail-branding agency across 100+ Tier 1, 2 and 3 towns in India. We run outdoor for Amul and Mother Dairy; 25 towns went live in 10 days.

Here are ${Math.min(25, sel.length)} marketing people I want to reach:
${list}

For each one:
1. Find one true, recent reason to write now (a launch, a new state, a festive push). Give the source.
2. Draft a LinkedIn note under 300 characters and a 90-word email. One easy ask.
3. Rate fit for outdoor in Tier 2 and 3 towns: high, medium or low, with one line why.

No fake familiarity. Do not invent facts; say "not found" when you can't verify.`
  }

  const folders = GROUPS.filter(g => byGroup[g.name])

  return (
    <section className='mx-auto max-w-7xl px-5 pb-28 pt-28'>
      {/* header */}
      <div className='flex flex-wrap items-end justify-between gap-6'>
        <div>
          <p className='hq-label'>Your lead vault · open on this device</p>
          <h1 className='font-display mt-4 text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.95]'>
            {leads.length.toLocaleString('en-IN')} people who buy <em className='text-[var(--hq-amber2)]'>outdoor.</em>
          </h1>
          <p className='mt-4 max-w-xl text-[17px] text-[var(--hq-ash)]'>
            Marketing heads, brand managers and media folks at {Object.values(byGroup).reduce((s, g) => s + Object.keys(g.cos).length, 0)} Indian companies. Tap a folder, pick a brand, then let Claude write the first message. Start with the Senior ones.
          </p>
        </div>
        <div className='flex gap-2'>
          <button onClick={onLock} className='inline-flex h-11 items-center gap-2 rounded-full border border-[var(--hq-line)] px-5 text-[14px] hover:border-[var(--hq-cream)]'>
            <Lock className='size-4' /> Lock
          </button>
          <button
            onClick={() => {
              if (confirm('Forget this device? You will need the access code from Nikhil again.')) onForget()
            }}
            className='inline-flex h-11 items-center gap-2 rounded-full border border-[var(--hq-line)] px-5 text-[14px] text-[var(--hq-ash)] hover:border-rose-300/60 hover:text-rose-100'
          >
            <LogOut className='size-4' /> Forget device
          </button>
        </div>
      </div>

      {/* folders */}
      <div className='mt-14 flex flex-wrap justify-center gap-x-4 gap-y-8 sm:gap-x-5 sm:justify-start'>
        {folders.map((g, i) => {
          const d = byGroup[g.name]
          const top = Object.entries(d.cos).sort((a, b) => b[1] - a[1]).slice(0, 6)
          return (
            <div key={g.name} className='flex flex-col items-center gap-2'>
              <GlassFolder
                label={g.name}
                meta={`${d.n.toLocaleString('en-IN')} people`}
                tone='dark'
                art={g.art}
                seed={i + 2}
                action='none'
                width={fw}
                appearDelay={i * 70}
                open={group === g.name}
                onOpenChange={o => {
                  setGroup(o ? g.name : null)
                  setCompany(null)
                }}
                files={top.map(([c, n]) => ({ name: c, meta: `${n} people` }))}
                onFileSelect={f => {
                  setGroup(g.name)
                  setCompany(f.name)
                  document.getElementById('table')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              />
              <span className='max-w-[160px] text-center text-[12px] text-[var(--hq-dim)]'>{g.blurb}</span>
            </div>
          )
        })}
      </div>

      {/* filters */}
      <div id='table' className='hq-glass mt-14 scroll-mt-24 rounded-[28px] p-4 sm:p-5'>
        <div className='flex flex-col gap-3 lg:flex-row lg:items-center'>
          <label className='relative flex-1'>
            <Search className='pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--hq-dim)]' />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder='Search name, title, company or city' aria-label='Search leads' className='h-12 w-full rounded-2xl border border-[var(--hq-line)] bg-black/35 pl-11 pr-4 text-[15px] placeholder:text-[var(--hq-dim)] focus:border-[var(--hq-amber)] focus:outline-none' />
          </label>
          <div className='grid grid-cols-2 gap-2 sm:flex'>
            <select value={tier} onChange={e => setTier(e.target.value)} aria-label='Seniority' className='h-12 rounded-2xl border border-[var(--hq-line)] bg-black/35 px-3 text-[14px]'>
              <option value='all'>All levels</option>
              <option value='A'>Senior (start here)</option>
              <option value='B'>Team</option>
              <option value='C'>Mid-size companies</option>
            </select>
            <select value={mail} onChange={e => setMail(e.target.value)} aria-label='Email' className='h-12 rounded-2xl border border-[var(--hq-line)] bg-black/35 px-3 text-[14px]'>
              <option value='all'>Any email</option>
              <option value='any'>Has an email</option>
              <option value='valid'>Verified email</option>
            </select>
          </div>
        </div>
        <div className='mt-3 flex flex-wrap items-center gap-2 text-[13px]'>
          <span className='text-[var(--hq-ash)]'>{rows.length.toLocaleString('en-IN')} people</span>
          {group && (
            <button onClick={() => { setGroup(null); setCompany(null) }} className='inline-flex items-center gap-1 rounded-full bg-[var(--hq-amber)]/15 px-3 py-1 text-[var(--hq-amber2)]'>
              {group} <X className='size-3' />
            </button>
          )}
          {company && (
            <button onClick={() => setCompany(null)} className='inline-flex items-center gap-1 rounded-full bg-[var(--hq-amber)]/15 px-3 py-1 text-[var(--hq-amber2)]'>
              {company} <X className='size-3' />
            </button>
          )}
          <div className='ml-auto flex flex-wrap gap-2'>
            <button onClick={exportCsv} className='inline-flex h-10 items-center gap-2 rounded-full border border-[var(--hq-line)] px-4 hover:border-[var(--hq-cream)]'>
              <Download className='size-4' /> {picked.size ? `Export ${picked.size} picked` : 'Export CSV'}
            </button>
            <a
              href={picked.size ? claudeUrl(askPrompt()) : undefined}
              target='_blank'
              rel='noreferrer'
              aria-disabled={!picked.size}
              onClick={e => !picked.size && e.preventDefault()}
              title={picked.size ? 'Opens Claude with names, titles and companies only' : 'Tick a few people first'}
              className={cn('inline-flex h-10 items-center gap-2 rounded-full px-4 font-medium', picked.size ? 'bg-[var(--hq-amber)] text-[#1a0d04] hover:brightness-110' : 'cursor-not-allowed bg-white/5 text-[var(--hq-dim)]')}
            >
              <Sparkles className='size-4' /> Ask Claude about {picked.size ? `these ${Math.min(25, picked.size)}` : 'these'}
            </a>
            {picked.size > 0 && (
              <button onClick={() => setPicked(new Set())} className='h-10 px-2 text-[var(--hq-ash)] hover:text-white'>
                Clear
              </button>
            )}
          </div>
        </div>
        {picked.size > 25 && <p className='mt-2 text-[12.5px] text-[var(--hq-ash)]'>Claude gets the first 25. Smaller batches give better messages anyway.</p>}

        {/* phone: cards */}
        <div className='mt-4 space-y-2 sm:hidden'>
          {view.map(({ l, i }) => (
            <div key={i} className={cn('rounded-2xl border border-[var(--hq-line)] p-4', picked.has(i) ? 'bg-[var(--hq-amber)]/[0.08]' : 'bg-black/20')}>
              <div className='flex items-start gap-3'>
                <input type='checkbox' checked={picked.has(i)} onChange={() => toggle(i)} aria-label={`Pick ${l.name}`} className='mt-1 size-4 shrink-0 accent-[var(--hq-amber)]' />
                <div className='min-w-0 flex-1'>
                  <p className='font-medium text-white'>
                    {l.name}
                    {l.tier === 'A' && <span className='ml-2 rounded-full bg-[var(--hq-amber)]/15 px-2 py-0.5 text-[10.5px] text-[var(--hq-amber2)]'>Senior</span>}
                  </p>
                  <p className='mt-0.5 text-[13.5px] text-[var(--hq-cream)]/85'>{l.title}</p>
                  <p className='mt-0.5 text-[13.5px] text-[var(--hq-amber2)]'>{l.company}{l.place && <span className='text-[var(--hq-dim)]'> · {l.place}</span>}</p>
                  <div className='mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px]'>
                    {l.email && (
                      <button
                        onClick={async () => {
                          await navigator.clipboard.writeText(l.email)
                          setCopied(i)
                          setTimeout(() => setCopied(null), 1400)
                        }}
                        className='font-code inline-flex min-w-0 items-center gap-1.5 break-all text-left text-[var(--hq-cream)]/85'
                      >
                        {copied === i ? <Check className='size-3.5 shrink-0 text-[var(--hq-amber)]' /> : <Copy className='size-3.5 shrink-0 text-[var(--hq-dim)]' />}
                        {l.email}
                        {l.status === 'VALID' && <span className='text-emerald-200'> ✓</span>}
                      </button>
                    )}
                    {l.linkedin && (
                      <a href={l.linkedin.startsWith('http') ? l.linkedin : `https://${l.linkedin}`} target='_blank' rel='noreferrer' className='inline-flex items-center gap-1 text-[var(--hq-amber2)]'>
                        LinkedIn <ArrowUpRight className='size-3.5' />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {view.length === 0 && <p className='p-8 text-center text-[var(--hq-ash)]'>Nobody matches that. Clear a filter and try again.</p>}
        </div>

        {/* table */}
        <div className='mt-4 hidden overflow-x-auto rounded-2xl border border-[var(--hq-line)] sm:block'>
          <table className='w-full min-w-[920px] text-left text-[13.5px]'>
            <thead className='bg-white/[0.04] text-[var(--hq-ash)]'>
              <tr>
                <th className='w-10 p-3'>
                  <input
                    type='checkbox'
                    aria-label='Pick everyone on this page'
                    checked={allOnPage}
                    onChange={() =>
                      setPicked(s => {
                        const n = new Set(s)
                        view.forEach(r => (allOnPage ? n.delete(r.i) : n.add(r.i)))
                        return n
                      })
                    }
                    className='size-4 accent-[var(--hq-amber)]'
                  />
                </th>
                {['Name', 'Title', 'Company', 'Email', 'Status', 'LinkedIn', 'Place'].map(h => (
                  <th key={h} className='hq-label p-3 !text-[10px] font-normal'>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {view.map(({ l, i }) => (
                <tr key={i} className={cn('border-t border-[var(--hq-line)] align-top', picked.has(i) ? 'bg-[var(--hq-amber)]/[0.07]' : 'hover:bg-white/[0.03]')}>
                  <td className='p-3'>
                    <input type='checkbox' checked={picked.has(i)} onChange={() => toggle(i)} aria-label={`Pick ${l.name}`} className='size-4 accent-[var(--hq-amber)]' />
                  </td>
                  <td className='p-3 font-medium text-white'>
                    {l.name}
                    {l.tier === 'A' && <span className='ml-2 rounded-full bg-[var(--hq-amber)]/15 px-2 py-0.5 text-[10.5px] text-[var(--hq-amber2)]'>Senior</span>}
                  </td>
                  <td className='max-w-[220px] p-3 text-[var(--hq-cream)]/85'>{l.title}</td>
                  <td className='p-3'>
                    <button onClick={() => { setGroup(l.group); setCompany(l.company) }} className='text-left hover:text-[var(--hq-amber2)]'>{l.company}</button>
                  </td>
                  <td className='p-3'>
                    {l.email ? (
                      <button
                        onClick={async () => {
                          await navigator.clipboard.writeText(l.email)
                          setCopied(i)
                          setTimeout(() => setCopied(null), 1400)
                        }}
                        className='font-code inline-flex items-center gap-1.5 text-[12.5px] text-[var(--hq-cream)]/85 hover:text-white'
                        title='Copy email'
                      >
                        {copied === i ? <Check className='size-3.5 text-[var(--hq-amber)]' /> : <Copy className='size-3.5 text-[var(--hq-dim)]' />}
                        {l.email}
                      </button>
                    ) : (
                      <span className='text-[var(--hq-dim)]'>none</span>
                    )}
                  </td>
                  <td className='p-3'>
                    <span className={cn('text-[12px]', l.status === 'VALID' ? 'text-emerald-200' : 'text-[var(--hq-dim)]')}>
                      {l.status === 'VALID' ? 'Verified' : l.status === 'CATCH_ALL' ? 'Catch-all' : l.email ? 'Unchecked' : ''}
                    </span>
                  </td>
                  <td className='p-3'>
                    {l.linkedin ? (
                      <a href={l.linkedin.startsWith('http') ? l.linkedin : `https://${l.linkedin}`} target='_blank' rel='noreferrer' className='inline-flex items-center gap-1 text-[var(--hq-amber2)] hover:underline'>
                        Profile <ArrowUpRight className='size-3.5' />
                      </a>
                    ) : null}
                  </td>
                  <td className='p-3 text-[var(--hq-ash)]'>{l.place}</td>
                </tr>
              ))}
              {view.length === 0 && (
                <tr>
                  <td colSpan={8} className='p-10 text-center text-[var(--hq-ash)]'>Nobody matches that. Clear a filter and try again.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className='mt-3 flex items-center justify-between text-[13px] text-[var(--hq-ash)]'>
          <span>
            Page {page + 1} of {pages} · tier: {tier === 'all' ? 'all' : TIERS[tier]}
          </span>
          <div className='flex gap-2'>
            <button disabled={page === 0} onClick={() => setPage(p => p - 1)} className='h-9 rounded-full border border-[var(--hq-line)] px-4 disabled:opacity-40'>Back</button>
            <button disabled={page >= pages - 1} onClick={() => setPage(p => p + 1)} className='h-9 rounded-full border border-[var(--hq-line)] px-4 disabled:opacity-40'>Next</button>
          </div>
        </div>
      </div>

      <p className='mt-8 text-[13px] leading-relaxed text-[var(--hq-dim)]'>
        Pulled for you by Nikhil on 23 Nov 2026. Titles change, so check LinkedIn before you write. Claude only gets names, titles and companies, never emails. Need a refresh? Ping Nikhil. ·{' '}
        <a href={`${BASE}/#levels`} className='underline-offset-4 hover:underline'>Back to Level 6</a>
      </p>
    </section>
  )
}

export default function LeadsPage() {
  const [stage, setStage] = useState<Stage>('checking')
  const [leads, setLeads] = useState<Lead[]>([])

  useEffect(() => {
    let live = true
    ;(async () => {
      const k = await rememberedKey()
      if (k) {
        try {
          const l = await openLeads(k)
          if (live) {
            setLeads(l)
            setStage('open')
          }
          return
        } catch {
          await lockDevice()
        }
      }
      if (live) setStage(hasOwnPassword() ? 'password' : 'code')
    })()
    return () => {
      live = false
    }
  }, [])

  const open = async (raw: Uint8Array) => {
    setLeads(await openLeads(raw))
    setStage('open')
  }

  return (
    <main className='relative min-h-[100svh] overflow-x-clip'>
      <Nav home={false} active={4} />
      {stage === 'open' ? (
        <Vault
          leads={leads}
          onLock={async () => {
            await lockDevice()
            setLeads([])
            setStage('password')
          }}
          onForget={async () => {
            await forgetDevice()
            setLeads([])
            setStage('code')
          }}
        />
      ) : (
        <Gate stage={stage} onOpen={open} onStage={setStage} />
      )}
    </main>
  )
}
