import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <p className='text-[#111111] dark:text-zinc-100 pb-20'>
        Anton Stallbörger
        <br />
        From Stuttgart, Germany. Based in Schwäbisch Gmünd.
      </p>
      <p className='text-[#111111] dark:text-zinc-100'>
      I am a passionate designer and developer who is driven by a love for great, high-quality and thoughtful design. Pushing the boundaries of design and striving to create something truly unique and meaningful. My goal is to continue improving, learning, and exploring all the different areas life has to offer.
      </p>
    </section>
  )
}
