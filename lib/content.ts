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
    tagline: 'Your first proper chat with AI. Ten minutes, that’s it.',
    result: 'one client reply drafted by Claude, checked and fixed by you.',
    minutes: 10,
    learn: [
      'Think of Claude as a super sharp new hire. It reads, writes, researches and thinks with you.',
      'It only knows what you tell it. Real details in, useful work out.',
      'Talk to it like you’d brief someone in the office: the goal, the facts, and ask for a draft.',
    ],
    tasks: [
      {
        id: 'i1',
        title: 'Get the Claude app',
        body: 'Download it on your laptop and phone, and sign in with your paid plan.',
        xp: 20,
        link: { label: 'claude.ai/download', href: 'https://claude.ai/download' },
      },
      {
        id: 'i2',
        title: 'Send your first real prompt',
        body: 'Copy this, paste it in Claude and just answer what it asks.',
        xp: 30,
        prompt: P(`
I run VisionOOH, an outdoor and on-ground marketing agency working across 100+ Tier 1, 2 and 3 cities in India, for brands like Amul and Mother Dairy.
I am new to AI. Ask me 3 short questions about my week, then tell me the 3 tasks you could take off my desk first. Keep it simple.`),
      },
      {
        id: 'i3',
        title: 'Ask for a draft, not an answer',
        body: 'Take a real client email or WhatsApp you still have to reply to, and use this.',
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
        why: 'Claude can’t see your business. The more real stuff you give it, the better the draft.',
      },
      {
        q: 'Claude wrote a reply to your client. What next?',
        options: ['Send it straight away', 'Read it, fix anything wrong, then send', 'Ask Claude to send it'],
        answer: 1,
        why: 'Claude drafts, you decide. Always check names, prices and dates.',
      },
    ],
  },
  {
    id: 'fuel',
    n: 2,
    code: 'FUEL',
    title: 'Teach Claude your business',
    tagline: 'Explain VisionOOH once. Never again.',
    result: 'a “My Business” Project that already knows VisionOOH.',
    minutes: 15,
    learn: [
      'A Project is a folder inside Claude with its own memory. It reads those files and instructions every time.',
      'Put your profile, rate card and best proposals in one Project called “My Business”.',
      'After that, every chat in there already knows Amul, your towns and your pitch.',
    ],
    tasks: [
      {
        id: 'f1',
        title: 'Make a Project called “My Business”',
        body: 'In Claude, open Projects and create a new one. Call it My Business.',
        xp: 20,
      },
      {
        id: 'f2',
        title: 'Upload your business profile',
        body: 'I already wrote it from what you sent me. Download it and drop it in the Project files.',
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
        body: 'Open a new chat inside the Project and ask this.',
        xp: 20,
        prompt: 'What do you know about VisionOOH? List what is missing from my profile that would help you most.',
      },
    ],
    quiz: [
      {
        q: 'Where should your rate card and business profile live?',
        options: ['In a Claude Project', 'Pasted into every chat', 'Nowhere, Claude remembers everything'],
        answer: 0,
        why: 'A Project keeps your files and instructions, so every chat in it starts with your context.',
      },
      {
        q: 'Claude doesn’t know your printing cost. It should…',
        options: ['Guess a fair number', 'Ask you', 'Use a competitor’s rate'],
        answer: 1,
        why: 'A wrong rate in a quote costs real money. Your instructions tell it to ask.',
      },
    ],
  },
  {
    id: 'thrusters',
    n: 3,
    code: 'THRUSTERS',
    title: 'Install your skills',
    tagline: 'Eleven ready playbooks, made for outdoor.',
    result: 'a one-page brief on a brand you want to win, plus six hoarding lines.',
    minutes: 15,
    learn: [
      'A skill is a saved playbook. Upload it once and Claude uses it whenever that job comes up.',
      'You don’t even need its name. Say “make a pitch for Britannia” and the pitch skill kicks in.',
      'Your eleven cover research, pitches, hoarding copy, media plans, outreach, replies and reports.',
    ],
    tasks: [
      {
        id: 't1',
        title: 'Turn on skills',
        body: 'In Claude: Settings, then Capabilities. Switch on code execution and file creation, then find Skills.',
        xp: 20,
      },
      {
        id: 't2',
        title: 'Upload the first two skills',
        body: 'Download start-here and business-profile, then hit Upload skill for each one.',
        xp: 30,
        link: { label: 'Open the skills list', href: '#toolkit' },
      },
      {
        id: 't3',
        title: 'Research a brand you want to win',
        body: 'Pick one brand from your lead vault and run this.',
        xp: 30,
        prompt: 'Research [brand] for my meeting next week. One page: what they launched in the last 12 months, where they are expanding, where they already advertise outdoors, who runs marketing, and two smart questions I should ask. Sources at the end.',
      },
      {
        id: 't4',
        title: 'Write hoarding lines',
        body: 'Give the billboard-copy skill a go.',
        xp: 30,
        prompt: 'Write 6 Hindi and English lines for a 40x20 ft dairy hoarding in Patna for a summer lassi launch. Seven words or fewer each. Recommend the best two.',
      },
    ],
    quiz: [
      {
        q: 'What is a skill?',
        options: ['A paid add-on', 'A saved playbook Claude follows for a job', 'A type of chat'],
        answer: 1,
        why: 'Skills are instructions you upload once. Claude picks the right one when your ask fits.',
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
    tagline: 'One place for everything you know.',
    result: 'your VisionOOH Brain open in Obsidian, with your first daily note.',
    minutes: 25,
    learn: [
      'A second brain is just a folder of simple notes: clients, towns, pitches, lessons.',
      'Obsidian is a free app that shows those notes nicely and links them up.',
      'Claude reads it when you upload a note to your Project, or straight from the folder with Claude Code (Level 8).',
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
        body: 'A ready vault with your profile, clients and town clusters. Unzip it, then in Obsidian pick “Open folder as vault”.',
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
        body: 'Tell Claude about your day and it turns it into a note for Calendar/Daily.',
        xp: 30,
        prompt: 'Here is my day in rough words (below). Turn it into a short daily note with three headings: What happened, Who to follow up, Decisions. Date it today.\n\n[speak or type your day here]',
      },
    ],
    quiz: [
      {
        q: 'Where does a client brief go, exactly as you got it?',
        options: ['Raw', 'Wiki', 'Home'],
        answer: 0,
        why: 'Raw keeps the originals untouched. Claude reads them and writes summaries elsewhere.',
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
    tagline: 'Let Claude read your inbox, calendar and Drive.',
    result: 'tomorrow’s meetings prepped, and one research brief with sources.',
    minutes: 15,
    learn: [
      'Connectors let Claude read Gmail, Google Calendar and Google Drive when you ask it to.',
      'Research mode makes Claude dig through the web properly and come back with a sourced report.',
      'Claude can draft from your inbox, but it never sends. You’re always the one who hits send.',
    ],
    tasks: [
      {
        id: 'n1',
        title: 'Connect Gmail, Calendar or Drive',
        body: 'In Claude: Settings, then Connectors. Connect the ones you actually use.',
        xp: 20,
      },
      {
        id: 'n2',
        title: 'Prep for tomorrow',
        body: 'Ask Claude to read your calendar and get you ready.',
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
        why: 'Connectors let Claude read and draft. Sending is always your call.',
      },
      {
        q: 'Which is safe to paste into an AI chat?',
        options: ['Your bank password', 'A client brief', 'Your Aadhaar number'],
        answer: 1,
        why: 'Business docs are fine. Never paste passwords, bank details, Aadhaar or PAN.',
      },
    ],
  },
  {
    id: 'orbit',
    n: 6,
    code: 'ORBIT',
    title: 'Turn leads into meetings',
    tagline: '7,522 marketing people. Start with ten.',
    result: 'ten personal first messages, ready for you to send.',
    minutes: 30,
    learn: [
      'I pulled 7,522 marketing people at 440+ Indian companies for you. They sit in your lead vault, locked.',
      'Start with the Senior ones: 886 people who actually sign off on outdoor spend.',
      'Short and specific wins. Something true about them, one line of proof, one easy ask.',
    ],
    tasks: [
      {
        id: 'o1',
        title: 'Open your lead vault and pick ten',
        body: 'Enter the access code I sent you once, set your own password, then pick ten Senior people at brands you’d love to win.',
        xp: 20,
        link: { label: 'Open the lead vault', href: `${BASE}/leads/` },
      },
      {
        id: 'o2',
        title: 'Draft ten first messages',
        body: 'Tick your ten in the vault and hit “Ask Claude about these”. Or paste them in with this prompt.',
        xp: 40,
        prompt: 'Here are 10 marketing leaders (pasted below). For each, research one true reason to write now (a launch, a new state, a festive season), then draft a LinkedIn note under 300 characters and a 90-word email. Proof line: we run outdoor for Amul and Mother Dairy across 100+ towns; 25 towns went live in 10 days. One easy ask. No fake familiarity.\n\n[paste rows here]',
      },
      {
        id: 'o3',
        title: 'Start the Monday review',
        body: 'Every Monday, 15 minutes. Bas.',
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
        q: 'Who should you start with?',
        options: ['The Senior people', 'Everyone at once', 'Only interns'],
        answer: 0,
        why: 'Senior means CMOs and marketing heads, the ones who approve outdoor budgets.',
      },
    ],
  },
  {
    id: 'radar',
    n: 7,
    code: 'RADAR',
    title: 'GitHub and inspiration',
    tagline: 'Find good stuff, keep it, make it yours.',
    result: 'a GitHub account, five saved ads in your Brain, and one skill you made yourself.',
    minutes: 30,
    learn: [
      'GitHub is where people share code and AI skills for free. A “repo” is just one project folder there.',
      'Before you use anything from GitHub, check four things: stars, last update, the README and the license.',
      'Good ideas disappear if you don’t save them. Keep every ad or hoarding you like in Inspiration/ in your Brain.',
    ],
    tasks: [
      {
        id: 'r1',
        title: 'Make a GitHub account',
        body: 'Free. Use your work email. You only need it to read and download for now.',
        xp: 20,
        link: { label: 'github.com/signup', href: 'https://github.com/signup' },
      },
      {
        id: 'r2',
        title: 'Read a repo like a pro',
        body: 'Open Anthropic’s official skills repo. Look at the stars, when it was last updated, the README and the license. Then ask Claude to explain it.',
        xp: 30,
        link: { label: 'github.com/anthropics/skills', href: 'https://github.com/anthropics/skills' },
        prompt: 'Explain this GitHub repo to me in simple words: https://github.com/anthropics/skills. What does it do, who made it, is it safe to use, and which 3 things in it are useful for an outdoor advertising agency? Check the license and when it was last updated.',
      },
      {
        id: 'r3',
        title: 'Save five ads you like',
        body: 'Open Meta Ad Library, search a brand like Amul or Blinkit, and screenshot five ads or hoardings that stop you. Drop them in Inspiration/ in your Brain.',
        xp: 30,
        link: { label: 'Meta Ad Library', href: 'https://www.facebook.com/ads/library/' },
      },
      {
        id: 'r4',
        title: 'Ask Claude what makes them work',
        body: 'Upload the five screenshots to Claude with this prompt. Paste the answer into the note in Inspiration/.',
        xp: 30,
        prompt: 'Here are 5 ads I like (attached). For each: what is the one idea, why it works, and how I could use the same idea on a hoarding in a Tier 2 town for an FMCG client. Then give me 3 patterns they share.',
      },
      {
        id: 'r5',
        title: 'Make your own skill',
        body: 'Pick a job you repeat every week, like a site-visit report. Ask Claude to turn it into a skill, then upload it like the other eleven.',
        xp: 40,
        prompt: 'Help me make a new Claude skill using your skill-creator skill. The job: [describe a task I do every week, step by step]. Ask me questions one at a time, then give me the finished skill as a zip I can upload.',
      },
    ],
    quiz: [
      {
        q: 'You found a cool repo on GitHub. What do you check first?',
        options: ['Just download it', 'Stars, last update, README and license', 'Only the logo'],
        answer: 1,
        why: 'Those four tell you if people trust it, if it’s still looked after, what it does and if you can use it.',
      },
      {
        q: 'Where do your saved ads and hoardings go?',
        options: ['Inspiration/ in your Brain', 'Your phone gallery', 'Nowhere, you’ll remember'],
        answer: 0,
        why: 'In the Brain, Claude can read them later and use them when you pitch.',
      },
    ],
  },
  {
    id: 'deepspace',
    n: 8,
    code: 'DEEP SPACE',
    title: 'Claude Code (power user)',
    tagline: 'Claude working right inside your Brain folder.',
    result: 'Claude reading your vault and filling the gaps with you.',
    minutes: 30,
    learn: [
      'Claude Code runs Claude on your computer, inside a folder. It can read and write your notes.',
      'Open it inside your VisionOOH Brain and it reads CLAUDE.md first, then works with your notes.',
      'Two habits keep the Brain fresh: a “wrap” at the end of work, and the Monday review.',
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
        title: 'Install all eleven skills in one go',
        body: 'Copy the command for your computer from the Toolkit and run it in the terminal.',
        xp: 30,
        link: { label: 'Open the Toolkit', href: '#toolkit' },
      },
      {
        id: 'd3',
        title: 'Run Claude inside your Brain',
        body: 'Open the terminal in your VisionOOH Brain folder, type claude, then say this.',
        xp: 40,
        prompt: 'Read CLAUDE.md and Home.md. Then interview me for 10 minutes to fill every "(Fill in)" in my vault, one question at a time. Show me each change before you save it.',
      },
    ],
    quiz: [
      {
        q: 'What does Claude read first in your Brain folder?',
        options: ['CLAUDE.md', 'A random note', 'Nothing'],
        answer: 0,
        why: 'CLAUDE.md holds the rules and the map. Claude reads it before anything else.',
      },
    ],
  },
  {
    id: 'station',
    n: 9,
    code: 'STATION',
    title: 'Your own AI, always on',
    tagline: 'An assistant on a server that pings you on Telegram.',
    result: 'a morning brief landing on your Telegram every weekday at 8.',
    minutes: 60,
    learn: [
      'A VPS is a small computer you rent online. It stays on 24/7, even when your laptop is shut.',
      'Hermes is a free AI agent you install on it. You chat with it on Telegram and it runs jobs on a schedule.',
      'This is exactly how I run my own one. Do this level on a call with me, the setup takes about an hour.',
    ],
    tasks: [
      {
        id: 's1',
        title: 'Rent a small VPS',
        body: 'Something like OVHcloud VPS-1 with Ubuntu 24.04, about S$7 a month. You pay for it; I’ll help you pick.',
        xp: 30,
        link: { label: 'OVHcloud VPS', href: 'https://www.ovhcloud.com/en/vps/' },
      },
      {
        id: 's2',
        title: 'Install Hermes',
        body: 'On the server, run these one by one. Setup asks which AI model to use and for its key.',
        xp: 40,
        prompt: 'curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash\nhermes setup',
      },
      {
        id: 's3',
        title: 'Connect a Telegram bot',
        body: 'In Telegram, message @BotFather, send /newbot and copy the token. Then run this and paste it in.',
        xp: 30,
        prompt: 'hermes gateway setup\nhermes gateway install',
      },
      {
        id: 's4',
        title: 'Set up your morning brief',
        body: 'One command, and it messages you every weekday at 8 am.',
        xp: 40,
        prompt: 'hermes cron create "0 8 * * 1-5" "Give me a short morning brief: top 3 things to do today for VisionOOH, any big FMCG or dairy marketing news in India, and one lead to follow up." --name morning-brief --deliver telegram',
      },
      {
        id: 's5',
        title: 'Learn the safety rules',
        body: 'Never share the bot token. Only let your own Telegram account talk to the bot. No bank or password access, ever. Start with read-only jobs, and check what it sends before you act on it.',
        xp: 20,
      },
    ],
    quiz: [
      {
        q: 'Why use a VPS and not your laptop?',
        options: ['It’s faster at typing', 'It stays on 24/7, so scheduled jobs always run', 'It’s free'],
        answer: 1,
        why: 'Your laptop sleeps. The server doesn’t, so the 8 am brief always lands.',
      },
      {
        q: 'Someone asks for your bot token. You…',
        options: ['Send it, it’s just a code', 'Never share it', 'Post it in the group'],
        answer: 1,
        why: 'Anyone with the token can control your bot. Keep it private like a password.',
      },
    ],
  },
]

export const RANKS = [
  { min: 0, title: 'Cadet' },
  { min: 120, title: 'Pilot' },
  { min: 400, title: 'Navigator' },
  { min: 800, title: 'Commander' },
  { min: 1600, title: 'Mission Control' },
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
  { path: 'CLAUDE.md', kind: 'file', title: 'The rulebook', body: 'Claude Code reads this first. It says who you are, where things live and the rules: never invent rates, draft only, keep clients apart. In the Claude app, just upload it to your Project.', example: '“Never quote a rate without asking Akshay.”' },
  { path: 'Home.md', kind: 'file', title: 'Your dashboard', body: 'This week’s top 5, live pitches, live campaigns. Open it every morning, Claude keeps it updated.', example: 'Top 5 → 1. Send Britannia pitch by Friday' },
  { path: 'Atlas/', kind: 'folder', title: 'Facts that rarely change', body: 'Your business profile and rate card, one note per client, one note per town cluster with its sites.', example: 'Atlas/Clients/Amul.md · Atlas/Cities/Ranchi-cluster.md' },
  { path: 'Efforts/', kind: 'folder', title: 'Every live pitch and campaign', body: 'One folder per pitch or campaign. Each has an Overview: goal, status, next steps, decisions.', example: 'Efforts/Britannia-Summer-2027/Overview.md' },
  { path: 'Calendar/Daily/', kind: 'folder', title: 'Daily notes', body: 'One short note a day: what happened, who to follow up, decisions. Just speak it into your phone and Claude formats it.', example: 'Calendar/Daily/2026-11-24.md' },
  { path: 'Raw/', kind: 'folder', title: 'Originals, untouched', body: 'Client briefs, PDFs, call transcripts, exactly as you got them. Never edited, so you always have the original.', example: 'Raw/briefs/britannia-brief-nov.pdf' },
  { path: 'Wiki/', kind: 'folder', title: 'Lessons learned', body: 'What worked in which market, the objections and the answers that won. Your playbook gets better every month.', example: 'Wiki/objection-price-too-high.md' },
  { path: 'Sessions/', kind: 'folder', title: 'Work session summaries', body: 'At the end of a session Claude writes a short summary here, so tomorrow it picks up where you left off.', example: 'Sessions/2026-11-24-britannia-pitch.md' },
  { path: 'Inspiration/', kind: 'folder', title: 'Ads that stopped you', body: 'Screenshots of ads and hoardings you liked, with a short note on why each one works. Claude reads them when you pitch.', example: 'Inspiration/2026-11-amul-monsoon.md' },
  { path: 'Templates/', kind: 'folder', title: 'Note templates', body: 'Blank layouts for a new pitch, a daily note and a lesson. Copy, fill, done.', example: 'Templates/effort.md' },
]

export const STATS = [
  { title: 'Leads found\nfor you', value: '7522', footer: 'Marketing people', detail: 'ring' as const },
  { title: 'Towns in\nyour network', value: '100', unit: '+', footer: 'Tier 1, 2 and 3', detail: 'wave' as const },
  { title: 'Site uptime\nreported', value: '99', unit: '%', footer: 'VisionOOH figure', detail: 'slider' as const, labels: ['0', '100'] },
  { title: 'Towns live\nin ten days', value: '25', unit: '+', footer: 'Cluster launches', detail: 'cross' as const, labels: ['Launch', 'd1', 'd10'] },
]

export const GLOSSARY = [
  { term: 'Prompt', def: 'What you type to Claude. A good prompt has the goal, the facts and the format you want back.' },
  { term: 'Context', def: 'Everything Claude knows about your situation. More real context, better answers. Simple.' },
  { term: 'Project', def: 'A Claude folder with its own files and instructions, read in every chat inside it.' },
  { term: 'Skill', def: 'A saved playbook. Upload once; Claude uses it when your request fits.' },
  { term: 'Connector', def: 'A safe link that lets Claude read Gmail, Calendar or Drive when you ask.' },
  { term: 'Second brain', def: 'A folder of simple notes about your business that you and Claude both use.' },
  { term: 'Vault', def: 'Obsidian’s name for your second-brain folder.' },
  { term: 'Hallucination', def: 'When AI states something confidently that is wrong. Check numbers and names.' },
  { term: 'Research mode', def: 'Claude searches many web pages and returns a report with sources.' },
  { term: 'GitHub', def: 'A free site where people share code and AI skills. One project there is called a repo.' },
  { term: 'VPS', def: 'A small computer you rent online that stays on all the time. Your own AI can live there.' },
  { term: 'Claude Code', def: 'Claude running on your computer, inside a folder, able to read and write files.' },
]
