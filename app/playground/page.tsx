import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Digital Product Designer and Developer.',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-10">Playground</h1>
    </section>
  );
}
