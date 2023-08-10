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
    <div className='mb-24 [&:last-child]:mb-0 [&:last-child>div:last-child]:mb-0 [&:last-child>div:last-child>p]:mb-0 border-b border-zinc-200 dark:border-zinc-800 [&:last-child]:border-transparent'>
      <p className='mb-8 sticky top-[53px] bg-gradient-to-b from-white via-white/90  dark:from-black dark:via-black/90 to-transparent z-10 pb-3 pt-8 mt-[-32px]'>
        <span className='font-bold'>{title}</span>
        <br />
        {year}
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
      <div className='mb-8 grid grid-cols-8 gap-8'>
        <p className='col-span-full sm:col-span-6'>
          {description}
        </p>
        <Link href={link} className='group hover:underline text-zinc-500 col-span-full sm:col-span-2 sm:justify-self-end'>
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <section className='col-span-full md:col-span-12 lg:col-span-5 lg:sticky lg:top-[calc(53px_+_32px)] lg:self-start mb-20 lg:mb-0'>
        <p className='mb-8'>
          <span className='font-bold'>Anton Stallbörger</span>
          <br />
          Software Designer
        </p>
        <p className=''>
          Driven by curiosity and a love for great, high-quality and thoughtful design. Pushing the boundaries and striving to create something truly unique and meaningful. My goal is to continue improving, learning, and exploring all the different areas life has to offer.
          <br />
          <br />
          Currently studying at the <a href="https://www.hfg-gmuend.de/en" className='text-zinc-500 hover:underline' target='_blank' rel="noreferrer">University of Design</a> in Schwäbisch Gmünd. Curating <a href="https://www.curations.tech/" className='text-zinc-500 hover:underline' target='_blank' rel="noreferrer">Curations</a> and working on different <Link href="/playground" className='text-zinc-500 hover:underline'>side projects</Link>.
          <br />
          <br />
          If you&rsquo;d like to <Link href="/about" className='text-zinc-500 hover:underline'>learn more about me</Link>, or discuss design, technology or life in general, feel free to <a href="mailto:anton@stallboerger.de" className='text-zinc-500 hover:underline'>reach out</a>. I&rsquo;m always happy to chat. 
        </p>  
      </section>

      <section className='col-span-full lg:col-start-9 lg:col-span-8'>
        <Card
          title='Boost'
          imageSrc='/images/main/boost.png'
          imageAlt='Boost · Anton Stallbörger'
          description='A app and product that helps you get a clear overview over your nutrients and gives you personalised recommendations.'
          year='2023'
          link='/boost'
        />
        <Card 
          title='Curations'
          imageSrc='/images/main/curations.png'
          imageAlt='Curations · Anton Stallbörger'
          description='A curated collection of stunning tools and website inspirations for free. Helping designers, developers, and everyone else discover new and innovative tools and ideas for their projects.'
          year='2022 &ndash; Present'
          link='/curations'
        />
        <Card
          title='UPS App'
          imageSrc='/images/main/ups.png'
          imageAlt='UPS App · Anton Stallbörger'
          description='A redesign concept of the UPS App for a faster and easier way to send and track your packages.'
          year='2022'
          link='/ups'
        />
      </section>
    </>
  )
}
