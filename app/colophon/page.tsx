import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Colophon',
  description: 'Digital Product Designer and Developer.',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl mb-10">Colophon</h1>
      
      <h4 className='mb-4 text-xl'>Typography</h4>
      <p className='mb-20 leading-relaxed'>
          <a href='https://floriankarsten.github.io/space-grotesk/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Space Grotesk</a> is a typeface designed and published by <a href='https://fonts.floriankarsten.com/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Florian Karsten Typefaces</a>. A proportional sans-serif typeface variant based on <a href='https://www.colophon-foundry.org/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Colophon Foundry</a>&apos;s fixed-width Space Mono family. Free for personal and commercial use.
      </p>
      <h4 className='mb-4 text-xl'>Tech stack</h4>
      <p className='mb-6 leading-relaxed'>
          Built with <a href='https://nextjs.org/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Next.js</a>, <a href='https://tailwindcss.com/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Tailwind CSS</a>, and <a href='https://headlessui.com/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Headless UI</a>. Hosted on <a href='https://vercel.com/home' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Vercel</a>. Privacy friendly analytics with <a href='https://vercel.com/analytics' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Vercel Analytics</a>.
      </p>    
      <a href="https://github.com/antonstallboerger/antonstallboerger-v2" className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">GitHub Repository</a>
      
      <h4 className='mb-4 mt-20 text-xl'>Photography</h4>
      <p className='mb-20 leading-relaxed'>
          Images were taken or created by Anton Stallbörger, if not stated otherwise. 
      </p>

      <h4 className='mb-4 mt-20 text-xl'>Mockups</h4>
      <p className='mb-20 leading-relaxed'>
          All mockups are by  <a href='https://shots.so/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Shots</a> or <a href='https://supply.family/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Supply Family</a>. 
      </p>

      <h4 className='mb-4 mt-6 text-xl'>Inspiration</h4>
      <div className='flex flex-col gap-2 mb-20'>
          <a 
              href="https://linusrogge.com/" 
              className='text-zinc-500 w-fit hover:underline' 
              target="_blank" 
              rel="noreferrer"
          >
              Linus Rogge
          </a>
          <a 
              href="https://sdrn.co/" 
              className='text-zinc-500 w-fit hover:underline' 
              target="_blank" 
              rel="noreferrer"
          >
              Siddharth Arun
          </a>
          <a 
              href="https://www.wireframe.co/" 
              className='text-zinc-500 w-fit hover:underline' 
              target="_blank" 
              rel="noreferrer"
          >
              Wireframe
          </a>
          <a 
              href="https://www.studiolenzing.com/" 
              className='text-zinc-500 w-fit hover:underline' 
              target="_blank" 
              rel="noreferrer"
          >
              Studio Lenzing
          </a>
          <a 
              href="https://goods.wtf/" 
              className='text-zinc-500 w-fit hover:underline' 
              target="_blank" 
              rel="noreferrer"
          >
              Goods
          </a>
          <a 
              href="https://benjitaylor.info/" 
              className='text-zinc-500 w-fit hover:underline' 
              target="_blank" 
              rel="noreferrer"
          >
              Benji Taylor
          </a>
          <a 
              href="https://ollyevans.xyz/" 
              className='text-zinc-500 w-fit hover:underline' 
              target="_blank" 
              rel="noreferrer"
          >
              Olly Evans
          </a>
      </div>

      <h4 className='mb-4 mt-6 text-xl'>Great humans</h4>
      <p className='mb-6 leading-relaxed'>
          I am especially grateful for the support of the following humans:
      </p>
      <div className='flex flex-col gap-2'>
          <a 
              href="https://linusrogge.com/" 
              className='text-zinc-500 w-fit hover:underline' 
              target="_blank" 
              rel="noreferrer"
          >
              Linus Rogge
          </a>
          <a 
              href="https://designwithtech.com/" 
              className='text-zinc-500 w-fit hover:underline'
              target="_blank" 
              rel="noreferrer"
          >
              Florian Kiem
          </a>
          <a 
              href="https://www.nilseller.com/" 
              className='text-zinc-500 w-fit hover:underline'
              target="_blank" 
              rel="noreferrer"
          >
              Nils Eller
          </a>
      </div>
    </section>
  );
}
