// Everything Akshay learns lives here. Edit this file to change the course.

export const BASE = process.env.NEXT_PUBLIC_BASE ?? ''
export const KIT = 'https://nikshostudios.github.io/akshay-claude-playbook'

export const PERSON = {
  name: 'Akshay',
  fullName: 'Akshay Jhinga',
  company: 'VisionOOH',
  site: 'https://visionooh.in/',
}

export const PROFILE = `VisionOOH (https://visionooh.in/) is a Bharat marketing and execution agency founded by Akshay Jhinga.
- Sells: ATL and OOH (hoardings, unipoles, gantries, transit), BTL, trade and rural activation, events, retail branding, signage, large-format printing, wall paintings, retail interiors, marketing collaterals. Own manufacturing facility, pan India.
- Network: 100+ Tier 1, 2 and 3 cities across Jharkhand, Bihar, Maharashtra, Uttar Pradesh, Rajasthan, Karnataka, Andhra Pradesh, Tamil Nadu, Odisha, Delhi NCR, J&K and Himachal. Key towns: Ranchi, Bokaro, Dhanbad, Jamshedpur, Patna, Gaya, Nashik, Dhule, Jalgaon, Kolhapur, Akola, Jaipur, Barmer, Jaisalmer, Puri, Rourkela.
- Clients: OOH campaigns for Amul, DS Group, Mother Dairy and Vadilal.
- Proof (VisionOOH's own figures): 100+ cities activated by cluster; 25+ cities live in 10 days; 99% site uptime with verified proof of execution; about 25% cost efficiency versus traditional OOH buying; support for distributor onboarding and secondary-sales uplift in 60 to 90 days.
- ICP: CMO, Marketing Head, Media Manager, Brand Manager at FMCG, dairy, automobile and consumer-startup brands (Zomato, Blinkit, Cars24) with more than USD 100M revenue in India, plus a mid-size tier from USD 10M.
- Pitch: in Bharat, visibility must follow distribution. Speed and consistency at scale win.
- Sister business: VisionOSH (https://visionosh.co/), AI safety monitoring for industrial sites.`

export type Quiz = { q: string; options: string[]; answer: number; why: string }
export type Task = {
  id: string
  title: string
  body: string
  xp: number
  prompt?: string
  link?: { label: string; href: string }
}
export type Level = {
  id: string
  n: number
  code: string
  title: string
  tagline: string
  minutes: number
  learn: string[]
  tasks: Task[]
  quiz: Quiz[]
  result: string
}

const P = (s: string) => s.trim()

