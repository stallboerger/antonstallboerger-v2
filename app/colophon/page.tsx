import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Colophon',
  description: 'Digital Product Designer and Developer.',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl">Colophon</h1>
    </section>
  );
}
