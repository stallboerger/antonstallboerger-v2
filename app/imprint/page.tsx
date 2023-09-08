import type { Metadata } from 'next';

import styles from '../../styles/views/imprint.module.scss'

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Digital Product Designer and Developer.',
};

export default function ImprintPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>Imprint</h1>
        <p>Last updated Aug 11, 2023</p>
      </header>
      <section className={styles.content}>
        <h2>Information according to German §5 of TMG</h2>
        <p>
          Anton Stallbörger
          <br />
          Eduard-Pfeiffer-Str. 97
          <br />
          70192 Stuttgart, Germany
          <br />
          <a className={styles.link} href="mailto:hi@antonstallboerger.com" >anton@stallboerger.de</a>
        </p>
        <h2>Copyright</h2>
        <p>
          This website and its contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on this website requires my prior consents.
        </p>
        <p>
          Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).
        </p>
        <h2>Limitation of liability for internal content</h2>
        <p>      
          The contents of this website have been created with my utmost care. However, I cannot guarantee the contents&rsquo; accuracy, completeness or topicality. According to statutory provisions, I&rsquo;m furthermore responsible for my own content. In this context, please note that I&rsquo;m accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.
        </p>
        <p>
          My obligation to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
        </p>
      </section>
          
    </>
  );
}