export const LEVELS: Level[] = [
  {
    id: 'ignition',
    n: 1,
    code: 'IGNITION',
    title: 'Talk to Claude',
    tagline: 'Your first real conversation with AI.',
    result: 'one client reply drafted by Claude, checked and improved by you.',
    minutes: 10,
    learn: [
      'Claude is a very smart assistant that reads, writes, researches and thinks with you.',
      'It is only as good as what you tell it. Real details in, useful work out.',
      'Talk to it like a sharp new hire: say the goal, give the facts, ask for a draft.',
    ],
    tasks: [
      {
        id: 'i1',
        title: 'Install the Claude app',
        body: 'Download Claude for your computer and phone, then sign in with your paid plan.',
        xp: 20,
        link: { label: 'claude.ai/download', href: 'https://claude.ai/download' },
      },
      {
        id: 'i2',
        title: 'Send your first real prompt',
        body: 'Copy this, paste it into Claude and answer its questions.',
        xp: 30,
        prompt: P(`
I run VisionOOH, an outdoor and on-ground marketing agency working across 100+ Tier 1, 2 and 3 cities in India, for brands like Amul and Mother Dairy.
I am new to AI. Ask me 3 short questions about my week, then tell me the 3 tasks you could take off my desk first. Keep it simple.`),
      },
      {
        id: 'i3',
        title: 'Ask for a draft, not an answer',
        body: 'Paste a real client email or WhatsApp you have to reply to, and use this prompt.',
        xp: 30,
        prompt: P(`
Here is a message from a client (pasted below). Write two replies: one short WhatsApp version and one email version. Warm, confident, no promises on price or dates. English with a little Hindi is fine.

[paste the message here]`),
      },
    ],
    quiz: [
      {
        q: 'What makes Claude’s answer better?',
        options: ['Typing in capital letters', 'Giving real details and the goal', 'Asking very short questions'],
        answer: 1,
        why: 'Claude cannot see your business. The more real context you give, the more useful the draft.',
      },
      {
        q: 'Claude wrote a reply to your client. What next?',
        options: ['Send it straight away', 'Read it, fix anything wrong, then send', 'Ask Claude to send it'],
        answer: 1,
        why: 'Claude drafts. You decide. Always check names, prices and dates.',
      },
    ],
  },
  {
    id: 'fuel',
    n: 2,
    code: 'FUEL',
    title: 'Teach Claude your business',
    tagline: 'Never explain VisionOOH twice.',
    result: 'a “My Business” Project that already knows VisionOOH.',
    minutes: 15,
    learn: [
      'A Project is a folder in Claude with its own memory: files and instructions it reads every time.',
      'Put your business profile, rate card and best proposals in one Project called “My Business”.',
      'Every chat inside that Project already knows Amul, your cities and your pitch.',
    ],
    tasks: [
      {
        id: 'f1',
        title: 'Create a Project called “My Business”',
        body: 'In Claude, open Projects and create a new one. Name it My Business.',
        xp: 20,
      },
      {
        id: 'f2',
        title: 'Upload your business profile',
        body: 'Nikhil already wrote it from your message. Download it and add it to the Project files.',
        xp: 30,
        link: { label: 'Download business profile', href: `${KIT}/profile/VisionOOH-Business-Profile.md` },
      },
      {
        id: 'f3',
        title: 'Set the Project instructions',
        body: 'Paste this into the Project’s custom instructions.',
        xp: 30,
        prompt: P(`
You are my business assistant at VisionOOH. Read the business profile in this Project before every task.
Rules: keep answers short and practical. Never invent rates, sites, dates, reach or results; ask me. Never mix one client’s numbers into another client’s work. Draft messages; I send them. When unsure, ask one question.`),
      },
      {
        id: 'f4',
        title: 'Test it',
        body: 'In a new chat inside the Project, ask this.',
        xp: 20,
        prompt: 'What do you know about VisionOOH? List what is missing from my profile that would help you most.',
      },
    ],
    quiz: [
      {
        q: 'Where should your rate card and business profile live?',
        options: ['In a Claude Project', 'Pasted into every chat', 'Nowhere, Claude remembers everything'],
        answer: 0,
        why: 'A Project keeps your files and instructions, so every chat inside it starts with your context.',
      },
      {
        q: 'Claude does not know your printing cost. It should…',
        options: ['Guess a fair number', 'Ask you', 'Use a competitor’s rate'],
        answer: 1,
        why: 'A wrong rate in a quote costs real money. Your instructions tell Claude to ask.',
      },
    ],
  },
  {
    id: 'thrusters',
    n: 3,
    code: 'THRUSTERS',
    title: 'Install your skills',
    tagline: 'Eleven ready-made playbooks for outdoor.',
    result: 'a one-page brief on a brand you want to win, and six hoarding lines.',
    minutes: 15,
    learn: [
      'A skill is a saved playbook. Upload it once and Claude uses it whenever the job comes up.',
      'You never need to name it. Say “make a pitch for Britannia” and the pitch skill wakes up.',
      'Your eleven skills cover research, pitches, hoarding copy, media plans, outreach, replies and reports.',
    ],
    tasks: [
      {
        id: 't1',
        title: 'Turn on skills',
        body: 'In Claude: Settings → Capabilities. Switch on code execution and file creation, then find Skills.',
        xp: 20,
      },
      {
        id: 't2',
        title: 'Upload the first two skills',
        body: 'Download start-here and business-profile, then click Upload skill for each.',
        xp: 30,
        link: { label: 'Open the skills list', href: '#toolkit' },
      },
      {
        id: 't3',
        title: 'Research a brand you want to win',
        body: 'Pick one brand from your lead list and run this.',
        xp: 30,
        prompt: 'Research [brand] for my meeting next week. One page: what they launched in the last 12 months, where they are expanding, where they already advertise outdoors, who runs marketing, and two smart questions I should ask. Sources at the end.',
      },
      {
        id: 't4',
        title: 'Write hoarding lines',
        body: 'Try the billboard-copy skill.',
        xp: 30,
        prompt: 'Write 6 Hindi and English lines for a 40x20 ft dairy hoarding in Patna for a summer lassi launch. Seven words or fewer each. Recommend the best two.',
      },
    ],
    quiz: [
      {
        q: 'What is a skill?',
        options: ['A paid add-on', 'A saved playbook Claude follows for a job', 'A type of chat'],
        answer: 1,
        why: 'Skills are instructions you upload once. Claude uses the right one when your request fits.',
      },
      {
        q: 'Do you have to type the skill’s name?',
        options: ['Yes, always', 'No, just describe the job'],
        answer: 1,
        why: 'Claude picks the skill from what you ask for.',
      },
    ],
  },
  {
    id: 'brain',
    n: 4,
    code: 'SECOND BRAIN',
    title: 'Build your second brain',
    tagline: 'One place that holds what you know.',
    result: 'your VisionOOH Brain open in Obsidian, with your first daily note.',
    minutes: 25,
    learn: [
      'A second brain is a folder of simple notes about your business: clients, towns, pitches, lessons.',
      'Obsidian is a free app that shows those notes beautifully and links them together.',
      'Claude reads it when you upload a note to your Project, or directly when you use Claude Code (Level 7).',
    ],
    tasks: [
      {
        id: 'b1',
        title: 'Install Obsidian',
        body: 'Free, works on Mac and Windows.',
        xp: 20,
        link: { label: 'obsidian.md', href: 'https://obsidian.md/download' },
      },
      {
        id: 'b2',
        title: 'Download your VisionOOH Brain',
        body: 'A ready-made vault with your profile, clients and town clusters. Unzip it, then in Obsidian choose “Open folder as vault”.',
        xp: 30,
        link: { label: 'Download VisionOOH Brain', href: `${KIT}/dist/VisionOOH-Second-Brain.zip` },
      },
      {
        id: 'b3',
        title: 'Explore the map',
        body: 'Open the Brain explorer below and tap every folder once.',
        xp: 20,
        link: { label: 'Open the Brain explorer', href: '#brain' },
      },
      {
        id: 'b4',
        title: 'Write your first daily note',
        body: 'Ask Claude to turn your day into a note you paste into Calendar/Daily.',
        xp: 30,
        prompt: 'Here is my day in rough words (below). Turn it into a short daily note with three headings: What happened, Who to follow up, Decisions. Date it today.\n\n[speak or type your day here]',
      },
    ],
    quiz: [
      {
        q: 'Where does a client brief go, exactly as received?',
        options: ['Raw', 'Wiki', 'Home'],
        answer: 0,
        why: 'Raw keeps originals untouched. Claude reads them and writes summaries elsewhere.',
      },
      {
        q: 'A new pitch for Britannia starts. Where does it live?',
        options: ['A new folder in Efforts', 'Inside the rate card', 'Nowhere'],
        answer: 0,
        why: 'Every pitch or campaign gets its own Effort folder with an Overview note.',
      },
    ],
  },
  {
    id: 'navigation',
    n: 5,
    code: 'NAVIGATION',
    title: 'Connect your tools',
    tagline: 'Let Claude read your inbox, calendar and drive.',
    result: 'tomorrow’s meetings prepared, and a sourced research brief.',
    minutes: 15,
    learn: [
      'Connectors let Claude read Gmail, Google Calendar and Google Drive when you ask it to.',
      'Research mode lets Claude search the web deeply and come back with a sourced report.',
      'Claude can draft from your inbox. It never sends. You stay in control.',
    ],
    tasks: [
      {
        id: 'n1',
        title: 'Connect Gmail, Calendar or Drive',
        body: 'In Claude: Settings → Connectors. Connect the ones you use.',
        xp: 20,
      },
      {
        id: 'n2',
        title: 'Prepare for tomorrow',
        body: 'Ask Claude to read your calendar and prepare you.',
        xp: 30,
        prompt: 'Look at my calendar for tomorrow. For each meeting, give me one line on who it is, what they want and one question I should ask.',
      },
      {
        id: 'n3',
        title: 'Run a deep research brief',
        body: 'Turn on Research and run this on a target brand.',
        xp: 30,
        prompt: 'Research which large FMCG and dairy brands are expanding distribution into Bihar, Jharkhand and Odisha in the last 6 months. For each: what they launched, which towns, and who leads marketing. Sources for every point.',
      },
    ],
    quiz: [
      {
        q: 'Gmail is connected. Claude wrote a follow-up. Who sends it?',
        options: ['Claude, automatically', 'You, after reading it'],
        answer: 1,
        why: 'Connectors let Claude read and draft. Sending stays your decision.',
      },
      {
        q: 'Which is safe to paste into an AI chat?',
        options: ['Your bank password', 'A client brief', 'Your Aadhaar number'],
        answer: 1,
        why: 'Business documents are fine. Never paste passwords, bank details, Aadhaar or PAN.',
      },
    ],
  },
  {
    id: 'orbit',
    n: 6,
    code: 'ORBIT',
    title: 'Turn leads into meetings',
    tagline: '7,373 marketing contacts. Start with ten.',
    result: 'ten personal first messages, ready for you to send.',
    minutes: 30,
    learn: [
      'Nikhil pulled 7,373 marketing contacts at 443 Indian companies for you.',
      'Start with Tier A: 877 senior people who sign off on outdoor spend.',
      'Short, specific messages win: something true about them, one line of proof, one easy ask.',
    ],
    tasks: [
      {
        id: 'o1',
        title: 'Pick your first ten',
        body: 'Open the lead file from Nikhil, go to “Tier A - senior” and pick ten people at brands you would love to win.',
        xp: 20,
      },
      {
        id: 'o2',
        title: 'Draft ten first messages',
        body: 'Paste your ten rows into Claude with this prompt.',
        xp: 40,
        prompt: 'Here are 10 marketing leaders (pasted below). For each, research one true reason to write now (a launch, a new state, a festive season), then draft a LinkedIn note under 300 characters and a 90-word email. Proof line: we run outdoor for Amul and Mother Dairy across 100+ towns; 25 towns went live in 10 days. One easy ask. No fake familiarity.\n\n[paste rows here]',
      },
      {
        id: 'o3',
        title: 'Start the Monday review',
        body: 'Every Monday, 15 minutes.',
        xp: 30,
        prompt: 'Weekly review. Here are my open pitches, live campaigns, campaigns ending in 60 days, unpaid invoices and people I promised to call (below). Sort them into one table with the next step for each, and give me this week’s top 5.\n\n[paste notes here]',
      },
    ],
    quiz: [
      {
        q: 'Best first line of a cold email to a CMO?',
        options: ['“I hope this email finds you well”', 'Something true and recent about their brand', 'Our full company history'],
        answer: 1,
        why: 'Line one is about them. A real, recent fact shows you did your homework.',
      },
      {
        q: 'Which contacts should you start with?',
        options: ['Tier A senior people', 'Everyone at once', 'Only interns'],
        answer: 0,
        why: 'Tier A are the CMOs and heads who approve outdoor budgets.',
      },
    ],
  },
  {
    id: 'deepspace',
    n: 7,
    code: 'DEEP SPACE',
    title: 'Claude Code (power user)',
    tagline: 'Claude working directly inside your brain folder.',
    result: 'Claude reading your vault and filling every gap with you.',
    minutes: 30,
    learn: [
      'Claude Code runs Claude on your computer, inside a folder. It can read and write your notes.',
      'Open it inside your VisionOOH Brain and it reads CLAUDE.md first, then works with your notes.',
      'Two habits keep the brain fresh: “wrap” at the end of work, and a Monday review.',
    ],
    tasks: [
      {
        id: 'd1',
        title: 'Install Claude Code',
        body: 'Follow the install guide for your computer.',
        xp: 30,
        link: { label: 'claude.com/claude-code', href: 'https://claude.com/claude-code' },
      },
      {
        id: 'd2',
        title: 'Install all eleven skills in one command',
        body: 'Copy the command for your computer from the Toolkit section and run it in the terminal.',
        xp: 30,
        link: { label: 'Open the Toolkit', href: '#toolkit' },
      },
      {
        id: 'd3',
        title: 'Run Claude inside your brain',
        body: 'Open the terminal in your VisionOOH Brain folder, type claude, then say this.',
        xp: 40,
        prompt: 'Read CLAUDE.md and Home.md. Then interview me for 10 minutes to fill every "(Fill in)" in my vault, one question at a time. Show me each change before you save it.',
      },
    ],
    quiz: [
      {
        q: 'What does Claude read first in your brain folder?',
        options: ['CLAUDE.md', 'A random note', 'Nothing'],
        answer: 0,
        why: 'CLAUDE.md holds the rules and the map. Claude reads it before anything else.',
      },
    ],
  },
]

