import Head from 'next/head';
import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/welcome/HeroSection';
import UserSection from '@/sections/welcome/UserSection';
import HowItWorks from '@/sections/welcome/HowItWorks';
import MakeMoneySection from '@/sections/welcome/MakeMoneySection';
import FeaturesSection from '@/sections/welcome/FeaturesSection';
import InvestorsReviewSection from '@/sections/welcome/InvestorsReviewSection';
import InvestmentCalculatorSection from '@/sections/welcome/InvestmentCalculatorSection';
import PropertiesSection from '@/sections/welcome/PropertiesSection';
import RewardsSection from '@/sections/welcome/RewardsSection';
import BestAssetSection from '@/sections/welcome/BestAssetSection';
import ReadyToGetSection from '@/sections/welcome/ReadyToGetSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className>
      <Head>
        <title>Shares | Villas</title>
        <meta name="description" content="Share Villas, We leverage our network and expertise, built up over 20+ years leading the biggest real estate companies in Bali, to source the best properties with the highest investment potential for you" />
        <meta name="keywords" content="shares, villas, property, investment, bali, indonesia" />
        <meta name="author" content="Shares" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="">
        <PropertiesSection />
        <HeroSection />
        <UserSection />
        <HowItWorks />
        <MakeMoneySection />
        <FeaturesSection />
        <InvestorsReviewSection />
        <InvestmentCalculatorSection />
        <RewardsSection />
        <BestAssetSection />
        <ReadyToGetSection />
        <Footer />
      </div>
    </div>
  );
}
