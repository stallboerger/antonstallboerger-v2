'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='mt-40 grid-cols-16 grid gap-8 mx-8 px-4 sm:px-0 mb-8'>
            <div className='self-start col-span-8'>

                <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 mb-6" />

                <div className="w-full flex sm:flex-row flex-row gap-6 sm:gap-0 justify-between text-zinc-500">
                    <div className="flex flex-col gap-8 text-sm justify-between w-full">
                        <div className='flex flex-row gap-12'>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
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
                                    className=''
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
                                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">
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
                            <p className="text-sm text-zinc-900 dark:text-zinc-200 font-medium">&copy; 2023 Anton Stallbörger</p>
                            <Link 
                                href='/colophon' 
                                className="hover:text-zinc-900 hover:underline"
                            >
                                Colophon
                            </Link>
                            <Link 
                                href='/imprint' 
                                className="hover:text-zinc-900 hover:underline"
                            >
                                Imprint
                            </Link>
                        </div>
                    </div>   
                </div>
            </div>
        </footer>
    );
}