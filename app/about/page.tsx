import type { Metadata } from 'next';
import Image from 'next/image';

import styles from '../../styles/views/about.module.scss'
import { format, isAfter } from 'date-fns';

export const metadata: Metadata = {
  title: 'About',
  description: 'Digital Product Designer and Developer.',
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
		company: 'Freelance',
		start: new Date('2023-06-15'),
		description: 'Available for world-changing projects.',
		url: 'mailto:anton@stallboerger.de'
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
	}
]

export default function AboutPage() {
	return (
	<>
		<figure className={styles.figure}>
			<Image 
				src={`/images/about/anton-1.png`}
				alt={`Anton Stallbörger`}
				width="1920" 
				height="305"
				className={styles.image} />
		</figure>
		<figure className={styles.figure}>
			<Image 
				src={`/images/about/anton-2.png`}
				alt={`Anton Stallbörger`}
				width="1920" 
				height="305"
				className={styles.image} />
		</figure>
		<figure className={styles.figure}>
			<Image 
				src={`/images/about/anton-3.png`}
				alt={`Anton Stallbörger`}
				width="1920" 
				height="305"
				className={styles.image} />
		</figure>
		<figure className={styles.figure}>
			<Image 
				src={`/images/about/anton-4.png`}
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
				Pushing the boundaries of design and striving to create something truly unique and meaningful is a constant pursuit of mine. In addition to my work, I also value meaningful conversations and good music, which help to inspire and motivate me in my creative process.
			</p>
			<p>
				My goal is to continue improving, learning, and exploring all the different areas life has to offer, with the ultimate goal of building a beloved home with the highly talented people at Norm Architects.
			</p>
		</section>

		<section className={styles.like}>
			<h2>Things I like</h2>
			<ul>
				<li>Quality goods</li>
				<li>Black</li>
				<li>Melodic House</li>
				<li>Good food</li>
			</ul>
		</section>
		<section className={styles.dislike}>
			<h2>Things I don’t like</h2>
			<ul>
				<li>Waiting for food</li>
				<li>Smalltalk</li>
				<li>Sparkling water</li>
			</ul>
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