import './globals.css'
import Soehne from 'next/font/local'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

// const spaceGrotesk = Space_Grotesk({
//   src: '../public/font/SpaceGrotesk-Variable.woff2',
//   display: 'swap',
// });

const soehne = Soehne({
  src: [
    {
      path: '../public/font/soehne-buch.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/soehne-buch-kursiv.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/font/soehne-halbfett.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: {
    default: 'Anton Stallbörger',
    template: '%s · Anton Stallbörger',
  },
  description: 'Software Designer',
  openGraph: {
    title: 'Anton Stallbörger',
    description: 'Software Designer',
    url: 'https://antonstallboerger-v2.vercel.app/',
    siteName: 'Anton Stallbörger',
    images: [
      {
        url: 'https://antonstallboerger-v2.vercel.app/og.jpg',
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
    description: 'Software Designer',
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
      className={soehne.className}
    >
      <body className='antialiased text-[#343433] bg-white dark:text-[#cbcbcc] dark:bg-black text-[17px] sm:text-base selection:bg-[#D8ECFC] selection:text-[#008CFF] dark:selection:bg-[#0E1E35]'>
        <Navbar />
        <main className='pt-[140px] md:pt-[180px] h-auto mx-8 px-4 sm:px-0 grid-cols-16 grid gap-8'>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  )
}
