import type { Metadata } from 'next';
// import { useRouter } from 'next/router';

export const metadata: Metadata = {
  title: 'About',
  description: 'Digital Product Designer and Developer.',
};

export default function AboutPage() {
  // const router = useRouter();

  return (
    <section>
      <h1 className="font-bold text-3xl">About</h1>
    </section>
  );
}
