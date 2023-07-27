import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Thoughts',
  description: 'Digital Product Designer and Developer.',
};

export default function ThoughtsPage() {
  return (
    <section>
      <h1 className="mb-10">Thoughts</h1>
      <Image 
        src='/images/boost/mockup.png'
        alt='Boost Mockup · Anton Stallbörger'
        width={3840}
        height={2560}
        className='w-full h-auto bg-zinc-100 dark:bg-zinc-900 mb-20'
        priority
      />
    </section>
  );
}
