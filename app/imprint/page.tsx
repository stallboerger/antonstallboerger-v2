import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Digital Product Designer and Developer.',
};

export default function AboutPage() {
  return (
    <section>
        <h1 className="font-bold text-3xl mb-6">Imprint</h1>
        <h2 className='text-base mb-4 font-medium'>Last updated Jun 15, 2023</h2>
        <h2 className='text-base mb-4 font-medium'>Information according to German §5 of TMG</h2>
        <p className='mb-20'>
        Anton Stallbörger
        <br />
        Eduard-Pfeiffer-Str. 97
        <br />
        70192 Stuttgart, Germany
        <br />
        <a href="mailto:anton@stallboerger.de" className='text-zinc-500 hover:underline'>anton@stallboerger.de</a>
        </p>
        <h2 className='text-base mb-4 font-medium'>Copyright</h2>
        <p className='mb-20'>
        This website and its contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on this website requires my prior consents.
        <br />
        <br />
        Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).
        </p>
        <h2 className='text-base mb-4 font-medium'>Limitation of liability for internal content</h2>
        <p>      
        The contents of this website have been created with my utmost care. However, I cannot guarantee the contents&apos; accuracy, completeness or topicality. According to statutory provisions, I&apos;m furthermore responsible for my own content. In this context, please note that I&apos;m accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.
        <br />
        <br />
        My obligation to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
      </p>
    </section>
  );
}
