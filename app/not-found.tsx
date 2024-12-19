import Link from 'next/link';

export default async function NotFound() {
  return (
    <>
      <header className="col-span-full sm:col-span-8">
        <h1>404</h1>
        <p>Page not found</p>
      </header>

      <section className="col-span-8 col-start-9">
        <p>
          You just hit a route that doesn&rsquo;t exist.
        </p>
        <p>
          This page is just as lost as you are.
        </p>

        <ul className="mt-12">
          <li>
            <Link 
              href='/' 
              className='self-start'
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href='/about' 
              className='self-start'
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href='/thoughts' 
              className='self-start'
            >
              Thoughts
            </Link>
          </li>
          <li>
            <Link 
              href='/playground' 
              className='self-start'
            >
              Playground
            </Link>
          </li>
        </ul>
      </section>
    </>  
  );
}
