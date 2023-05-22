import {
    AboutIcon
} from '../components/icons'
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function AntonDropdown() {
//   const [open, setOpen] = useState(false);
//   const [timeoutId, setTimeoutId] = useState(null);

//   function handleMouseEnter() {
//     setOpen(true);
//     clearTimeout(timeoutId);
//   }

//   function handleMouseLeave() {
//     setTimeoutId(setTimeout(() => {
//       setOpen(false);
//     }, 100));
//   }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 gap-0.5 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full">
          Explore
          {/* <NavArrowDown className='self-center text-xs stroke-2'/> */}
          {/* <AboutIcon /> */}
        </Menu.Button>
      </div>

      <Transition
        show={open}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute right-0 sm:left-0 z-10 mt-4 w-fit origin-top-right divide-y divide-zinc-100 rounded-xl dark:bg-black bg-white opacity-100 shadow-lg ring-1 ring-black dark:ring-zinc-800 ring-opacity-5 focus:outline-none"
        >
          <div className="py-2">
            <Menu.Item>
              {({ active }) => (
                <Link className='text-zinc-900 dark:text-zinc-100 px-3 py-2 mx-2 rounded-md text-sm flex hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc900 gap-2' href="/about"> 
                  {/* <User className='self-center text-xs stroke-2'/> */}
                  {/* <AboutIcon /> */}
                  <p className='text-sm font-medium'>
                    About
                  </p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className='text-zinc-900 dark:text-zinc-100 px-3 py-2 mx-2 rounded-md text-sm flex hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc900 gap-2' href="/thoughts"> 
                  {/* <Brain className='self-center text-xs stroke-2'/> */}
                  <p className='text-sm font-medium'>
                    Thoughts
                  </p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className='text-zinc-900 dark:text-zinc-100 px-3 py-2 mx-2 rounded-md text-sm flex hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc900 gap-2' href="/playground"> 
                  {/* <Arcade className='self-center text-xs stroke-2'/> */}
                  <p className='text-sm font-medium'>
                    Playground
                  </p>
                  <p className='text-xs self-center text-blue-500 border-2 border-blue-200 dark:border-blue-800 rounded-full py-0 px-1 font-medium'>
                    New
                  </p>
                </Link>
              )}
            </Menu.Item>
        </div>
        </Menu.Items>
        </Transition>
    </Menu>
    )
}