export const RANKS = [
  { min: 0, title: 'Cadet' },
  { min: 120, title: 'Pilot' },
  { min: 350, title: 'Navigator' },
  { min: 650, title: 'Commander' },
  { min: 1000, title: 'Mission Control' },
]

export const QUIZ_XP = 30
export const LEVEL_BONUS = 50

export const MAX_XP = LEVELS.reduce(
  (s, l) => s + l.tasks.reduce((a, t) => a + t.xp, 0) + l.quiz.length * QUIZ_XP + LEVEL_BONUS,
  0
)

export const SKILLS = [
  { id: 'start-here', job: 'Front door', say: 'start here', what: 'Explains the kit and picks the right skill.' },
  { id: 'business-profile', job: 'Foundation', say: 'set yourself up for my business', what: 'Reads your profile and fills the gaps.' },
  { id: 'brand-research', job: 'Prepare', say: 'research Hatsun for Thursday', what: 'One-page brief on any brand, with sources.' },
  { id: 'campaign-pitch', job: 'Sell', say: 'pitch a 25-town Bihar launch', what: 'Slide-by-slide proposal content.' },
  { id: 'billboard-copy', job: 'Create', say: 'Hindi lines for a Patna hoarding', what: 'Seven-word lines in any language.' },
  { id: 'media-plan', job: 'Quote', say: 'quote 12 sites in Ranchi', what: 'Sites by cluster, costs, GST, totals.' },
  { id: 'outreach-message', job: 'Reach out', say: 'write to the CMO of Britannia', what: 'Short emails and LinkedIn notes.' },
  { id: 'meeting-notes', job: 'Follow up', say: 'here are my call notes', what: 'Minutes, actions, follow-up email.' },
  { id: 'campaign-report', job: 'Retain', say: 'make the campaign report', what: 'Proof-of-execution report from photos.' },
  { id: 'client-reply', job: 'Reply', say: 'they want 20% off, how do I reply?', what: 'Two drafts for any client message.' },
  { id: 'weekly-review', job: 'Run the week', say: 'weekly review', what: 'Your Monday top-five list.' },
]

