'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className='max-w-[657px] mx-auto mt-40 rounded-t-3xl p-8'>

            <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800 mb-6" />

            <div className="w-full flex sm:flex-row flex-row gap-6 sm:gap-0 justify-between text-zinc-500">
                <div className="flex flex-col gap-8 text-sm justify-between w-full">
                    <div className='flex flex-row gap-20 border-b border-dashed pb-8'>
                        {/* <Image
                            alt='Logo · Anton Stallbörger'
                            className='h-6 w-6 hover:animate-spin-slow hidden sm:block'
                            src='/logo.svg'
                            width={32}
                            height={32}
                            priority
                        /> */}
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium text-zinc-900">
                                Connect
                            </p>
                            <a 
                                href="https://twitter.com/stallboerger" 
                                className="hover:text-blue-600 hover:underline" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                            <a 
                                href="imessage://anton@stallboerger.de" 
                                className="hover:text-zinc-900 hover:underline" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                iMessage
                            </a>
                            <a 
                                href="https://www.cosmos.so/stallboerger" 
                                className="hover:text-zinc-900 hover:underline" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Cosmos
                            </a>
                            <a 
                                href="https://read.cv/stallboerger" 
                                className="hover:text-zinc-900 hover:underline" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Read.cv
                            </a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium text-zinc-900">
                                Explore
                            </p>
                            <Link 
                                href='/about' 
                                className="hover:text-zinc-900 hover:underline"
                            >
                                About
                            </Link>
                            <Link 
                                href='/thoughts' 
                                className="hover:text-zinc-900 hover:underline"
                            >
                                Thoughts
                            </Link>
                            <Link 
                                href='/playground' 
                                className="hover:text-zinc-900 hover:underline"
                            >
                                Playground
                            </Link>
                        </div>
                        {/* <Image
                            alt='TP-7 Screen | Anton Stallbörger'
                            className='w-[120px] h-fit bg-zinc-900 p-2 rounded-lg'
                            src='/images/main/tp-7 test.svg'
                            width={129}
                            height={58}
                            priority
                        /> */}
                    </div>
                    <div className='flex flex-row gap-3 text-sm'>  
                        <Image
                            alt='Logo · Anton Stallbörger'
                            className='h-4 w-4 hover:animate-spin-slow hidden self-center sm:block'
                            src='/logo.svg'
                            width={32}
                            height={32}
                            priority
                        /> 
                        <p className="text-sm text-zinc-900 font-medium">&copy; 2023 Anton Stallbörger</p>
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
    );
}