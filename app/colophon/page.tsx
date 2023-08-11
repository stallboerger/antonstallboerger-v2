import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Colophon',
  description: 'Digital Product Designer and Developer.',
};

export default function ColophonPage() {
  return (
    <>
        <section className='col-span-full lg:col-span-8 md:col-span-12 lg:top-[calc(53px_+_32px)] lg:self-start'>
            <h1 className=''>Colophon</h1>
            <p className='mb-20'>Last updated Aug 11, 2023</p>
        </section>
        <section className='lg:col-span-6'>
            <h2 className='mb-4 text-base'>Typography</h2>
            <p className='mb-20 leading-relaxed'>
                <a href='https://klim.co.nz/retail-fonts/soehne/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Söhne</a> is a typeface designed and published by the <a href='https://klim.co.nz/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Klim Type Foundry</a>. It is the memory of Akzidenz-Grotesk framed through the reality of Helvetica. Söhne captures the analogue materiality of “Standard Medium” used in Unimark&rsquo;s legendary wayfinding system for the NYC Subway.
            </p>
            <h2 className='mb-4 text-base'>Tech stack</h2>
            <p className='mb-6 leading-relaxed'>
                Built with <a href='https://nextjs.org/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Next.js</a> and <a href='https://tailwindcss.com/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Tailwind CSS</a>. Hosted on <a href='https://vercel.com/home' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Vercel</a>. Privacy friendly analytics with <a href='https://vercel.com/analytics' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Vercel Analytics</a>.
            </p>    
            <a href="https://github.com/antonstallboerger/antonstallboerger-v2" className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">GitHub Repository</a>
            
            <h2 className='mb-4 mt-20 text-base'>Photography</h2>
            <p className='mb-20 leading-relaxed'>
                Images were taken or created by Anton Stallbörger, if not stated otherwise. 
            </p>

            <h2 className='mb-4 mt-20 text-base'>Mockups</h2>
            <p className='mb-20 leading-relaxed'>
                All mockups are by  <a href='https://shots.so/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Shots</a> or <a href='https://supply.family/' className='text-zinc-500 w-fit hover:underline' target="_blank" rel="noreferrer">Supply Family</a>. 
            </p>

            <h2 className='mb-4 mt-6 text-base'>Inspiration</h2>
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
                    href="https://ollyevans.xyz/" 
                    className='text-zinc-500 w-fit hover:underline' 
                    target="_blank" 
                    rel="noreferrer"
                >
                    Olly Evans
                </a>
            </div>

            <h2 className='mb-4 mt-6 text-base'>Great humans</h2>
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
    </>
  );
}