export const VAULT = [
  { path: 'CLAUDE.md', kind: 'file', title: 'The rulebook', body: 'Claude Code reads this first in your vault. It says who you are, where things live and the rules: never invent rates, draft only, keep clients apart. In the Claude app, upload it to your Project.', example: '“Never quote a rate without asking Akshay.”' },
  { path: 'Home.md', kind: 'file', title: 'Your dashboard', body: 'This week’s top 5, live pitches, live campaigns. Open it every morning. Claude keeps it current.', example: 'Top 5 → 1. Send Britannia pitch by Friday' },
  { path: 'Atlas/', kind: 'folder', title: 'Facts that rarely change', body: 'Your business profile and rate card, one note per client, one note per town cluster with its sites.', example: 'Atlas/Clients/Amul.md · Atlas/Cities/Ranchi-cluster.md' },
  { path: 'Efforts/', kind: 'folder', title: 'Every live pitch and campaign', body: 'One folder per pitch or campaign. Each has an Overview: goal, status, next steps, decisions.', example: 'Efforts/Britannia-Summer-2027/Overview.md' },
  { path: 'Calendar/Daily/', kind: 'folder', title: 'Daily notes', body: 'One short note per day: what happened, who to follow up, decisions. Speak it into your phone; Claude formats it.', example: 'Calendar/Daily/2026-11-24.md' },
  { path: 'Raw/', kind: 'folder', title: 'Originals, untouched', body: 'Client briefs, PDFs, call transcripts exactly as received. Never edited, so you always have the source.', example: 'Raw/briefs/britannia-brief-nov.pdf' },
  { path: 'Wiki/', kind: 'folder', title: 'Lessons learned', body: 'What worked in which market, objections and the answers that won. Your playbook grows every month.', example: 'Wiki/objection-price-too-high.md' },
  { path: 'Sessions/', kind: 'folder', title: 'Work session summaries', body: 'At the end of a session Claude writes a short summary here, so tomorrow it picks up where you left off.', example: 'Sessions/2026-11-24-britannia-pitch.md' },
  { path: 'Templates/', kind: 'folder', title: 'Note templates', body: 'Blank layouts for a new pitch, a daily note and a lesson. Copy, fill, done.', example: 'Templates/effort.md' },
]

