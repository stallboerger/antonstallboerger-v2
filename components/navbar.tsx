'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const currentRoute = usePathname();

    const defaultLinkStyle = "hover:underline"
    const activeLinkStyle = " text-black dark:text-white"

    return (
        <nav className='fixed grid-cols-16 grid gap-4 md:gap-8 justify-between items-center w-full h-[53px] z-50 px-4 lg:px-8 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black select-none'>
            <div className='col-span-3'>
                <Link href='/' className={currentRoute === "/" ? activeLinkStyle : defaultLinkStyle}>
                    Home
                </Link>
            </div>
            <div className='gap-3 md:gap-6 flex md:col-span-5 col-start-[16] justify-self-end md:col-start-9'>
                <Link href='/about' className={currentRoute === "/about" ? activeLinkStyle : defaultLinkStyle}>
                    About
                </Link>
                <Link href='/thoughts' className={currentRoute === "/thoughts" ? activeLinkStyle : defaultLinkStyle}>
                    Thoughts
                </Link>
                <Link href='/playground' className={currentRoute === "/playground" ? activeLinkStyle : defaultLinkStyle}>
                    Playground
                </Link>
            </div>
            <Image 
                alt='Logo · Anton Stallbörger'
                className='hover:animate-spin-slow h-4 w-4 self-center dark:invert col-start-[16] justify-self-end hidden mb:visible'
                src='/logo.svg'
                width={24}
                height={24}
                priority
            />
        </nav>
    );
}