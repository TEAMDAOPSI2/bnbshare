import BannerPhoneImg from 'public/assets/home/banner/banner-phone.svg';
import IphoneBorderImg from 'public/assets/common/iphone-13-pro-frame.png';
import AppStore from 'public/assets/app-store.svg';
import GooglePlay from 'public/assets/play-store.svg';
import ReactWOW from 'react-wow';

const HeroSection = () => (
  <section className="hero-welcome">
    <div className="clip-path" />
    <div className="container py-12 px-3 mx-auto">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:basis-[45%] basis-[100%]">
          <div className="flex h-full justify-center flex-col gap-3">
            <ReactWOW animation="slideInUp" duration="1s">
              <h1 className="text-4xl font-bold font-sans">The modern way for anyone to invest in real estate</h1>
            </ReactWOW>
            <ReactWOW animation="slideInUp" duration="1s">
              <p className="text-muted">
                Digitally invest in prime rental properties from only USD 500 (USD 136), no matter where you are in the
                world!
              </p>
            </ReactWOW>
            <ReactWOW animation="slideInDown" duration="1s">
              <button className="inline-block flex flex-row items-center text-lg font-semibold text-slate-800 hover:text-dark-primary hover:underline hover:underline-offset-auto w-fit">
                <svg viewBox="0 0 32 32" focusable="false" className="w-[40px]" aria-hidden="true">
                  <rect x="10.6667" y="10.6667" width="12" height="12" fill="white" />
                  <path
                    className="fill-primary"
                    d="M16.0003 1.21875C24.1639 1.21875 30.7818 7.83667 30.7818 16.0003C30.7818 24.1639 24.1639 30.7818 16.0003 30.7818C7.83667 30.7818 1.21875 24.1639 1.21875 16.0003C1.21875 7.83667 7.83667 1.21875 16.0003 1.21875ZM12.9714 12.4947V19.4885C12.9714 20.1188 13.6428 20.4987 14.1658 20.1827L19.9728 16.6866C20.4908 16.3757 20.4925 15.6092 19.9728 15.2983L14.1658 11.8005C13.6939 11.5164 12.9714 11.7921 12.9714 12.4947Z"
                    fill="#41CE8E"
                  />
                </svg>
                <span className="ml-2">Hot it works</span>
              </button>
            </ReactWOW>
            <ReactWOW animation="slideInDown" duration="1s">
              <div className="flex flex-row gap-3 mb-6">
                <a href="#">
                  <img src={AppStore.src} alt="app store" />
                </a>
                <a href="#">
                  <img src={GooglePlay.src} alt="google play" />
                </a>
              </div>
            </ReactWOW>
          </div>
        </div>
        <div className=" basis-[100%] sm:basis-[55%] relative flex inset-0 justify-end w-[100%] h-[700px]">
          <div className="h-[710px] sm:h-[200px]" />
          <div className="absolute z-20 w-[300px] right-1/2 translate-x-1/2">
            <ReactWOW animation="slideInUp" duration="1s">
              <img className="h-[650px] w-full rounded-[60px]" src={BannerPhoneImg.src} alt="Banner Phone" />
              <picture className="absolute top-0">
                <img className="h-[650px] w-full" src={IphoneBorderImg.src} alt="Iphone Border" />
              </picture>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
