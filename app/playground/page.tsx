import type { Metadata } from 'next';
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/card'

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Software Designer',
};


export default function Playground() {
  return (
    <>
      <section className='col-span-full md:col-span-12 lg:col-span-5 lg:sticky lg:top-[calc(53px_+_32px)] lg:self-start mb-20 lg:mb-0'>
        <p className='mb-8'>
          <span className='font-bold'>Playground</span>
          <br />
          Software Designer
        </p>
        <p className=''>
          Besides my  
        </p>  
      </section>

      <section className='col-span-full lg:col-start-9 lg:col-span-8'>
        <Card
          title='Great Apps'
          imageSrc='/images/main/boost.png'
          imageAlt='Great Apps · Anton Stallbörger'
          description='Apps with that special something. A collection of apps that are unique, innovative, and beautifully designed.'
          year='2023'
          link='/boost'
        />
        <Card 
          title='Great Finds'
          imageSrc='/images/main/curations.png'
          imageAlt='Great Finds · Anton Stallbörger'
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
