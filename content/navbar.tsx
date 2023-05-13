'use client';

import clsx from 'clsx';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='fixed w-full h-[53px] z-50'>
            <div>
                <Link href='/'>
                </Link>
            </div>
            {/* Dropdown */}
        </div>
    );
}