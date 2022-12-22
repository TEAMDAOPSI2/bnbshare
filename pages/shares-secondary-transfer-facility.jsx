import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/shares-secondary/HeroSection';
import Head from 'next/head';
import { useRouter } from 'next/router';

const SharesSecondaryTransferFacility = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Head>
        <title>Shares Villas | Shares Secondary Transfer Facilit</title>
      </Head>
      <Navbar pathName={pathname} />
      <HeroSection />
      <Footer />
    </>
  );
};

export default SharesSecondaryTransferFacility;
