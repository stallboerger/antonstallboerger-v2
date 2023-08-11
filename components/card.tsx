import Image from "next/image"
import Link from "next/link"

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
        <div className='mb-24 [&:last-child]:mb-0 [&:last-child>div:last-child]:mb-0 [&:last-child>div:last-child>p]:mb-0 border-b border-zinc-200 dark:border-zinc-800 [&:last-child]:border-transparent'>
            <p className='mb-8'>
                <span className='font-bold'>{title}</span>
                <time className="block">{year}</time>
            </p>
        
            <div className='mb-8 dark:bg-zinc-900 bg-zinc-100'>
                <Link href={link}>
                    <Image
                        alt={imageAlt}
                        className='hover:scale-105 transform transition-all duration-300 select-none'
                        src={imageSrc}
                        width={3840}
                        height={3840}
                        priority
                    />
                </Link>
            </div>
        
            <div className='mb-24 grid grid-cols-8 gap-8'>
                <p className='col-span-full sm:col-span-6'>{description}</p>
                
                <Link 
                    href={link}
                    className='group hover:underline text-zinc-500 col-span-full sm:col-span-2 sm:justify-self-end'
                >
                    Learn more
                </Link>
            </div>
        </div>
    );
};

export default Card