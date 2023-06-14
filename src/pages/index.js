import Head from 'next/head';
import IntroHeader from '@/components/introHeader';
import About from '@/components/about';
import Work from '@/components/work';
import TechStack from '@/components/techstack';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div className='bg-zinc-900 bg-dotted-spacing-8 bg-dotted-zinc-700 h-full scroll-smooth'>
      <Head>
        <title>Aryan Sharma</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      <IntroHeader />
      <About />
      <TechStack />
      <Contact />
    </div>
  );
}
