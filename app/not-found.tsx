'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <>
            <section className='col-span-8'>
                <p className='font-bold'>404</p>
                <p className=''>Page not found</p>
            </section>
            <section className='col-span-8 col-start-9 self-start'>
                <p className=''>
                    You just hit a route that doesn&#39;t exist.
                </p>
                <p className='mb-8'>
                    This page is just as lost as you are.
                </p>
                <div className="flex flex-col gap-2">
                    <Link 
                        href='/' 
                        className='self-start'
                    >
                        Home
                    </Link>
                    <Link 
                        href='/about' 
                        className='self-start'
                    >
                        About
                    </Link>
                    <Link 
                        href='/thoughts' 
                        className='self-start'
                    >
                        Thoughts
                    </Link>
                    <Link 
                        href='/playground' 
                        className='self-start'
                    >
                        Playground
                    </Link>
                </div>
            </section>
        </>  
    );
}
