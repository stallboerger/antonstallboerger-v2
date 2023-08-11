import { format, parseISO } from 'date-fns'
import type { Metadata } from 'next';
import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Thoughts',
  description: 'Digital Product Designer and Developer.',
};

const posts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
);

export default function ThoughtsPage() {
  return (
    <>
      <section className='col-span-full md:col-span-12 lg:col-span-8'>
        <h1>Thoughts</h1>
        <p className='text-zinc-500'>{allPosts.length} articles</p>
      </section>
      
      {/* <section className='col-span-full md:col-span-14 lg:col-span-12'> */}
        {posts.map((post, idx) => (
          <Link id={post.slug} key={idx} className='thought col-span-full md:col-span-4 text-black dark:text-white self-end' href={{ pathname: `/thoughts/${post.slug}` }}>
            <Image 
              src={`/images/thoughts/${post.image}`}
              alt={post.title}
              width="593" 
              height="305"
              className='mb-2 w-full' />
            {post.title} <time className='text-zinc-500'>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
          </Link>
        ))}
      {/* </section> */}
    </>
  );
}
