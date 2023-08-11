import { format, parseISO } from 'date-fns'
import type { Metadata } from 'next';
import { compareDesc } from 'date-fns';
import { allThoughts } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/views/thoughts.module.scss'

export const metadata: Metadata = {
	title: 'Thoughts',
	description: 'Digital Product Designer and Developer.',
};

const thoughts = allThoughts.sort((a, b) =>
  	compareDesc(new Date(a.date), new Date(b.date))
);

export default function ThoughtsPage() {
  	return (
    	<>
			<header className={styles.header}>
        		<h1 className={styles.title}>Thoughts</h1>
        		<p className={styles.count}>{allThoughts.length} articles</p>
			</header>
      
			{thoughts.map((post, idx) => (
				<Link
					id={post.slug}
					key={idx}
					className={styles.thought}
					href={{ pathname: `/thoughts/${post.slug}` }}
				>
					<Image 
						src={`/images/thoughts/${post.image}`}
						alt={post.title}
						width="593" 
						height="305"
						className={styles.image} />
					<h3 className={styles.title}>{post.title}</h3>
					<time className={styles.year}>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
				</Link>
			))}
		</>
	);
}
