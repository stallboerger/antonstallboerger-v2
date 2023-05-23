import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <p className='pb-20'>
        Anton Stallbörger
        <br />
        From Stuttgart, Germany. Based in Schwäbisch Gmünd.
      </p>
      <p className='pb-8'>
        I am a passionate designer and developer who is driven by a love for great, high-quality and thoughtful design. Pushing the boundaries and striving to create something truly unique and meaningful. My goal is to continue improving, learning, and exploring all the different areas life has to offer.
        <br />
        <br />
        Currently studying at the <a href="https://www.hfg-gmuend.de/en" className='text-zinc-500 hover:underline' target='_blank' rel="noreferrer">University of Design</a> Schwäbisch Gmünd. Curating <a href="https://www.curations.tech/" className='text-zinc-500 hover:underline' target='_blank' rel="noreferrer">Curations</a> and working on differen <a href="/playground" className='text-zinc-500 hover:underline' target='_blank' rel="noreferrer">side projects</a>.
      </p>    
      <div className='bg-zinc-200 w-full h-[1px] mb-20'/> 
      <div>
        <p className='mb-8'>
          Curations
        </p>
        <Image 
            alt='Boost Project | Anton Stallbörger'
            className='mb-8'
            src='/images/main/curations.jpg'
            width={1440}
            height={1024}
            priority
          />    
        <p className='border-b border-dashed pb-8 mb-8'>
          A curated collection of stunning tools and website inspirations for free. Helping designers, developers, and everyone else discover new and innovative tools and ideas for their projects.
        </p>  
        <div className='mb-8 flex flex-row justify-between'>
          <p>
            2022
          </p>
          <Link href="/curations" className='group hover:underline'>
            Learn more
          </Link>
        </div>
        <div className='bg-zinc-200 w-full h-[1px]'/> 
      </div> 
    </section>
  )
}
