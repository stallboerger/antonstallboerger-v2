import Link from 'next/link'
import Card from '@/components/card'

import { allProjects } from 'contentlayer/generated'
import { format, parseISO, compareDesc } from 'date-fns'

const filteredProjects = allProjects.filter((project) => !project.playground)
const projects = filteredProjects.sort((a, b) =>
  compareDesc(new Date(a.year), new Date(b.year))
)

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
          Currently studying at the <a href="https://www.hfg-gmuend.de/en" className='text-titan-500 hover:underline' target='_blank' rel="noreferrer">University of Design</a> in Schwäbisch Gmünd. Curating <a href="https://www.curations.tech/" className='text-titan-500 hover:underline' target='_blank' rel="noreferrer">Curations</a> and working on different <Link href="/playground" className='text-titan-500 hover:underline'>side projects</Link>.
          <br />
          <br />
          If you&rsquo;d like to <Link href="/about" className='text-titan-500 hover:underline'>learn more about me</Link>, or discuss design, technology or life in general, feel free to <a href="mailto:hi@antonstallboerger.com" className='text-titan-500 hover:underline'>reach out</a>. I&rsquo;m always happy to chat. 
        </p>  
      </section>

      <section className='col-span-full lg:col-start-9 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4'>
        {projects.map((project, idx) => (
          <Card
            title={project.title}
            imageSrc={`/images/projects/${project.slug}/${project.image}`}
            imageAlt={project.title}
            description={project.description}
            year={format(parseISO(project.year), 'yyyy')}
            link={`/projects/${project.slug}`}
            key={idx}
            />
        ))}
      </section>
    </>
  )
}
