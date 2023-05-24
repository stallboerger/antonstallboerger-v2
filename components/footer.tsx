'use client';

import clsx from 'clsx';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='max-w-[593px] mx-auto px-4 sm:px-0 mt-60 mb-20'>

            <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 mb-6" />

            <div className="flex sm:flex-row flex-row gap-6 sm:gap-0 justify-between text-zinc-500">
                <div className="flex flex-col gap-8 text-sm justify-between w-full">
                    <div className='flex flex-row gap-20 border-b border-dashed dark:border-zinc-800 pb-8'>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                Connect
                            </p>
                            <a 
                                href="https://twitter.com/AntonStalli" 
                                className="hover:text-blue-600 hover:underline" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                            <a 
                                href="https://github.com/antonstallboerger" 
                                className="hover:text-purple-600 hover:underline" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a 
                                href="https://github.com/antonstallboerger" 
                                className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Cosmos
                            </a>
                            <a 
                                href="https://read.cv/antonsta" 
                                className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Read.cv
                            </a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:underline">
                                Explore
                            </p>
                            <Link 
                                href='/about' 
                                className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline"
                            >
                                About
                            </Link>
                            <Link 
                                href='/thoughts' 
                                className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline"
                            >
                                Thoughts
                            </Link>
                            <Link 
                                href='/playground' 
                                className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline"
                            >
                                Playground
                            </Link>
                        </div>
                        <p>
                            this is a quote
                        </p>
                    </div>
                    {/* <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Information</p>
                        <Link href='/colophon' className="hover:text-zinc-900 dark:hover:text-zinc-100">Colophon</Link>
                        <Link href='/legalnotice' className="hover:text-zinc-900 dark:hover:text-zinc-100">Legal Notice</Link>
                        <Link href='/privacypolicy' className="hover:text-zinc-900 dark:hover:text-zinc-100">Privacy Policy</Link>
                    </div> */}
                    <div className='flex flex-row gap-4 text-sm'>   
                        <p className="text-sm text-zinc-900 font-medium dark:text-zinc-100">&copy; 2023 Anton Stallbörger</p>
                        <Link 
                            href='/colophon' 
                            className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline"
                        >
                            Colophon
                        </Link>
                        <Link 
                            href='/imprint' 
                            className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline"
                        >
                            Imprint
                        </Link>
                    </div>
                </div>   
            </div>
        </div>
    );
}