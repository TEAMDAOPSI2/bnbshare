import HowItWorksImg1 from 'public/assets/home/howitworks/1.svg';
import HowItWorksImg2 from 'public/assets/home/howitworks/2.svg';
import HowItWorksImg3 from 'public/assets/home/howitworks/3.svg';
import HowItWorksImg4 from 'public/assets/home/howitworks/4.svg';
import IphoneBorderImg from 'public/assets/common/iphone-13-pro-frame.png';
import HowItWorksIcon1 from 'public/assets/home/howitworks/1.icon.svg';
import HowItWorksIcon2 from 'public/assets/home/howitworks/2.icon.svg';
import HowItWorksIcon3 from 'public/assets/home/howitworks/3.icon.svg';
import HowItWorksIcon4 from 'public/assets/home/howitworks/4.icon.svg';
import ReactWOW from 'react-wow';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const SliderElement = ({ img, icon, desc }) => (
  <div className="w-full h-full">
    <ReactWOW animation="zoomInRight" duration="1s">
      <div className="desc">
        <div className="w-[40px] rounded-md h-1 bg-primary" />
        {desc}
      </div>
    </ReactWOW>
    <ReactWOW animation="slideInRight" duration="1s">
      <div className="phone w-full relative">
        <div className="absolute z-1 w-[450px] flex items-center justify-center">
          {/* eslint-disable-next-line react/prop-types */}
          <img className="w-[380px] rounded-[60px]" src={img.src} alt="Banner Phone" />
          <picture className="absolute top-0 mx-auto">
            <img alt="how it works" className="w-[382px] mx-auto" src={IphoneBorderImg.src} />
          </picture>
        </div>
      </div>
    </ReactWOW>
    <ReactWOW animation="zoomInRight" duration="1s">
      <div className="ico invisible sm:visible">
        {/* eslint-disable-next-line react/prop-types */}
        <img src={icon.src} alt="" />
      </div>
    </ReactWOW>
  </div>
);

const HowItWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  return (
    <section className="how-it-works">
      <div className="container pt-6 sm:py-6 px-3 mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-4xl py-3 font-semibold">How it works</h2>
          <p className="font-medium">BNBshares is available to savvy investors all over the world</p>
        </div>
        <div className="hidden sm:grid gap-4 grid-cols-4 selector mb-6">
          <ReactWOW animation="slideInUp" duration="1s">
            <div
              className={`py-3 cursor-pointer ${currentSlide === 0 ? 'active' : null}`}
              onClick={() => setCurrentSlide(0)}
            >
              {currentSlide === 0 ? <div className="w-[40px] rounded-md h-1 bg-primary" /> : null}
              <h4>Browse</h4>
              <p>Sign up in less than 3 minutes and browse our collection of properties</p>
            </div>
          </ReactWOW>
          <ReactWOW animation="slideInUp" duration="1.2s">
            <div
              className={`py-3 cursor-pointer ${currentSlide === 1 ? 'active' : null}`}
              onClick={() => setCurrentSlide(1)}
            >
              {currentSlide === 1 ? <div className="w-[40px] rounded-md h-1 bg-primary" /> : null}
              <h4>Purchase</h4>
              <p>Buy a piece of the ones you love, starting from only USD 500</p>
            </div>
          </ReactWOW>
          <ReactWOW animation="slideInUp" duration="1.4s">
            <div
              className={`py-3 cursor-pointer ${currentSlide === 2 ? 'active' : null}`}
              onClick={() => setCurrentSlide(2)}
            >
              {currentSlide === 2 ? <div className="w-[40px] rounded-md h-1 bg-primary" /> : null}
              <h4>Own</h4>
              <p>Sit back and track your income and investments online</p>
            </div>
          </ReactWOW>
          <ReactWOW animation="slideInUp" duration="1.5s">
            <div
              className={`py-3 cursor-pointer ${currentSlide === 3 ? 'active' : null}`}
              onClick={() => setCurrentSlide(3)}
            >
              {currentSlide === 3 ? <div className="w-[40px] rounded-md h-1 bg-primary" /> : null}
              <h4>Exit</h4>
              <p>Hold, exit or resell your stake in a way that suits your financial goals</p>
            </div>
          </ReactWOW>
        </div>
        <div className="users-mobile-group min-h-[250px] sm:min-h-[50px] mb-6">
          <div className="grid sm:hidden gap-2 grid-cols-4">
            <button className={`${currentSlide === 0 ? 'active' : null}`} onClick={() => setCurrentSlide(0)}>
              Browse
            </button>
            <button className={`${currentSlide === 1 ? 'active' : null}`} onClick={() => setCurrentSlide(1)}>
              Purchase
            </button>
            <button className={`${currentSlide === 2 ? 'active' : null}`} onClick={() => setCurrentSlide(2)}>
              Own
            </button>
            <button className={`${currentSlide === 3 ? 'active' : null}`} onClick={() => setCurrentSlide(3)}>
              Exit
            </button>
          </div>
          <div className="py-6 block sm:hidden">
            <p className="py-3">
              {currentSlide === 0 &&
                  'Our team of property professionals combine a data driven valuation and analysis process with over 20 years of leadership experience at the top real estate companies in Dubai, to source the best rental properties with the highest investment potential for you.'}
              {currentSlide === 1 &&
                  'Buy a piece of the ones you love, starting from only USD 500. We offer a range of investment options to suit your financial goals.'}
              {currentSlide === 2 &&
                  'Sit back and track your income and investments online. We provide you with a monthly income statement and a dashboard to track your investments.'}
              {currentSlide === 3 &&
                  'Hold, exit or resell your stake in a way that suits your financial goals. We offer a range of exit options to suit your needs.'}
            </p>
          </div>
        </div>
      </div>
      <div className="scroll bg-[#121C30] mt-12 h-[450px] w-full flex items-center justify-center">
        <div className="w-full h-full">
          {/* make slider */}
          {currentSlide === 0 && (
            <SliderElement
              img={HowItWorksImg1}
              icon={HowItWorksIcon1}
              desc="Our team of property professionals combine a data driven valuation and analysis process with over 20 years of leadership experience at the top real estate companies in Dubai, to source the best rental properties with the highest investment potential for you."
            />
          )}
          {currentSlide === 1 && (
            <SliderElement
              img={HowItWorksImg2}
              icon={HowItWorksIcon2}
              desc="You can purchase shares in the properties that make sense for you, no matter where you are in the world. All investor funds are held in a segregated account, which is used to create an SPV (holding company) in the DIFC to purchase each property (100% owned by you and the other investors)."
            />
          )}
          {currentSlide === 2 && (
            <SliderElement
              img={HowItWorksImg3}
              icon={HowItWorksIcon3}
              desc="Once you invest, we’ll take care of everything, from maintaining the property, to making sure there’s always a tenant in place. You can track your monthly income and manage your investments in real time using our mobile app or web platform."
            />
          )}
          {currentSlide === 3 && (
            <SliderElement
              img={HowItWorksImg4}
              icon={HowItWorksIcon4}
              desc="We work to sell all of our assets at a significantly higher valuation than the purchase price, with investors voting to accept or reject any offers we receive. We’re also launching our secondary market in Q1 2023, but we do recommend a holding period of 5 years in order to maximise your return"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
