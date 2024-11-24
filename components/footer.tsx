'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="col-span-full mt-40 grid-cols-8 sm:grid-cols-16 grid gap-6 md:gap-8 px-4 md:px-8 mb-8">
      <section className="grid grid-cols-8 gap-y-12 gap-6 col-span-full lg:col-span-8 row-start-2 lg:row-auto self-start border-t border-sand-6 dark:border-sand-dark-6 pt-6 md:pt-8">
        <div className="col-span-2 flex flex-col gap-2">
          <h2 className="mb-4">Connect</h2>
          <ul className="gap-2">
            <li>
              <a 
                href="mailto:hi@antonstallboerger.com" 
                className="self-start"
                target="_blank" 
                rel="noreferrer"
              >
                Mail
              </a>
            </li>
            <li>
              <a 
                href="https://x.com/stallboerger" 
                className="self-start hover:!text-[#1D9BF0]"
                target="_blank" 
                rel="noreferrer"
              >
                X.com
              </a>
            </li>
            <li>
              <a 
                href="https://cosmos.so/stallboerger" 
                className="self-start"
                target="_blank" 
                rel="noreferrer"
              >
                Cosmos
              </a>
            </li>
            <li>
              <a 
                href="https://read.cv/stallboerger" 
                className="self-start hover:!text-[#F2A93C]"
                target="_blank" 
                rel="noreferrer"
              >
                Read.cv
              </a>
            </li>
          </ul>
        </div>

        <div className="col-start-5 col-span-4 lg:col-span-4 lg:col-start-5">
          <h2 className="mb-4 flex flex-col gap-2">Explore</h2>
          <ul>
            <li>
              <Link
                href='/'
                className="self-start"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href='/about' 
                className="self-start"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href='/thoughts' 
                className="self-start"
              >
                Thoughts
              </Link>
            </li>
            <li>
              <Link 
                href='/playground' 
                className="self-start"
              >
                Playground
              </Link>
            </li>
          </ul>
        </div>   

        <p className="font-bold col-span-full md:col-span-4 lg:col-span-3">&copy;{(new Date).getFullYear()} Anton Stallbörger</p>
        <div className="flex flex-row gap-4 col-span-full md:col-span-4 lg:col-start-5 mt-[-40px] md:mt-0">
          <Link 
            href='/colophon' 
            className="self-start"
          >
            Colophon
          </Link>
          <Link 
            href='/imprint' 
            className="self-start"
          >
            Imprint
          </Link> 
        </div>
      </section>

      <section className="@apply col-span-full lg:col-start-9 lg:col-span-8 row-start-1 lg:row-auto lg:border-t border-sand-6 dark:border-sand-dark-6"> 
      </section>
    </footer>
  );
}
