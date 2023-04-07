import HowItWorksImg1 from 'public/assets/home/howitworks/1.svg';
import HowItWorksImg2 from 'public/assets/home/howitworks/2.svg';
import HowItWorksImg3 from 'public/assets/home/howitworks/3.svg';
import HowItWorksImg4 from 'public/assets/home/howitworks/4.svg';
// import IphoneBorderImg from 'public/assets/common/iphone-13-pro-frame.png';
import HowItWorksIcon1 from 'public/assets/home/howitworks/1.icon.svg';
import HowItWorksIcon2 from 'public/assets/home/howitworks/2.icon.svg';
import HowItWorksIcon3 from 'public/assets/home/howitworks/3.icon.svg';
import HowItWorksIcon4 from 'public/assets/home/howitworks/4.icon.svg';
import ReactWOW from 'react-wow';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

// eslint-disable-next-line react/prop-types
const SliderElement = ({ img, icon, desc }) => (
  <div className="w-full h-full">
    <ReactWOW animation="zoomInRight" duration="1s">
      <div className="desc">
        <div className="w-[40px] rounded-md h-1 bg-primary" />
        {desc}
      </div>
    </ReactWOW>
    {/* <ReactWOW animation="slideInRight" duration="1s"> */}
    {/* <div className="phone w-full relative"> */}
    {/* <div className="absolute z-1 w-[450px] flex items-center justify-center"> */}
    {/* eslint-disable-next-line react/prop-types */}
    {/* <img className="w-[380px] rounded-[60px]" src={img.src} alt="Banner Phone" /> */}
    {/* <picture className="absolute top-0 mx-auto"> */}
    {/* <img alt="how it works" className="w-[382px] mx-auto" src={IphoneBorderImg.src} /> */}
    {/* </picture> */}
    {/* </div> */}
    {/* </div> */}
    {/* </ReactWOW> */}
    <ReactWOW animation="zoomInRight" duration="1s">
      <div className="ico invisible sm:visible">
        {/* eslint-disable-next-line react/prop-types */}
        <img src={icon.src} alt="" />
      </div>
    </ReactWOW>
  </div>
);

const HowItWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();
  return (
    <section className="how-it-works">
      <div className="container pt-6 sm:py-6 px-3 mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-4xl py-3 font-semibold">{t('how_it_works')}</h2>
          <p className="font-medium">{t('how_it_works_sub')}</p>
        </div>
        <div className="hidden sm:grid gap-4 grid-cols-4 selector mb-6">
          <ReactWOW animation="slideInUp" duration="1s">
            <div
              className={`py-3 cursor-pointer ${currentSlide === 0 ? 'active' : null}`}
              onClick={() => setCurrentSlide(0)}
            >
              {currentSlide === 0 ? <div className="w-[40px] rounded-md h-1 bg-primary" /> : null}
              <h4>{t('browse')}</h4>
              <p>{t('browse_sub')}</p>
            </div>
          </ReactWOW>
          <ReactWOW animation="slideInUp" duration="1.2s">
            <div
              className={`py-3 cursor-pointer ${currentSlide === 1 ? 'active' : null}`}
              onClick={() => setCurrentSlide(1)}
            >
              {currentSlide === 1 ? <div className="w-[40px] rounded-md h-1 bg-primary" /> : null}
              <h4>{t('purchase')}</h4>
              <p>{t('purchase_sub')}</p>
            </div>
          </ReactWOW>
          <ReactWOW animation="slideInUp" duration="1.4s">
            <div
              className={`py-3 cursor-pointer ${currentSlide === 2 ? 'active' : null}`}
              onClick={() => setCurrentSlide(2)}
            >
              {currentSlide === 2 ? <div className="w-[40px] rounded-md h-1 bg-primary" /> : null}
              <h4>{t('own')}</h4>
              <p>{t('own_sub')}</p>
            </div>
          </ReactWOW>
          <ReactWOW animation="slideInUp" duration="1.5s">
            <div
              className={`py-3 cursor-pointer ${currentSlide === 3 ? 'active' : null}`}
              onClick={() => setCurrentSlide(3)}
            >
              {currentSlide === 3 ? <div className="w-[40px] rounded-md h-1 bg-primary" /> : null}
              <h4>{t('exit')}</h4>
              <p>{t('exit_sub')}</p>
            </div>
          </ReactWOW>
        </div>
        <div className="users-mobile-group min-h-[250px] sm:min-h-[50px] mb-6">
          <div className="grid sm:hidden gap-2 grid-cols-4">
            <button className={`${currentSlide === 0 ? 'active' : null}`} onClick={() => setCurrentSlide(0)}>
              {t('browse')}
            </button>
            <button className={`${currentSlide === 1 ? 'active' : null}`} onClick={() => setCurrentSlide(1)}>
              {t('purchase')}
            </button>
            <button className={`${currentSlide === 2 ? 'active' : null}`} onClick={() => setCurrentSlide(2)}>
              {t('own')}
            </button>
            <button className={`${currentSlide === 3 ? 'active' : null}`} onClick={() => setCurrentSlide(3)}>
              {t('exit')}
            </button>
          </div>
          <div className="py-6 block sm:hidden">
            <p className="py-3">
              {currentSlide === 0 &&
                t('browse_sub')}
              {currentSlide === 1 &&
                t('purchase_sub')}
              {currentSlide === 2 &&
                t('own_sub')}
              {currentSlide === 3 &&
                t('exit_sub')}
            </p>
          </div>
        </div>
      </div>
      <div className="scroll bg-[#121C30] mt-12 h-[450px] w-full hidden sm:flex items-center justify-center">
        <div className="w-full h-full">
          {/* make slider */}
          {currentSlide === 0 && (
            <SliderElement
              img={HowItWorksImg1}
              icon={HowItWorksIcon1}
              desc={t('browse_entry')}
            />
          )}
          {currentSlide === 1 && (
            <SliderElement
              img={HowItWorksImg2}
              icon={HowItWorksIcon2}
              desc={t('purchase_entry')}
            />
          )}
          {currentSlide === 2 && (
            <SliderElement
              img={HowItWorksImg3}
              icon={HowItWorksIcon3}
              desc={t('own_entry')}
            />
          )}
          {currentSlide === 3 && (
            <SliderElement
              img={HowItWorksImg4}
              icon={HowItWorksIcon4}
              desc={t('exit_entry')}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
