import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gov AI Interfaces',
  description: 'A platform for various Gov AI interfaces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
