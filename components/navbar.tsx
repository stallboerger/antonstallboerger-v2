'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import styles from '../styles/components/navbar.module.scss'

export default function Navbar() {
    const currentRoute = usePathname();

    return (
        <nav className={styles.navbar}>
            <Link href='/' className={`${styles.home} ${styles.link} ${currentRoute === "/" && styles.active}`}>
                Home
            </Link>

            <div className={styles.pages}>
                <Link href='/about' className={`${styles.link} ${currentRoute === "/about" && styles.active}`}>
                    About
                </Link>
                <Link href='/thoughts' className={`${styles.link} ${currentRoute === "/thoughts" && styles.active}`}>
                    Thoughts
                </Link>
                <Link href='/playground' className={`${styles.link} ${currentRoute === "/playground" && styles.active}`}>
                    Playground
                </Link>
            </div>
            <Image 
                alt='Logo · Anton Stallbörger'
                className={styles.logo}
                src='/logo.svg'
                width={24}
                height={24}
                priority
            />
        </nav>
    );
}