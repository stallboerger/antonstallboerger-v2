import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boost',
  description: 'Digital Product Designer and Developer.',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl">Boost</h1>
    </section>
  );
}
