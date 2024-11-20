import type { Metadata } from 'next';
import Image from 'next/image';

import styles from '../../styles/views/about.module.css'
import { format, isAfter } from 'date-fns';
import LiteralBooks from '@/components/books';

export const metadata: Metadata = {
  title: 'About',
  description: 'Software Designer',
};

interface Experience {
	company: string;
	role?: string;
	start: Date;
	end?: Date;
	description?: string;
	url?: string;
}

const experiences: Experience[] = [
	{
		company: 'Saman Collective',
		description: 'The combined efforts of Linus Rogge and me, forming intuitive and reflective software and brands.',
		url: 'https://saman.design',
		start: new Date('2023-10-01')
	},
	{
		company: 'Freelance',
		start: new Date('2023-06-15'),
		description: 'Available for projects.',
		url: 'mailto:hi@antonstallboerger.com'
	},
	{
		company: 'Essentry',
		role: 'Internship',
		start: new Date('2023-08-01'),
		end: new Date('2024-01-31'),
		description: 'Streamlining the company’s visual appearance and crafting a versatile and sustainable design system.',
		url: 'https://essentry.com'
	},
	{
		company: 'CREATE Education',
		role: 'Internship',
		start: new Date('2021-02-01'),
		end: new Date('2021-06-30'),
	},
	{
		company: 'UP Design',
		role: 'Internship',
		start: new Date('2018-08-01'),
		end: new Date('2018-08-30'),
	}
]

export default function AboutPage() {
	return (
	<>
		<figure className={styles.figure}>
			<Image 
				src={`/images/about/anton-1.jpeg`}
				alt={`Anton Stallbörger`}
				width="1920" 
				height="305"
				className={styles.image} />
		</figure>
		<figure className={styles.figure}>
			<Image 
				src={`/images/about/anton-hamburg-shoes.jpeg`}
				alt={`Anton Stallbörger`}
				width="1920" 
				height="305"
				className={styles.image} />
		</figure>
		<figure className={styles.figure}>
			<Image 
				src={`/images/about/anton-close-up-black-and-white.jpg`}
				alt={`Anton Stallbörger`}
				width="1920" 
				height="305"
				className={styles.image} />
		</figure>
		<figure className={styles.figure}>
			<Image 
				src={`/images/about/anton-flims-gelbes-haus.jpeg`}
				alt={`Anton Stallbörger`}
				width="1920" 
				height="305"
				className={styles.image} />
		</figure>

		<header className={styles.header}>
			<h1 className={styles.title}>About Anton</h1>
			<p>B. 2002</p>
		</header>

		<section className={styles.content}>
			<p>
				I am a passionate designer and developer who is driven by a love for great, high-quality and thoughtful design. Design is an integral part of my everyday life, and I believe that it has the power to shape and improve the world around us.
			</p>
			<p>
				In addition to my work, I also value meaningful conversations and good music, which help to inspire and motivate me in my creative process.
			</p>
		</section>

		<section className={styles.like}>
			<h2>Things I like</h2>
			<ul>
				<li><a href='https://www.cosmos.so/stallboerger/goods' className={styles.link} target='_blank' rel="noreferrer">Quality goods</a></li>
				<li>Wearing black</li>
				<li><a href='https://music.apple.com/de/playlist/con-amore/pl.u-r2yBDE4tdN97Zo?l=en-GB' className={styles.link} target='_blank' rel="noreferrer">Piano music</a></li>
				<li>Good food</li>
				<li>Mountains</li>
				<li><a href='https://www.cosmos.so/stallboerger/architecture' className={styles.link} target='_blank' rel="noreferrer">Architecture</a></li>
				<li><a href='https://www.cosmos.so/stallboerger/interior' className={styles.link} target='_blank' rel="noreferrer">Interior Design</a></li>
				<li><a href='https://www.cosmos.so/stallboerger/concrete' className={styles.link} target='_blank' rel="noreferrer">Concrete</a></li>
			</ul>
		</section>
		<section className={styles.dislike}>
			<h2>Things I don’t like</h2>
			<ul>
				<li>Smalltalk</li>
				<li>Sparkling water</li>
				<li>Alcohol</li>
				<li>Crowds</li>
				<li>Marble</li>
			</ul>
		</section>

		<section className='col-span-full grid grid-cols-subgrid lg:col-span-8 lg:col-start-9 border-t border-t-sand-6 dark:border-t-sand-dark-6 pt-8 mt-20'>
			<h2 className='col-span-8 md:col-span-8'>Currently reading</h2>

			<LiteralBooks customClass='col-span-8' />
		</section>

		<section className={styles.experience}>
			<h2 className={styles.title}>Experience</h2>

			{experiences.map((experience, key) => (
				<div className={styles.position} key={key}>
					<div className={styles.meta}>
						<h3 className={styles.title}>
							{
								experience.url
								? <a href={`${experience.url}`} target='_blank' className={styles.link}>{experience.role && `${experience.role} at`} {experience.company}</a>
								: <>{experience.role && `${experience.role} at`} {experience.company}</>
							}
							
						</h3>
						<span className={styles.timeframe}>
							{
								(experience.end && isAfter(experience.end, new Date())) || !experience.end
								? `${format(experience.start, 'LLLL, yyyy')} – Ongoing`
								: `${format(experience.start, 'LLLL, yyyy')} – ${format(experience.end, 'LLLL, yyyy')}`
							}
						</span>
					</div>

					{experience.description && <p className={styles.description}>{experience.description}</p>}
				</div>
			))}

		</section>
	</>
	);
}