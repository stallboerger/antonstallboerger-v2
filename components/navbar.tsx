'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {

    return (
        <nav className='fixed grid-cols-16 grid gap-4 md:gap-8 justify-between items-center w-full h-[53px] z-50 px-4 lg:px-8 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black select-none'>
            <Link href='/' className='hover:underline'>
                Home
            </Link>
            <div className='gap-6 flex col-span-5 col-start-9'>
                <Link href='/about' className='hover:underline'>
                    About
                </Link>
                <Link href='/thoughts' className='hover:underline'>
                    Thoughts
                </Link>
                <Link href='/playground' className='hover:underline'>
                    Playground
                </Link>
            </div>
            <Image 
                alt='Logo · Anton Stallbörger'
                className='hover:animate-spin-slow h-4 w-4 self-center dark:invert col-start-[16] justify-self-end'
                src='/logo.svg'
                width={24}
                height={24}
                priority
            />
        </nav>
    );
}