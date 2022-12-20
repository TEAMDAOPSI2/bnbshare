import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/properties/Hero';
import { useRouter } from 'next/router';
import ListProperties from '@/sections/properties/ListProperties';
import Footer from '@/components/Footer';

const properties = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <Head>
        <title>Shares | Properties</title>
      </Head>
      <Navbar pathName={pathname} />
      <Hero />
      <ListProperties />
      <Footer />
    </>
  );
};

export default properties;
