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
          Driven by curiosity and a love for great, high-quality and thoughtful design. Pushing the boundaries and striving to create something truly unique and meaningful.
          <br />
          <br />
          Currently working at <a href="https://essentry.com/en" className='text-black dark:text-white underline hover:decoration-titan-200 dark:hover:decoration-titan-800' target='_blank' rel="noreferrer">essentry</a> for an internship, living in Berlin and exploring different <Link href="/playground" className='text-black dark:text-white underline hover:decoration-titan-200 dark:hover:decoration-titan-800'>side projects</Link>.
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
