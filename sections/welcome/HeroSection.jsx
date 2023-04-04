import ReactWOW from 'react-wow';
import { useTranslation } from 'next-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="hero-welcome">
      <div className="clip-path" />
      <div className="container py-8 px-3 mx-auto">
        <div className="flex flex-col sm:flex-row min-h-[750px] sm:min-h-[450px]">
          <div className="md:w-[45%]">
            <div className="flex h-full justify-center flex-col gap-3">
              <ReactWOW animation="slideInUp" duration="1s">
                <h1 className="text-4xl font-bold font-sans">{t('the_modern_way_to_invest')}</h1>
              </ReactWOW>
              <ReactWOW animation="slideInUp" duration="1s">
                <p className="text-muted">{t('the_modern_way_to_invest_sub')}</p>
              </ReactWOW>
              <ReactWOW animation="slideInDown" duration="1s">
                <button className="inline-block flex flex-row items-center text-lg font-semibold text-slate-800 hover:text-dark-primary hover:underline hover:underline-offset-auto w-fit">
                  <svg viewBox="0 0 32 32" focusable="false" className="w-[40px]" aria-hidden="true">
                    <rect x="10.6667" y="10.6667" width="12" height="12" fill="white" />
                    <path
                      className="fill-primary"
                      d="M16.0003 1.21875C24.1639 1.21875 30.7818 7.83667 30.7818 16.0003C30.7818 24.1639 24.1639 30.7818 16.0003 30.7818C7.83667 30.7818 1.21875 24.1639 1.21875 16.0003C1.21875 7.83667 7.83667 1.21875 16.0003 1.21875ZM12.9714 12.4947V19.4885C12.9714 20.1188 13.6428 20.4987 14.1658 20.1827L19.9728 16.6866C20.4908 16.3757 20.4925 15.6092 19.9728 15.2983L14.1658 11.8005C13.6939 11.5164 12.9714 11.7921 12.9714 12.4947Z"
                      fill="#3b5998"
                    />
                  </svg>
                  <span className="ml-2">{t('how_it_works')}</span>
                </button>
              </ReactWOW>
            </div>
          </div>
          <div className="relative flex items-center justify-end md:w-[55%] sm:h-[650px] h-[550px]">
            <div className="absolute z-20 w-full">
              <ReactWOW animation="slideInUp" duration="1s">
                <video className="sm:w-full w-[80%] mx-auto h-[450px] rounded-[60px]" autoPlay loop muted>
                  <source src="assets/home/hero.mov" type="video/mp4" />
                </video>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
