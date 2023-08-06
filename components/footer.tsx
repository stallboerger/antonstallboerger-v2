'use client';

import dynamic from 'next/dynamic'
import Link from 'next/link';

const Clock = dynamic(() => import('./clock'), { ssr: false })

export default function Footer() {
    return (
        <footer className='mt-40 grid-cols-8 sm:grid-cols-16 grid gap-6 md:gap-8 px-4 md:px-8 mb-8 text-sm'>
            <section className='grid grid-cols-8 gap-6 col-span-full lg:col-span-8 row-start-2 lg:row-auto self-start border-t border-zinc-200 pt-8 dark:border-zinc-800'>
                <div className="flex flex-col col-span-2 gap-2">
                    <p className="font-bold text-zinc-900 dark:text-zinc-200">
                        Connect
                    </p>
                    <a 
                        href="https://twitter.com/stallboerger" 
                        className="hover:text-blue-600 self-start" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                    <a 
                        href="imessage://anton@stallboerger.de" 
                        className='hover:text-green-600 self-start'
                        target="_blank" 
                        rel="noreferrer"
                    >
                        iMessage
                    </a>
                    <a 
                        href="https://www.cosmos.so/stallboerger" 
                        className='self-start' 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        Cosmos
                    </a>
                    <a 
                        href="https://read.cv/stallboerger" 
                        className='self-start' 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        Read.cv
                    </a>
                </div>
                <div className="flex flex-col col-span-5 lg:col-span-4 col-start-3 lg:col-start-4 gap-2">
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-200">
                        Explore
                    </p>
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
                <p className="text-sm text-zinc-900 dark:text-zinc-200 font-bold lg:col-span-3 col-span-full md:col-span-2">&copy; 2023 Anton Stallbörger</p>
                <div className='flex flex-row gap-4 col-start-0 md:col-start-3 lg:col-start-4'>
                    <Link 
                        href='/colophon' 
                        className=''
                    >
                        Colophon
                    </Link>
                    <Link 
                        href='/imprint' 
                        className=''
                    >
                        Imprint
                    </Link> 
                </div>
            </section>
            <section className='col-span-full lg:col-start-9 lg:col-span-8 row-start-1 lg:row-auto self-start'> 
                <div className='flex flex-col justfy-between lg:border-t pt-6 border-zinc-200 dark:border-zinc-800'> 
                    <Clock />       
                </div>
            </section>
        </footer>
    );
}