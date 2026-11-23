import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lead vault · VisionOOH HQ',
  robots: { index: false, follow: false },
}

export default function LeadsLayout({ children }: { children: React.ReactNode }) {
  return children
}
