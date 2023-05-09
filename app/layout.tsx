import './globals.css'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anton Stallbörger',
  description: 'Digital Product Designer and Developer driven by curiosity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-black',

      )}
    >
      <body className=''>
        {/* <Navbar /> */}
        <main className=''>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
