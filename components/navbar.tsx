'use client';

import Link from 'next/link';
import Image from 'next/image';
// import Explore from '../components/explore';

export default function Navbar() {
    return (
        <div className='fixed flex justify-between items-center w-full h-[53px] z-50 border-b border-zinc-200 dark:border-zinc-800'>
            <Link className='content-center flex ml-6 gap-2' href='/'>
                <Image 
                    alt='Logo | Anton Stallbörger'
                    className='rounded-full'
                    src='/images/main/logo_anton.png'
                    width={32}
                    height={32}
                    priority
                />
                <p className='font-medium self-center'>
                    Anton Stallbörger
                </p>
                {/* <Explore /> */}
            </Link>
            <div className='flex gap-6 mr-6'>
                <Link href='/about' className='hover:underline-offset-8 hover:underline'>
                    About
                </Link>
                <Link href='/thoughts' className='hover:underline-offset-8 hover:underline'>
                    Thoughts
                </Link>
                <Link href='/playground' className='hover:underline-offset-8 hover:underline'>
                    Playground
                </Link>
                <div className='bg-zinc-100 w-0.5' />
                <Link href='/' className='hover:text-zinc-500'>
                    Get in touch
                </Link>
            </div>
            {/* Dropdown */}
        </div>
    );
}