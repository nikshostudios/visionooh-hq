import type { NextConfig } from 'next'

const base = process.env.NEXT_PUBLIC_BASE ?? ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath: base || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
