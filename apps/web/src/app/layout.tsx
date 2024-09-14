import './globals.css'

import type { Metadata } from 'next'

import { Providers } from './providers'
export const metadata: Metadata = {
  title: 'SaaS Platform for Streamlined Business Operations',
  description:
    'Empower your business with our comprehensive SaaS solution designed to streamline operations, boost productivity, and enhance collaboration across your teams. Discover features like real-time analytics, integrated tools, and intuitive user interfaces to drive success.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
