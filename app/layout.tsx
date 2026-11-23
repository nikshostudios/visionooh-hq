import type { Metadata } from 'next'
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sans = Inter({ variable: '--font-ui', subsets: ['latin'] })
const serif = Instrument_Serif({ variable: '--font-display', subsets: ['latin'], weight: '400', style: ['normal', 'italic'] })
const mono = JetBrains_Mono({ variable: '--font-code', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VisionOOH HQ · Learn. Build. Launch.',
  description: 'Akshay’s mission control for learning Claude: levels, XP, skills and a second brain for VisionOOH.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
