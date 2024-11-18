import '/styles/base.css'
import Soehne from 'next/font/local'
import type { Metadata } from 'next'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import PlausibleProvider from 'next-plausible'
import { SpeedInsights } from "@vercel/speed-insights/next"

import styles from '../styles/layout.module.css'

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
    	url: `https://stallboerger.com`,
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
	verification: {
		google: 'stqJtLv8IK8j4XXD3FJI8PnEPdMd2Kb-BLJJusaZuuA',
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
			<PlausibleProvider domain="antonstallboerger.com">
				<body className={styles.body}>
					<Navbar />
					
					<main id='swup' className={`transition-fade ${styles.layout}`}>
						{children}
					</main>

					<Footer />
					<SpeedInsights/>
				</body>
			</PlausibleProvider>
		</html>
	)
}
