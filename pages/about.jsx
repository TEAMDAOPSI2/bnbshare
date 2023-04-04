import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/about/Hero';
import Worlds from '@/sections/about/Worlds';
import ResponsibleInvesting from '@/sections/about/ResponsibleInvesting';
import ReadyToGetSection from '@/sections/welcome/ReadyToGetSection';
import Footer from '@/components/Footer';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
})


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
      <Footer />
    </>
  );
};

export default About;
