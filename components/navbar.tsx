'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Logo } from '../components/icons'

import Swup from 'swup'
import SwupHeadPlugin from '@swup/head-plugin'
import SwupScrollPlugin from '@swup/scroll-plugin'

import styles from '../styles/components/navbar.module.scss'
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [currentRoute, setCurrentRoute] = useState<any | null>(usePathname())

    useEffect(() => {
        const swup = new Swup({
            plugins: [
                new SwupHeadPlugin({ 
                    persistAssets: true, 
                    awaitAssets: true 
                }),
                new SwupScrollPlugin({
                    animateScroll: {
                        betweenPages: false,
                        samePageWithHash: false,
                        samePage: false
                    }					 
                })
            ]
        });

        swup.hooks.on('page:view', (visit) => {
            setCurrentRoute(visit.to.url)
        })
    }, [])

    return (
        <nav className={styles.navbar}>
            {/* <div className={styles.glass}></div>
            <div className={styles.glassedge}></div> */}
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
            <div className={styles.logo}>
                <Logo />
            </div>
        </nav>
    );
} 