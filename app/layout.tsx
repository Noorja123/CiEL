import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'CiEL | Centre for Innovation, Entrepreneurship & Learning',
  description: 'Building future entrepreneurs, innovators, creators, and independent thinkers. CiEL empowers students with entrepreneurship, AI-enabled business skills, innovation thinking, and experiential learning.',
  keywords: ['innovation', 'entrepreneurship', 'MBA', 'startup', 'AI', 'business', 'learning', 'incubation'],
  openGraph: {
    title: 'CiEL | Centre for Innovation, Entrepreneurship & Learning',
    description: 'Building future entrepreneurs, innovators, creators, and independent thinkers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
