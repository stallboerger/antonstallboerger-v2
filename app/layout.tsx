import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Anton Stallbörger',
    template: '%s | Anton Stallbörger',
  },
  description: 'Digital Product Designer and Developer.',
  openGraph: {
    title: 'Anton Stallbörger',
    description: 'Digital Product Designer and Developer.',
    url: 'https://antonstallboerger.com',
    siteName: 'Anton Stallbörger',
    images: [
      {
        url: 'https://antonstallboerger.com/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Anton Stallbörger',
    card: 'summary_large_image',
    description: 'Digital Product Designer and Developer.',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  // verification: {
  //   google: 'google-site-verification=sD6u1ZwlQ5H2dnzBEhKvZ_uHxFIgaOd5P63k-_0AA7M',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en"
      className={spaceGrotesk.className}
    >
      <body className='antialiased pt-[140px] md:pt-[180px] max-w-[593px] h-auto mx-auto flex px-4 sm:px-0 text-zinc-900 bg-white dark:text-zinc-100 dark:bg-black'>
        {/* <Navbar /> */}
        <main className=''>
          {children}
          <Analytics />
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
