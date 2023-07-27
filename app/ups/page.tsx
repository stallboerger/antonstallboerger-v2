import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'UPS App',
  description: 'Software Designer and Developer',
};

export default function UpsPage() {
  return (
    <section>
      <h1 className="mb-10">UPS App</h1>
      <p className='mb-20'>
        The UPS app is a popular mobile application that allows users to track and manage their packages, schedule pick-ups, and access other UPS services on the go. However, the app had been criticized for its outdated design and lack of user-friendly features. As a result, I decided to undertake a redesign of the app to improve its user experience and functionality.
      </p>
      <Image 
        src='/images/ups/mockup.png'
        alt='Boost Mockup · Anton Stallbörger'
        width={3840}
        height={2560}
        className='w-full h-auto bg-zinc-100 dark:bg-zinc-900 mb-20'
        priority
      />
      <h2 className='text-base mb-4 font-bold'>Challenges</h2>
      <p className='mb-20'>
        The previous design was cluttered and difficult to navigate, which made it frustrating for users to find the information they needed. The app also lacked a cohesive design system, which made it difficult to create a consistent user experience across the app.
      </p>
      <Image 
        src='/images/ups/screens.png'
        alt='Boost App Screens · Anton Stallbörger'
        width={3840}
        height={2560}
        className='w-full h-auto bg-zinc-100 dark:bg-zinc-900 mb-20'
        priority
      />
      <h2 className='text-base mb-4 font-bold'>Solution</h2>
      <p className='mb-20'>
        I started by conducting user research to understand the needs and pain points of UPS customers. I used this information to create a new design that was clean and easy to navigate. I also created a new design system that was consistent across the app.
      </p>
      <Image 
        src='/images/ups/colors.png'
        alt='Boost Device · Anton Stallbörger'
        width={3840}
        height={2560}
        className='w-full h-auto bg-zinc-100 dark:bg-zinc-900 mb-20'
      />
      <h2 className='text-base mb-4 font-bold'>Conclusion</h2>
      <p className='mb-20'>
        Overall, the UPS app redesign was a successful project that demonstrates the value of investing in user-centered design and testing to create a better product.
      </p>
    </section>
  );
}
