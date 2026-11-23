'use client'

// Lead vault: the lead list ships encrypted. The access code from Nikhil unlocks it once per device,
// then Akshay sets his own password. A non-extractable key is kept in IndexedDB so this device
// opens without typing anything, until he locks it.
import { BASE } from './content'

export type Lead = { tier: string; group: string; company: string; name: string; title: string; email: string; status: string; linkedin: string; place: string }
type Meta = { v: number; iter: number; salt: string; wrapIv: string; wrapped: string; dataIv: string; count: number }
type Own = { salt: string; iv: string; wrapped: string }

const OWN = 'vhq-own-v1'
const DB = 'vhq-vault'
const STORE = 'keys'
const enc = new TextEncoder()
const b = (s: string) => Uint8Array.from(atob(s), c => c.charCodeAt(0))
const s64 = (u: Uint8Array) => btoa(String.fromCharCode(...u))

async function kekFrom(secret: string, salt: Uint8Array, iter: number, usage: KeyUsage[]) {
  const base = await crypto.subtle.importKey('raw', enc.encode(secret), 'PBKDF2', false, ['deriveKey'])
  return crypto.subtle.deriveKey({ name: 'PBKDF2', salt: salt as BufferSource, iterations: iter, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, usage)
}

let metaCache: Meta | null = null
async function meta(): Promise<Meta> {
  if (!metaCache) metaCache = await (await fetch(`${BASE}/vault/meta.json`, { cache: 'no-store' })).json()
  return metaCache!
}

/** First visit on a device: the access code Nikhil sent. Returns the raw data key bytes. */
export async function unlockWithCode(code: string): Promise<Uint8Array> {
  const m = await meta()
  const kek = await kekFrom(code.trim().toUpperCase(), b(m.salt), m.iter, ['decrypt'])
  try {
    return new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b(m.wrapIv) }, kek, b(m.wrapped)))
  } catch {
    throw new Error('That code did not work. Check it with Nikhil.')
  }
}

export const hasOwnPassword = () => typeof window !== 'undefined' && !!localStorage.getItem(OWN)

export async function setOwnPassword(pw: string, raw: Uint8Array) {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const kek = await kekFrom(pw, salt, 310000, ['encrypt'])
  const wrapped = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, kek, raw as BufferSource))
  const own: Own = { salt: s64(salt), iv: s64(iv), wrapped: s64(wrapped) }
  localStorage.setItem(OWN, JSON.stringify(own))
}

export async function unlockWithPassword(pw: string): Promise<Uint8Array> {
  const own: Own = JSON.parse(localStorage.getItem(OWN) || 'null')
  if (!own) throw new Error('No password set on this device yet.')
  const kek = await kekFrom(pw, b(own.salt), 310000, ['decrypt'])
  try {
    return new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b(own.iv) }, kek, b(own.wrapped)))
  } catch {
    throw new Error('Wrong password. Try again, or use the access code from Nikhil.')
  }
}

/* ---------- remember this device ---------- */
function idb(): Promise<IDBDatabase> {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1)
    r.onupgradeneeded = () => r.result.createObjectStore(STORE)
    r.onsuccess = () => res(r.result)
    r.onerror = () => rej(r.error)
  })
}
async function idbDo<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest): Promise<T> {
  const db = await idb()
  return new Promise((res, rej) => {
    const req = fn(db.transaction(STORE, mode).objectStore(STORE))
    req.onsuccess = () => res(req.result as T)
    req.onerror = () => rej(req.error)
  })
}

export async function rememberDevice(raw: Uint8Array) {
  const key = await crypto.subtle.importKey('raw', raw as BufferSource, 'AES-GCM', false, ['decrypt'])
  await idbDo('readwrite', s => s.put(key, 'data'))
}
export async function rememberedKey(): Promise<CryptoKey | null> {
  try {
    return (await idbDo<CryptoKey | undefined>('readonly', s => s.get('data'))) ?? null
  } catch {
    return null
  }
}
export async function lockDevice() {
  await idbDo('readwrite', s => s.delete('data'))
}
export async function forgetDevice() {
  await lockDevice()
  localStorage.removeItem(OWN)
}

/* ---------- open the data ---------- */
export async function openLeads(key: CryptoKey | Uint8Array): Promise<Lead[]> {
  const m = await meta()
  const k = key instanceof Uint8Array ? await crypto.subtle.importKey('raw', key as BufferSource, 'AES-GCM', false, ['decrypt']) : key
  const bin = await (await fetch(`${BASE}/vault/leads.bin`, { cache: 'no-store' })).arrayBuffer()
  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b(m.dataIv) }, k, bin)
  const stream = new Blob([plain]).stream().pipeThrough(new DecompressionStream('gzip'))
  const json = JSON.parse(await new Response(stream).text()) as { cols: string[]; rows: string[][] }
  return json.rows.map(r => Object.fromEntries(json.cols.map((c, i) => [c, r[i] ?? ''])) as Lead)
}
