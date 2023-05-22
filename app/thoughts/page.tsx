import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thoughts',
  description: 'Digital Product Designer and Developer.',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl">Thoughts</h1>
    </section>
  );
}
