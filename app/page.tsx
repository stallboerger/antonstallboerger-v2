import Image from 'next/image'
import Link from 'next/link'

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
    <div className='mb-24'>
      <p className='mb-8'>{title}</p>
      <Image
        alt={imageAlt}
        className='mb-8 dark:bg-zinc-900 bg-zinc-100'
        src={imageSrc}
        width={3840}
        height={3840}
        priority
      />
      <p className=' border-dashed dark:border-zinc-800 boder-zinc-200  mb-8'>
        {description}
      </p>
      <div className='mb-8 flex flex-row justify-between'>
        <p className='text-sm'>{year}</p>
        <Link href={link} className='group hover:underline text-zinc-500 text-sm'>
          Learn more
        </Link>
      </div>
      <div className='bg-zinc-200 dark:bg-zinc-800 w-full h-[1px]' />
    </div>
  );
};

export default function Home() {
  return (
    <section>
      <p className='pb-20'>
        <span className='font-medium'>Anton Stallbörger</span>
        <br />
        Software Designer & Developer
      </p>
      <p className='pb-8'>
        Driven by curiosity and a love for great, high-quality and thoughtful design. Pushing the boundaries and striving to create something truly unique and meaningful. My goal is to continue improving, learning, and exploring all the different areas life has to offer.
        <br />
        <br />
        Currently studying at the <a href="https://www.hfg-gmuend.de/en" className='text-zinc-500 hover:underline' target='_blank' rel="noreferrer">University of Design</a> in Schwäbisch Gmünd. Curating <a href="https://www.curations.tech/" className='text-zinc-500 hover:underline' target='_blank' rel="noreferrer">Curations</a> and working on different <Link href="/playground" className='text-zinc-500 hover:underline hover:underline-offset-2'>side projects</Link>.
      </p>    
      <div className='bg-zinc-200 dark:bg-zinc-800 w-full h-[1px] mb-20'/> 
      <Card
        title='Boost'
        imageSrc='/images/main/boost.png'
        imageAlt='Boost | Anton Stallbörger'
        description='A app and product that helps you get a clear overview over your nutrients and gives you personalised recommendations.'
        year='2023'
        link='/boost'
      />
      <Card 
        title='Curations'
        imageSrc='/images/main/curations.png'
        imageAlt='Curations | Anton Stallbörger'
        description='A curated collection of stunning tools and website inspirations for free. Helping designers, developers, and everyone else discover new and innovative tools and ideas for their projects.'
        year='2022 - Present'
        link='/curations'
      />
      <Card
        title='UPS App'
        imageSrc='/images/main/ups.png'
        imageAlt='UPS App | Anton Stallbörger'
        description='A redesign concept of the UPS App for a faster and easier way to send and track your packages.'
        year='2022'
        link='/ups'
      />
      <p className=''>
        If you&apos;d like to <Link href="/about" className='text-zinc-500 hover:underline'>learn more about me</Link>, or discuss design, technology or life in general, feel free to <a href="mailto:anton@stallboerger.de" className='text-zinc-500 hover:underline'>reach out</a>. I&apos;m always happy to chat. 
      </p>
    </section>
  )
}
