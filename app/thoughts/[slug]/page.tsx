import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string; } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    return { title: post?.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

    if (post) {
        return (
            <>
                <Image 
                    src={`/images/thoughts/${post?.image}`}
                    alt={post.title}
                    width="1920" 
                    height="305"
                    className='mt-[-140px] mb-2 col-span-full w-[calc(100%_+_(2_*_1rem))] translate-x-[-1rem] lg:w-[calc(100%_+_(2_*_2rem))] lg:translate-x-[-2rem] max-w-none h-[70vh] object-cover' />
                <header className='col-span-full md:col-span-12 lg:col-span-8'>
                    <h1 className=''>{post?.title}</h1>
                    <time dateTime={post?.date} className="text-zinc-500">
                        {format(parseISO(post.date), 'eee · LLLL d, yyyy')}
                    </time>
                </header>
                <article className='col-span-full lg:col-start-9 lg:col-span-6' dangerouslySetInnerHTML={{ __html: post?.body.html }}></article>
            </>
        )
    } else {
        return (
            <h1>Thought could not be found</h1>
        )
    }
}

export default PostLayout
