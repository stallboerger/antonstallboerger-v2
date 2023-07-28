'use client';

import dynamic from 'next/dynamic'
import Link from 'next/link';

const Clock = dynamic(() => import('./clock'), { ssr: false })

export default function Footer() {
    return (
        <footer className='mt-40 grid-cols-8 sm:grid-cols-16 grid gap-4 md:gap-8 px-4 md:px-8 mb-8 text-sm'>
            <section className='col-span-full lg:col-span-8 row-start-2 lg:row-auto self-start'>
                <div className="flex flex-col gap-8 border-t pt-6 border-zinc-200 dark:border-zinc-800">
                    <div className='flex flex-row gap-12'>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-zinc-900 dark:text-zinc-200">
                                Connect
                            </p>
                            <a 
                                href="https://twitter.com/stallboerger" 
                                className="hover:text-blue-600" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                            <a 
                                href="imessage://anton@stallboerger.de" 
                                className='hover:text-green-600'
                                target="_blank" 
                                rel="noreferrer"
                            >
                                iMessage
                            </a>
                            <a 
                                href="https://www.cosmos.so/stallboerger" 
                                className='' 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Cosmos
                            </a>
                            <a 
                                href="https://read.cv/stallboerger" 
                                className='' 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Read.cv
                            </a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-200">
                                Explore
                            </p>
                            <Link 
                                href='/about' 
                                className=''
                            >
                                About
                            </Link>
                            <Link 
                                href='/thoughts' 
                                className=''
                            >
                                Thoughts
                            </Link>
                            <Link 
                                href='/playground' 
                                className=''
                            >
                                Playground
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3 text-sm'>  
                        <p className="text-sm text-zinc-900 dark:text-zinc-200 font-bold">&copy; 2023 Anton Stallbörger</p>
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
                </div>   
            </section>
            <section className='col-span-full lg:col-start-9 lg:col-span-8 row-start-1 lg:row-auto self-start'> 
                <div className='flex flex-col justfy-between lg:border-t pt-6 border-zinc-200 dark:border-zinc-800'> 
                    <Clock />
                    <p className='mt-auto'>
                        Local time
                    </p>                 
                </div>
            </section>
        </footer>
    );
}