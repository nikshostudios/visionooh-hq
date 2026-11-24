// End-to-end test of the lead vault login and the main page layout.
// Usage (from web/): CODE=<access code> node scripts/e2e-leads.cjs https://nikshostudios.github.io/visionooh-hq /tmp/shots
// The access code is never stored here; pass it in the CODE environment variable.
const { chromium } = require('playwright')
const fs = require('fs')
const [base, shots] = process.argv.slice(2)
const PW = 'test-pass-2026'
const log = (...a) => console.log(...a)
let fails = 0
const check = (ok, msg) => { log(ok ? 'PASS' : 'FAIL', msg); if (!ok) fails++ }
fs.mkdirSync(shots, { recursive: true })

;(async () => {
  const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'] })
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, acceptDownloads: true })
  const page = await ctx.newPage()
  const errors = []
  page.on('pageerror', e => errors.push(e.message))
  page.on('console', m => m.type() === 'error' && errors.push(m.text()))
  page.on('dialog', d => d.accept())
  // Next.js has its own hidden role=alert route announcer; scope to the form error.
  const alert = () => page.locator('p[role=alert]')
  // "N people" also appears on folder labels; scope to the table counter.
  const count = () => page.locator('#table span').first()

  await page.goto(`${base}/leads/`)
  await page.getByLabel('Access code').waitFor({ timeout: 15000 })
  check(true, 'first visit shows access code')
  await page.screenshot({ path: `${shots}/01-code.png` })

  await page.getByLabel('Access code').fill('WRONG-CODE-1234')
  await page.getByRole('button', { name: 'Check code' }).click()
  await alert().waitFor({ timeout: 20000 })
  check((await alert().textContent()).includes('did not work'), 'wrong code is refused')

  await page.getByLabel('Access code').fill(process.env.CODE.toLowerCase())
  await page.getByRole('button', { name: 'Check code' }).click()
  await page.getByLabel('Confirm password').waitFor({ timeout: 20000 })
  check(true, 'right code (typed lowercase) moves to set password')
  await page.getByLabel('Password', { exact: true }).fill('short')
  await page.getByLabel('Confirm password').fill('short')
  await page.getByRole('button', { name: /Save password/ }).click()
  check((await alert().textContent()).includes('8 characters'), 'short password refused')
  await page.getByLabel('Password', { exact: true }).fill(PW)
  await page.getByLabel('Confirm password').fill(PW)
  await page.getByRole('button', { name: /Save password/ }).click()
  await page.getByText('people who buy').waitFor({ timeout: 20000 })
  const h = await page.locator('h1').textContent()
  check(h.includes('7,522'), `vault opens: "${h}"`)
  check((await page.locator('tbody tr').count()) === 50, 'table shows 50 rows')

  await page.reload()
  await page.getByText('people who buy').waitFor({ timeout: 20000 })
  check(!(await page.getByLabel('Access code').count()) && !(await page.getByLabel('Password', { exact: true }).count()), 'reload auto-opens (device remembered)')

  await page.getByLabel('Search leads').fill('unilever')
  await page.waitForTimeout(300)
  const n1 = await count().textContent()
  check(parseInt(n1.replace(/,/g, '')) > 100, `search filters to Unilever (${n1})`)
  await page.getByLabel('Seniority').selectOption('A')
  await page.waitForTimeout(300)
  const n2 = await count().textContent()
  check(parseInt(n2.replace(/,/g, '')) < parseInt(n1.replace(/,/g, '')), `senior filter narrows (${n2})`)
  await page.getByLabel('Search leads').fill('')
  await page.getByLabel('Seniority').selectOption('all')

  const folder = page.getByRole('button', { name: /Dairy/ }).first()
  await folder.scrollIntoViewIfNeeded()
  await folder.click()
  await page.waitForTimeout(900)
  const chip = await page.locator('#table button:has-text("Dairy")').count()
  const n3 = await count().textContent()
  check(chip > 0 && n3 === '193 people', `folder filters to its group (${n3})`)

  const boxes = page.locator('tbody input[type=checkbox]')
  await boxes.nth(0).check()
  await boxes.nth(1).check()
  const href = await page.locator('a:has-text("Ask Claude about")').getAttribute('href')
  check(href && href.startsWith('https://claude.ai/new?q=') && !decodeURIComponent(href).includes('@'), 'Ask Claude link has names only, no emails')
  const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('button', { name: /Export 2 picked/ }).click()])
  const lines = fs.readFileSync(await dl.path(), 'utf8').trim().split('\n')
  check(lines.length === 3 && lines[0].includes('name,title,company'), `CSV export: ${lines.length} lines`)

  await page.getByRole('button', { name: 'Lock' }).click()
  await page.getByLabel('Password', { exact: true }).waitFor({ timeout: 10000 })
  await page.reload()
  await page.getByLabel('Password', { exact: true }).waitFor({ timeout: 10000 })
  check(true, 'Lock asks for the password, also after reload')
  await page.getByLabel('Password', { exact: true }).fill('nope-nope-nope')
  await page.getByRole('button', { name: 'Open my leads' }).click()
  await alert().waitFor({ timeout: 20000 })
  check(true, 'wrong password refused')
  await page.getByLabel('Password', { exact: true }).fill(PW)
  await page.getByRole('button', { name: 'Open my leads' }).click()
  await page.getByText('people who buy').waitFor({ timeout: 20000 })
  check(true, 'own password opens vault')

  await page.getByRole('button', { name: 'Forget device' }).click()
  await page.getByLabel('Access code').waitFor({ timeout: 10000 })
  await page.reload()
  await page.getByLabel('Access code').waitFor({ timeout: 10000 })
  check(true, 'Forget device returns to access code, also after reload')

  // 390px. scrollWidth misses clipped fixed elements (the navbar), so also look at the screenshots.
  const m = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })
  const mp = await m.newPage()
  mp.on('pageerror', e => errors.push('mobile: ' + e.message))
  for (const u of ['/', '/leads/']) {
    await mp.goto(base + u)
    await mp.waitForTimeout(2500)
    const sw = await mp.evaluate(() => document.documentElement.scrollWidth)
    check(sw <= 390, `390px scrollWidth on ${u}: ${sw}`)
    await mp.screenshot({ path: `${shots}/m${u === '/' ? 'home' : 'leads'}.png` })
  }

  await page.goto(base + '/')
  await page.waitForTimeout(2000)
  await page.locator('#levels').scrollIntoViewIfNeeded()
  await page.waitForTimeout(1500)
  const clip = await page.evaluate(() => {
    const track = document.querySelector('#levels .overflow-x-auto')
    const node = track.querySelector('button span')
    const badge = [...track.querySelectorAll('span')].find(s => s.textContent === 'Next up')
    const t = track.getBoundingClientRect().top
    return { track: t, node: node.getBoundingClientRect().top, badge: badge ? badge.getBoundingClientRect().top : null, codes: [...track.querySelectorAll('button')].map(b => b.textContent).join('|') }
  })
  check(clip.node > clip.track && (clip.badge === null || clip.badge >= clip.track), 'mission map nodes and badge sit inside the track')
  check(clip.codes.includes('RADAR') && clip.codes.includes('STATION'), 'RADAR and STATION on the map')
  await page.screenshot({ path: `${shots}/06-map.png` })

  const real = errors.filter(e => !/favicon|WebGL|GPU|swiftshader|GL Driver|Automatic fallback/i.test(e))
  log('errors:', real.length ? real : 'none')
  if (real.length) fails++
  log(fails ? `${fails} FAILED` : 'ALL PASSED')
  await browser.close()
  process.exit(fails ? 1 : 0)
})().catch(e => {
  console.log('CRASH', e.message)
  process.exit(1)
})
