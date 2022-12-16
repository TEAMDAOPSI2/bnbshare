import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/about/Hero';
import Worlds from '@/sections/about/Worlds';
import ResponsibleInvesting from '@/sections/about/ResponsibleInvesting';
import ReadyToGetSection from '@/sections/welcome/ReadyToGetSection';

const About = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <Head>
        <title>Shares | About</title>
      </Head>
      <Navbar pathName={pathname} />
      <Hero />
      <Worlds />
      <ResponsibleInvesting />
      <ReadyToGetSection />
    </>
  );
};

export default About;
