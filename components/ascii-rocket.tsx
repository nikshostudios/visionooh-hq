'use client'

import { useEffect, useRef } from 'react'
import { BASE } from '@/lib/content'

type Props = { lift: number; launchKey: number; className?: string }

const CHARS = '0123456789+-/=<>{}#*'

/**
 * The rocket from rocket.png re-drawn as living digits (like the horse in the reference).
 * `lift` (0..1) raises it with progress; a change of `launchKey` fires a full launch burst.
 */
export default function AsciiRocket({ lift, launchKey, className }: Props) {
  const ref = useRef<HTMLCanvasElement>(null)
  const liftRef = useRef(lift)
  const burst = useRef(0)
  liftRef.current = lift

  useEffect(() => {
    burst.current = performance.now()
  }, [launchKey])

  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    if (!ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let cells: { x: number; y: number; l: number; c: string; smoke: boolean }[] = []
    let W = 0, H = 0, cell = 8, imgW = 0, imgH = 0
    type P = { x: number; y: number; vx: number; vy: number; life: number; c: string }
    const parts: P[] = []
    let shown = 0
    let visible = true
    const img = new Image()
    img.src = `${BASE}/img/rocket.png`

    const build = () => {
      const r = cv.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = r.width; H = r.height
      cv.width = W * dpr; cv.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (!img.complete || !img.naturalWidth) return
      cell = W < 600 ? 6 : 7.5
      imgH = H * 0.92
      imgW = (imgH * img.naturalWidth) / img.naturalHeight
      const cols = Math.floor(imgW / cell), rows = Math.floor(imgH / cell)
      const off = document.createElement('canvas')
      off.width = cols; off.height = rows
      const o = off.getContext('2d')!
      o.drawImage(img, 0, 0, cols, rows)
      const d = o.getImageData(0, 0, cols, rows).data
      cells = []
      for (let y = 0; y < rows; y++)
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4
          const l = (d[i] * 0.3 + d[i + 1] * 0.55 + d[i + 2] * 0.15) / 255
          if (l > 0.2) cells.push({ x, y, l, c: CHARS[(Math.random() * CHARS.length) | 0], smoke: y > rows * 0.5 })
        }
    }

    img.onload = build
    const ro = new ResizeObserver(build)
    ro.observe(cv)
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible && !raf) raf = requestAnimationFrame(tick)
    })
    io.observe(cv)

    const tick = (now: number) => {
      raf = 0
      if (!visible) return
      ctx.clearRect(0, 0, W, H)
      shown = Math.min(1, shown + 0.02)
      const since = (now - burst.current) / 1000
      const boost = since < 3.2 ? Math.sin((since / 3.2) * Math.PI) : 0
      const climb = liftRef.current * H * 0.22 + boost * H * 0.28
      const shake = reduce ? 0 : (Math.random() - 0.5) * (0.6 + boost * 2.2)
      const ox = (W - imgW) / 2 + shake
      const oy = H - imgH - climb + H * 0.06
      ctx.font = `500 ${cell * 1.05}px ui-monospace, "JetBrains Mono", monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      // engine glow
      const gx = ox + imgW / 2, gy = oy + imgH * 0.5
      const gr = Math.min(W / 2, imgW * (0.42 + boost * 0.18))
      const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr)
      g.addColorStop(0, `rgba(255,170,90,${0.3 + boost * 0.3})`)
      g.addColorStop(0.5, `rgba(255,140,60,${0.08 + boost * 0.1})`)
      g.addColorStop(1, 'rgba(255,120,40,0)')
      ctx.fillStyle = g
      ctx.beginPath(); ctx.arc(gx, gy, gr, 0, Math.PI * 2); ctx.fill()

      const reveal = shown * cells.length
      for (let k = 0; k < cells.length; k++) {
        const c = cells[k]
        if (k > reveal && ((k * 7919) % cells.length) > reveal) continue
        if (!reduce && Math.random() < 0.025) c.c = CHARS[(Math.random() * CHARS.length) | 0]
        let x = ox + c.x * cell + cell / 2
        let y = oy + c.y * cell + cell / 2
        if (c.smoke && !reduce) {
          const t = now / 1000
          x += Math.sin(t * 0.9 + c.y * 0.3) * 2.2 * (c.y / 80)
          y += (1 + boost * 4) * Math.sin(t * 1.3 + c.x * 0.2)
        }
        const a = Math.min(1, c.l * 1.45) * (c.smoke ? 0.8 : 1)
        ctx.fillStyle = c.l > 0.82 ? `rgba(255,236,214,${a})` : `rgba(242,226,204,${a * 0.85})`
        ctx.fillText(c.c, x, y)
        if (!reduce && c.smoke && Math.random() < 0.0009 + boost * 0.004) {
          parts.push({ x, y, vx: (Math.random() - 0.5) * 1.4, vy: -0.2 - Math.random() * 0.6, life: 1, c: c.c })
        }
      }
      // shed digits drifting off like dust
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i]
        p.x += p.vx; p.y += p.vy; p.life -= 0.006
        if (p.life <= 0) { parts.splice(i, 1); continue }
        ctx.fillStyle = `rgba(242,226,204,${p.life * 0.7})`
        ctx.fillText(p.c, p.x, p.y)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return <canvas ref={ref} aria-hidden className={className} />
}
