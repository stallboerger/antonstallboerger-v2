import Link from 'next/link';
import Image from 'next/image';

type Props = {
  customClass?: string
}
export default async function LiteralBooks({ customClass }: Props) {
  type Book = {
    id: string
    slug: string
    title: string
    subtitle?: string
    isbn10?: string
    isbn13?: string
    cover: string
    authors: [Author]
  };

  type Author = {
    id: string
    name: string
  }

  const { data }: any = await fetch(process.env.LITERAL_API_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query booksByReadingStateAndProfile(
          $limit: Int!
          $offset: Int!
          $readingStatus: ReadingStatus!   # find fragments below
          $profileId: String!
        ) {
          booksByReadingStateAndProfile(
            limit: $limit
            offset: $offset
            readingStatus: $readingStatus
            profileId: $profileId
          ) {
            ...BookParts
          }
        }

        fragment BookParts on Book {
          id
          slug
          title
          subtitle
          isbn10
          isbn13
          cover
          authors {
            id
            name
          }
        }
      `,
      variables: {
        limit: 10,
        offset: 0,
        readingStatus: 'IS_READING',
        profileId: process.env.LITERAL_PROFILE_ID
      },
      next: { revalidate: 10 },
    })
  }).then((res) => res.json())

  let books = data?.booksByReadingStateAndProfile;

  return (
    <ul className={`grid lg:grid-cols-2 gap-3 ${customClass}`}>
      {books?.map((book: Book) => (
        <li className='col-span-1'>
          <Link href={`https://literal.club/stallboerger/book/${book.slug}`} target='_blank' className='flex gap-4'>
            <figure className='w-9 shrink-0 relative overflow-hidden'>
              <Image src={book.cover} alt={`Cover of ${book.title}`} fill className='!relative w-full !h-auto object-cover' />
            </figure>
            
            <div className='flex flex-col'>
              <span className='text-sand-12 dark:text-sand-dark-12 text-balance'>{book.title}</span>
              <span>{book.authors.map(author => author.name).join(', ')}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}