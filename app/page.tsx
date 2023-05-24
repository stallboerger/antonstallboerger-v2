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
        Based in Schwäbisch Gmünd, Germany.
      </p>
      <p className='pb-8'>
        I am a passionate designer and developer who is driven by a love for great, high-quality and thoughtful design. Pushing the boundaries and striving to create something truly unique and meaningful. My goal is to continue improving, learning, and exploring all the different areas life has to offer.
        <br />
        <br />
        Currently studying at the <a href="https://www.hfg-gmuend.de/en" className='text-zinc-500 hover:underline' target='_blank' rel="noreferrer">University of Design</a> Schwäbisch Gmünd. Curating <a href="https://www.curations.tech/" className='text-zinc-500 hover:underline' target='_blank' rel="noreferrer">Curations</a> and working on differen <Link href="/playground" className='text-zinc-500 hover:underline'>side projects</Link>.
      </p>    
      <div className='bg-zinc-200 dark:bg-zinc-800 w-full h-[1px] mb-20'/> 
      <Card 
        title='Curations'
        imageSrc='/images/main/curations.png'
        imageAlt='Curations | Anton Stallbörger'
        description='A curated collection of stunning tools and website inspirations for free. Helping designers, developers, and everyone else discover new and innovative tools and ideas for their projects.'
        year='2022'
        link='/curations'
      />
      <Card
        title='UPS App'
        imageSrc='/images/main/curations.png'
        imageAlt='UPS App | Anton Stallbörger'
        description='A redesign concept of the UPS App for a faster and easier way to send and track your packages.'
        year='2022'
        link='/ups-app'
      />
      <p className=''>
        I am a passionate designer and developer who is driven by a love for great, high-quality and thoughtful design. Pushing the boundaries and striving to create something truly unique and meaningful. My goal is to continue improving, learning, and exploring all the different areas life has to offer. 
      </p>
    </section>
  )
}
