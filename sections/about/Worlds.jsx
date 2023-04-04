import WorldMAP from 'public/assets/about/world-map.svg';
import TimeImg from 'public/assets/published-in/time.svg';
import ForbesImg from 'public/assets/published-in/forbes.svg';
import TechCrunchImg from 'public/assets/published-in/tech-crunch.svg';
import GuilfBuzzImg from 'public/assets/published-in/gulf-business.svg';
import EntrepeneurMiddleEeastImg from 'public/assets/published-in/entrepreneur-me.svg';
import TheNationIMG from 'public/assets/published-in/the-national.svg';
import { useTranslation } from 'next-i18next';

const Worlds = () => {
  const { t } = useTranslation('common');
  return (
    <section className="relative">
      <div className="bg absolute -z-10">
        <img src={WorldMAP.src} alt="" />
      </div>
      <div className="container py-12 px-3 mx-auto">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h2 className="sm:text-[51px] md:leading-[1.2] text-xl font-bold">
              {t('we_are_creating_real_estate_digital')}
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <p>{t('we_are_creating_real_estate_digital_sub')}</p>
            <p>{t('shares_is_digital_real_estates')}</p>
            <p>{t('with_shares_build_global')}</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4 grid-cols-2 my-6">
          <div className="flex flex-col bg-white gap-4 rounded-lg shadow p-5">
            <p className="mb-1 text-xl sm:text-4xl text-primary font-bold">2022</p>
            <p>{t('launch_date')}</p>
          </div>
          <div className="flex flex-col bg-white gap-4 rounded-lg shadow p-5">
            <p className="mb-1 text-xl sm:text-4xl text-primary font-bold">32</p>
            <p>{t('team_members')}</p>
          </div>
          <div className="flex flex-col bg-white gap-4 rounded-lg shadow p-5">
            <p className="mb-1 text-xl sm:text-4xl text-primary font-bold">17</p>
            <p>{t('employee_nationalities')}</p>
          </div>
          <div className="flex flex-col bg-white gap-4 rounded-lg shadow p-5">
            <p className="mb-1 text-xl sm:text-4xl text-primary font-bold">USD 82M+</p>
            <p>{t('value_of_properties')}</p>
          </div>
        </div>
        <div className="my-3">
          <p className="py-3 font-bold text-center">{t('as_featured_in')}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-6 grid-cols-3 my-5">
          <img src={TimeImg.src} alt="" />
          <img src={ForbesImg.src} alt="" />
          <img src={TechCrunchImg.src} alt="" />
          <img src={GuilfBuzzImg.src} alt="" />
          <img src={EntrepeneurMiddleEeastImg.src} alt="" />
          <img src={TheNationIMG.src} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Worlds;
