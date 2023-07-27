'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {

    return (
        <div className='fixed flex justify-between items-center w-full h-[53px] z-50 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black'>
            <Link className='content-center flex ml-4 sm:ml-6 gap-3' href='/'>  
                <Image 
                    alt='Logo · Anton Stallbörger'
                    className='hover:animate-spin-slow h-4 w-4 self-center dark:invert'
                    src='/logo.svg'
                    width={24}
                    height={24}
                    priority
                />
                <p className='font-medium self-center '>
                    Anton Stallbörger
                </p>
            </Link>
            <div className='md:flex gap-6 mr-6 hidden md:visible'>
                <Link href='/about' className='hover:underline'>
                    About
                </Link>
                <Link href='/thoughts' className='hover:underline'>
                    Thoughts
                </Link>
                <Link href='/playground' className='hover:underline'>
                    Playground
                </Link>
                <div className='bg-zinc-200 dark:bg-zinc-800 w-[1px]' />
                <a href='mailto:hi@antonstallboerger.com' className='hover:text-zinc-500'>
                    Get in touch
                </a>
            </div>
        </div>
    );
}