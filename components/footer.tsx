'use client';

import dynamic from 'next/dynamic'
import Link from 'next/link';

import styles from '../styles/components/footer.module.scss'

const Clock = dynamic(() => import('./clock'), { ssr: false })

export default function Footer() {
    return (
        <footer className={`transition-fade ${styles.footer}`}>
            <section className={styles.links}>
                <div className={styles.connect}>
                    <h2 className={styles.title}>Connect</h2>
                    <ul className={styles.list}>
                        <li>
                            <a 
                                href="https://twitter.com/stallboerger" 
                                className={`${styles.link} ${styles.twitter}`}
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a 
                                href="imessage://anton@stallboerger.de" 
                                className={`${styles.link} ${styles.imessage}`}
                                target="_blank" 
                                rel="noreferrer"
                            >
                                iMessage
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.cosmos.so/stallboerger" 
                                className={styles.link} 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Cosmos
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://read.cv/stallboerger" 
                                className={`${styles.link} ${styles.readcv}`}
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Read.cv
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.explore}>
                    <h2 className={styles.title}>Explore</h2>
                    <ul className={styles.list}>
                        <li>
                            <Link
                                href='/'
                                className={styles.link}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href='/about' 
                                className={styles.link}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href='/thoughts' 
                                className={styles.link}
                            >
                                Thoughts
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href='/playground' 
                                className='self-start'
                            >
                                Playground
                            </Link>
                        </li>
                    </ul>
                </div>   

                <p className={styles.copyright}>&copy; 2023 Anton Stallbörger</p>
                <div className={styles.legals}>
                    <Link 
                        href='/colophon' 
                        className={styles.link}
                    >
                        Colophon
                    </Link>
                    <Link 
                        href='/imprint' 
                        className={styles.link}
                    >
                        Imprint
                    </Link> 
                </div>
            </section>

            <section className={styles.clock}> 
                <Clock />
            </section>
        </footer>
    );
}