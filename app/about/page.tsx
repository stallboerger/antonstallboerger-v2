import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Digital Product Designer and Developer.',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl">About Me</h1>
    </section>
  );
}
