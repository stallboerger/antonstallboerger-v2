import '/styles/base.scss'
import { useEffect } from 'react'
import Soehne from 'next/font/local'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

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
    	url: `https://antonstallboerger.com`,
		siteName: 'Anton Stallbörger',
		images: [
			{
				url: `https://antonstallboerger.com/og.jpg`,
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
		images: [
			{
				url: `https://antonstallboerger.com/og.jpg`,
				width: 1920,
				height: 1080,
			},
		],
	},
	icons: {
		shortcut: `https://antonstallboerger.com/favicon.ico`,
	},
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
			<body className='antialiased text-[#343433] bg-white dark:text-[#cbcbcc] dark:bg-black text-base selection:bg-[#D8ECFC] selection:text-[#008CFF] dark:selection:bg-[#0E1E35] min-h-full flex flex-col'>
				<Navbar />
				
				<main id='swup' className='transition-fade pt-[140px] md:pt-[180px] h-auto px-4 mb-auto lg:px-8 grid-cols-8 sm:grid-cols-16 grid gap-4 md:gap-8'>
					{children}

					<Footer />
				</main>

				<Analytics />
			</body>
		</html>
	)
}
