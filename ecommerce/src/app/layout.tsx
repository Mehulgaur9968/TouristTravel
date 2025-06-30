import React from 'react'
import { Metadata } from 'next'
import { Jost } from 'next/font/google'
import { headers } from 'next/headers'

import { AdminBar } from './_components/AdminBar'
import { Footer } from './_components/Footer'
import { Providers } from './_providers'
import { InitTheme } from './_providers/Theme/InitTheme'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'

import './_css/app.scss'

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jost',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || ''
  const isTravel = pathname.startsWith('/travel')

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={jost.variable}>
        <Providers>
          {!isTravel && <AdminBar />}
          <main className="main">{children}</main>
          {/* @ts-expect-error */}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Wanderlust Travel - Discover Your Next Adventure',
  description: 'Explore the world\'s most amazing destinations with our expert travel services. Find the best deals on flights, hotels, and tours.',
  keywords: 'travel, tourism, vacation, destinations, flights, hotels, tours, adventure',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://wanderlust-travel.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@wanderlusttravel',
  },
  openGraph: mergeOpenGraph(),
}
