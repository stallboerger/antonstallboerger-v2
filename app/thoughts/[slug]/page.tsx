import { allThoughts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import { Mdx } from 'components/mdx'

export const generateStaticParams = async () => allThoughts.map((thought) => ({ slug: thought._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string; } }) => {
    const thought = allThoughts.find((thought) => thought._raw.flattenedPath === 'thoughts/' + params.slug)
    return { title: thought?.title }
}

const ThoughtLayout = ({ params }: { params: { slug: string } }) => {
    const thought = allThoughts.find((thought) => thought._raw.flattenedPath === 'thoughts/' + params.slug)

    if (thought) {
        return (
            <>
                <Image 
                    src={`/images/thoughts/${thought.image}`}
                    alt={thought.title}
                    width="1920" 
                    height="305"
                    className='mt-[-140px] mb-2 col-span-full w-[calc(100%_+_(2_*_1rem))] translate-x-[-1rem] lg:w-[calc(100%_+_(2_*_2rem))] lg:translate-x-[-2rem] max-w-none h-[70vh] object-cover' />
                <header className='col-span-full md:col-span-12 lg:col-span-8'>
                    <h1 className=''>{thought.title}</h1>
                    <time dateTime={thought.date} className="text-zinc-500">
                        {format(parseISO(thought.date), 'eee · LLLL d, yyyy')}
                    </time>
                </header>

                <article className='col-span-full lg:col-start-9 lg:col-span-6'>
                    <Mdx code={thought.body.code} />
                </article>
            </>
        )
    } else {
        return (
            <h1>Thought could not be found</h1>
        )
    }
}

export default ThoughtLayout
