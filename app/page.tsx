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
    <div>
      <p className='mb-8'>{title}</p>
      <Image
        alt={imageAlt}
        className='mb-8'
        src={imageSrc}
        width={1440}
        height={1024}
        priority
      />
      <p className='border-b border-dashed dark:border-zinc-800 boder-zinc-200 pb-8 mb-8'>
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
        From Stuttgart, Germany. Based in Schwäbisch Gmünd.
      </p>
      <p className='pb-8'>
        I am a passionate designer and developer who is driven by a love for great, high-quality and thoughtful design. Pushing the boundaries and striving to create something truly unique and meaningful. My goal is to continue improving, learning, and exploring all the different areas life has to offer.
        <br />
        <br />
        Currently studying at the <a href="https://www.hfg-gmuend.de/en" className='text-zinc-500 hover:underline' target='_blank' rel="noreferrer">University of Design</a> Schwäbisch Gmünd. Curating <a href="https://www.curations.tech/" className='text-zinc-500 hover:underline' target='_blank' rel="noreferrer">Curations</a> and working on differen <a href="/playground" className='text-zinc-500 hover:underline' target='_blank' rel="noreferrer">side projects</a>.
      </p>    
      <div className='bg-zinc-200 dark:bg-zinc-800 w-full h-[1px] mb-20'/> 
      <Card 
        title='Curations'
        imageSrc='/images/main/curations.jpg'
        imageAlt='Curations | Anton Stallbörger'
        description='A curated collection of stunning tools and website inspirations for free. Helping designers, developers, and everyone else discover new and innovative tools and ideas for their projects.'
        year='2022'
        link='/curations'
      />
    </section>
  )
}
