import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Boost',
  description: 'Software Designer and Developer',
};

export default function BoostPage() {
  return (
    <section className="col-span-full">
      <h1 className="mb-10">Boost</h1>
      <p className='mb-20'>
        Boost is a app and product that focuses on personalized nutrients. It solves the problem of having to take multiple supplements with varying doses, by providing users with their own personalized nutrient pack. Boost has a seamless onboarding process that collects information about the user&rsquo;s lifestyle, basic information, and real-time data to calculate the exact nutrients that the user needs.
      </p>
      <Image 
        src='/images/boost/mockup.png'
        alt='Boost Mockup · Anton Stallbörger'
        width={3840}
        height={2560}
        className='w-full h-auto bg-zinc-100 dark:bg-zinc-900 mb-20'
        priority
      />
      <h2 className='text-base mb-4 font-bold'>Onboarding</h2>
      <p className='mb-20'>
        Boost onboarding is simple and straightforward. It starts with a series of questions that help us understand nutritional requirements and current diet. Based on the answers, we create a personalized nutrition profile that takes into account your age, gender, weight, height, activity level and various different aspects of your everyday life.
      </p>
      <Image 
        src='/images/boost/screens.png'
        alt='Boost App Screens · Anton Stallbörger'
        width={3840}
        height={2560}
        className='w-full h-auto bg-zinc-100 dark:bg-zinc-900 mb-20'
        priority
      />
      <h2 className='text-base mb-4 font-bold'>Personalized Recommendation</h2>
      <p className='mb-20'>
        Based on your nutritional profile, Boost calculates your daily nutrient needs and gives you customized recommendations for vitamins, minerals, and other essential nutrients. Recommendations are updated daily based on weather and your step count to ensure you get the right amount of nutrients at the right time.
      </p>
      <Image 
        src='/images/boost/device.png'
        alt='Boost Device · Anton Stallbörger'
        width={3840}
        height={2560}
        className='w-full h-auto bg-zinc-100 dark:bg-zinc-900 mb-20'
      />
      <h2 className='text-base mb-4 font-bold'>Dispenser</h2>
      <p className='mb-20'>
        The Boost dispenser is an device that dispenses your individual nutrients in the form of a powder. Simply dispense the powder into a glass of water and you have a delicious and nutrient-rich drink that helps you meet your daily nutritional needs.
      </p>
      <Image 
        src='/images/boost/packaging.png'
        alt='Boost Packaging · Anton Stallbörger'
        width={3840}
        height={2560}
        className='w-full h-auto bg-zinc-100 dark:bg-zinc-900 mb-20'
      />
      <h2 className='text-base mb-4 font-bold'>Branding</h2>
      <p className=''>
        We have also dealt with the topic of branding. What could the product and everything around it look like? We created packaging for the device, a landing page, a manual and the overall appearance.
      </p>
    </section>
  );
}
