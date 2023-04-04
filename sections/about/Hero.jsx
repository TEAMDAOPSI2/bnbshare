import DividerIMG from 'public/assets/sell-with-stake/divider.svg';
import TeamImg from 'public/assets/about/team-1x.jpg';
import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <section className="relative w-full">
      <div className="container py-6 px-3 mx-auto">
        <div className="flex flex-col items-center justify-center text-center min-h-[45vh]">
          <p className="text-primary text-2xl font-bold py-6">
            {t('about_us')}
          </p>
          <h2 className="text-4xl font-bold md:w-10/12">
            {t('about_us_sub')}
          </h2>
        </div>
      </div>
      <img className="w-full" src={DividerIMG.src} alt="" />
      <img className="w-full" src={TeamImg.src} alt="" />
    </section>
  );
};

export default Hero;
