// Encrypts the VisionOOH lead list for the static site. Only ciphertext is published.
// Usage: node scripts/encrypt-leads.mjs <leads-dir> <out-dir> <access-code>
import { readFileSync, writeFileSync } from 'fs'
import { webcrypto as crypto } from 'crypto'
import { gzipSync } from 'zlib'

const [dir, out, code] = process.argv.slice(2)
const big = JSON.parse(readFileSync(`${dir}/leads.json`, 'utf8'))
const mid = JSON.parse(readFileSync(`${dir}/leads-tierC.json`, 'utf8'))
const CUR = new Set(['amul.com', 'amul.coop', 'dsgroup.com', 'motherdairy.com', 'vadilalgroup.com'])
const rows = []
for (const r of [...big, ...mid]) {
  const d = (r.Domain || '').toLowerCase().replace('www.', '')
  const group = CUR.has(d) ? 'Current clients' : r.Tier === 'C' ? 'Mid-size' : r.Sector
  rows.push([r.Tier, group, (r.Company || '').trim(), r.Name, r.Title, r.Email || '', r.EmailStatus || '', r.LinkedIn || '', [r.City, r.State].filter(Boolean).join(', ')])
}
const plain = gzipSync(Buffer.from(JSON.stringify({ cols: ['tier', 'group', 'company', 'name', 'title', 'email', 'status', 'linkedin', 'place'], rows, built: '2026-11-23' })))
const dataKey = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt'])
const dataIv = crypto.getRandomValues(new Uint8Array(12))
const cipher = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv: dataIv }, dataKey, plain))
const salt = crypto.getRandomValues(new Uint8Array(16))
const iter = 600000
const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(code.trim().toUpperCase()), 'PBKDF2', false, ['deriveKey'])
const kek = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: iter, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt'])
const raw = new Uint8Array(await crypto.subtle.exportKey('raw', dataKey))
const wrapIv = crypto.getRandomValues(new Uint8Array(12))
const wrapped = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv: wrapIv }, kek, raw))
const b64 = u => Buffer.from(u).toString('base64')
writeFileSync(`${out}/leads.bin`, cipher)
writeFileSync(`${out}/meta.json`, JSON.stringify({ v: 1, iter, salt: b64(salt), wrapIv: b64(wrapIv), wrapped: b64(wrapped), dataIv: b64(dataIv), count: rows.length }))
console.log('rows', rows.length, 'bytes', cipher.length)
