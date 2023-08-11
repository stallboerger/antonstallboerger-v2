import { allProjects } from 'contentlayer/generated'
import { Mdx } from 'components/mdx'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../../../styles/views/project.module.scss';

export const generateStaticParams = async () => allProjects.map((project: any) => ({ slug: project._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string; } }) => {
    const project = allProjects.find((project: any) => project.slug === params.slug)
    return { title: project?.title }
}

export default async function ProjectLayout({ params }: { params: { slug: string } }) {
    const project = allProjects.find((project: any) => project.slug === params.slug)

    if (project) {
        return (
            <>
                <header className={styles.header}>
                    <h1 className={styles.title}>{project?.title}</h1>
                    <time className={styles.year} dateTime={project?.year} >
                        {format(parseISO(project.year), 'yyyy')}
                    </time>
                    <p className={styles.description}>{project?.description}</p>
                </header>

                <aside className={styles.meta}>
                    {project.links && 
                        <div className={styles.links}>
                            <h2>Visit live</h2>
                            {project.links.map((url, idx) => (
                                <Link
                                    href={url.url}
                                    target='_blank'
                                    className={styles.url}
                                    key={idx}>{url.title}</Link>
                            ))}
                        </div>
                    }

                    {project.collaborators && 
                    <>
                        <h2>Collaborators</h2>
                        <div className={styles.collaborators}>
                            {project.collaborators?.map((collaborator, idx) => (
                                <Link 
                                href={collaborator.url}
                                target="_blank"
                                className={styles.collaborator}
                                key={idx}
                                >
                                    <Image 
                                        src={collaborator.avatar} 
                                        alt={collaborator.name}
                                        width={240}
                                        height={240}
                                        className={styles.avatar} />
                                    {collaborator.name}
                                </Link>
                            ))}
                        </div>
                    </>}
                </aside>

                <section className={styles.content}>
                    <Mdx code={project.body.code} />
                </section>
            </>
        )
    } else {
        return (
            <h1>Project could not be found</h1>
        )
    }
}