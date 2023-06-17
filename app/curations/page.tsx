import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Curations',
  description: 'Software Designer and Developer',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl mb-10">Curations</h1>
      <p className='mb-20'>
        Curations is a website that offers a curated collection of stunning tools and website inspirations for free. The website was created with the goal of helping designers, developers, and everyone else discover new and innovative tools and ideas for their projects.
      </p>
      <Image 
        src='/images/curations/mockup.png'
        alt='Curations Mockup · Anton Stallbörger'
        width={3840}
        height={2560}
        className='w-full h-auto bg-zinc-100 dark:bg-zinc-900 mb-20'
        priority
      />
      <h2 className='text-base mb-4 font-medium'>Features</h2>
      <p className='mb-20'>
        One of the key features of Curations is its extensive collection of design tools and resources. The website offers a wide range of design assets, including templates, graphics, icons, and more, all of which are carefully selected by the Curations team. This allows users to quickly find the resources they need to bring their creative ideas to life.
      </p>
      <Image 
        src='/images/curations/screen1.png'
        alt='Curations Screen · Anton Stallbörger'
        width={3840}
        height={2560}
        className='w-full h-auto bg-zinc-100 dark:bg-zinc-900 mb-20'
        priority
      />
      <h2 className='text-base mb-4 font-medium'>Web Inspiration</h2>
      <p className='mb-20'>
        In addition to its design resources, Curations also features a section dedicated to website inspiration. This section showcases some of the most beautifully designed websites from around the world, offering users a chance to see what&apos;s possible with modern design techniques and technologies.
      </p>
      <Image 
        src='/images/curations/screen2.png'
        alt='Curations Screen · Anton Stallbörger'
        width={3840}
        height={2560}
        className='w-full h-auto bg-zinc-100 dark:bg-zinc-900 mb-20'
      />
      <h2 className='text-base mb-4 font-medium'>Interface</h2>
      <p className='mb-20'>
        Another key aspect of Curations is its user-friendly interface. The website is easy to navigate and users can search for specific resources or browse through the different categories to find what they need. This makes it easy for users to find the resources they need, even if they don&apos;t know exactly what they&apos;re looking for.
      </p>
      <Image 
        src='/images/curations/ad.png'
        alt='Curations Ad · Anton Stallbörger'
        width={3840}
        height={2560}
        className='w-full h-auto bg-zinc-100 dark:bg-zinc-900 mb-20'
      />
      <h2 className='text-base mb-4 font-medium'>Conclusion</h2>
      <p className=''>
        Overall, Curations has been a greatly appreciated by users since its launch, thanks to its extensive collection of high-quality design resources and its user-friendly interface. Its focus on providing free resources has also helped it to gain a loyal following among designers and creative professionals.
      </p>
      <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 mb-10 mt-20" />
      <Link href="/boost" className='flex w-fit group'>
        <Image
          src="/images/boost/mockup.png"
          alt="Curations"
          width={1920}
          height={1080}
          className='w-16'
        />
        <div className='ml-4 self-center'>
          <p className='font-medium'>
            Boost
          </p>
          <p className='text-sm text-zinc-500 group-hover:underline'>
            View case study
          </p>
        </div>
      </Link>
    </section>
  );
}
