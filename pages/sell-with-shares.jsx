import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import HeroSection from '@/sections/sell-shares/HeroSection';
import PayCashSection from '@/sections/sell-shares/PayCashSection';
import HowItWorksSection from '@/sections/sell-shares/HowItWorksSection';
import WhySection from '@/sections/sell-shares/WhySection';
import ReadyToSellBannerSection from '@/sections/sell-shares/ReadyToSellBannerSection';
import NeighbourhoodSection from '@/sections/sell-shares/NeighbourhoodSection';
import FaqSection from '@/sections/sell-shares/FaqSection';

const SellWithShares = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <Head>
        <title>Sell with Shares</title>
      </Head>
      <Navbar pathName={pathname} />
      <HeroSection />
      <PayCashSection />
      <HowItWorksSection />
      <WhySection />
      <ReadyToSellBannerSection />
      <NeighbourhoodSection />
      <FaqSection />
      <Footer />
    </>
  );
};

export default SellWithShares;
