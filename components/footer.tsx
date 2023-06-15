'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className='max-w-[593px] mx-auto px-4 sm:px-0 mt-60 mb-10'>

            <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 mb-6" />

            <div className="flex sm:flex-row flex-row gap-6 sm:gap-0 justify-between text-zinc-500">
                <div className="flex flex-col gap-8 text-sm justify-between w-full">
                    <div className='flex flex-row justify-between border-b border-dashed dark:border-zinc-800 pb-8'>
                        <div className='flex flex-row sm:gap-32 gap-20'>
                            <Image
                                alt='Logo | Anton Stallbörger'
                                className='rounded-full h-6 w-6 border border-zinc-200 dark:border-zinc-800 hover:filter hover:invert hover:animate-spin-slow'
                                src='/logo.svg'
                                width={32}
                                height={32}
                                priority
                            />
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                    Connect
                                </p>
                                <a 
                                    href="https://twitter.com/antonstallbrgr" 
                                    className="hover:text-blue-600 hover:underline" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Twitter
                                </a>
                                <a 
                                    href="imessage://anton@stallboerger.de" 
                                    className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    iMessage
                                </a>
                                <a 
                                    href="https://www.cosmos.so/antonsta" 
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
                                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
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
                        </div>
                        {/* <Image
                            alt='TP-7 Screen | Anton Stallbörger'
                            className='w-[100px] h-fit'
                            src='/images/main/tp7_example.svg'
                            width={129}
                            height={58}
                            priority
                        /> */}
                    </div>
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