export const STATS = [
  { title: 'Leads found\nfor you', value: '7373', footer: 'Marketing contacts', detail: 'ring' as const },
  { title: 'Towns in\nyour network', value: '100', unit: '+', footer: 'Tier 1, 2 and 3', detail: 'wave' as const },
  { title: 'Site uptime\nreported', value: '99', unit: '%', footer: 'VisionOOH figure', detail: 'slider' as const, labels: ['0', '100'] },
  { title: 'Towns live\nin ten days', value: '25', unit: '+', footer: 'Cluster launches', detail: 'cross' as const, labels: ['Launch', 'd1', 'd10'] },
]

export const GLOSSARY = [
  { term: 'Prompt', def: 'What you type to Claude. A good prompt has the goal, the facts and the format you want back.' },
  { term: 'Context', def: 'Everything Claude knows about your situation. More real context, better answers.' },
  { term: 'Project', def: 'A Claude folder with its own files and instructions, read in every chat inside it.' },
  { term: 'Skill', def: 'A saved playbook. Upload once; Claude uses it when your request fits.' },
  { term: 'Connector', def: 'A safe link that lets Claude read Gmail, Calendar or Drive when you ask.' },
  { term: 'Second brain', def: 'A folder of simple notes about your business that you and Claude both use.' },
  { term: 'Vault', def: 'Obsidian’s name for your second-brain folder.' },
  { term: 'Hallucination', def: 'When AI states something confidently that is wrong. Check numbers and names.' },
  { term: 'Research mode', def: 'Claude searches many web pages and returns a report with sources.' },
  { term: 'Claude Code', def: 'Claude running on your computer, inside a folder, able to read and write files.' },
]
