import Image from "next/image"
import Link from "next/link"

import styles from '../styles/components/card.module.scss'

interface Props {
	title: string;
	imageSrc: string;
	imageAlt: string;
	description: string;
	year: string;
	link: string;
}

const Card: React.FC<Props> = ({
	title,
	imageSrc,
	imageAlt,
	description,
	year,
	link,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <time className={styles.year}>{year}</time>
            </div>
        
            <div className={styles['image-wrapper']}>
                <Link href={link}>
                    <Image
                        alt={imageAlt}
                        className={styles.image}
                        src={imageSrc}
                        width={3840}
                        height={3840}
                        priority
                    />
                </Link>
            </div>
        
            <div className={styles.footer}>
                <p className={styles.description}>{description}</p>
                
                <Link 
                    href={link}
                    className={styles.more}
                >
                    Learn more
                </Link>
            </div>
        </div>
    );
};

export default Card