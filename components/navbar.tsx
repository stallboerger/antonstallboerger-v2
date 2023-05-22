'use client';

import Link from 'next/link';
import Explore from '../components/explore';

export default function Navbar() {
    return (
        <div className='fixed w-full h-[53px] z-50  border-b border-zinc-200 dark:border-zinc-800'>
            <div className='content-center flex h-full'>
                <Link href='/' className='font-medium self-center ml-4'>
                    Anton Stallbörger
                </Link>
                <Explore />
            </div>
            {/* Dropdown */}
        </div>
    );
}