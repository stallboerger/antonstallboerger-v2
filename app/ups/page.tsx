import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UPS App',
  description: 'Digital Product Designer and Developer.',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl">UPS App</h1>
    </section>
  );
}
