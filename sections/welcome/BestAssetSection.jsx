import Featured from '@/components/welcome/Featured';
import ImgRealEstateIco1 from 'public/assets/home/realestate/1-business-chart.svg';
import ImgRealEstateIco2 from 'public/assets/home/realestate/2-business-coin.svg';
import ImgRealEstateIco3 from 'public/assets/home/realestate/3-business-arrow-up.svg';
import ImgRealEstateIco4 from 'public/assets/home/realestate/4-business-bar.svg';
import { useTranslation } from 'next-i18next';

const BestAssetSection = () => {
  const { t } = useTranslation();
  return (
    <section className="assets-class bg-gray-100 relative">
      <div className="clip" />
      <div className="container px-3 py-12 mx-auto">
        <div className="flex gap-3 flex-col sm:flex-row">
          <div className="basis-[40%] flex flex-col justify-center items-center ">
            <h2 className="text-4xl font-medium py-3 md:pr-5">{t('real_estate_combines')}</h2>
            <p className="md:pr-5">{t('it_is_one_of_the_most')}</p>
          </div>
          <div className="basis-[30%] pt-12">
            <Featured
              className="bg-white mb-6"
              img={ImgRealEstateIco1.src}
              title={t('drives_investment')}
              desc={t('drives_investment_entry')}
            />
            <Featured
              className="bg-white"
              img={ImgRealEstateIco2.src}
              title={t('tangible_asset')}
              desc={t('tangible_asset_entry')}
            />
          </div>
          <div className="basis-[30%]">
            <Featured
              className="bg-white mb-6"
              img={ImgRealEstateIco3.src}
              title={t('potential_for_growth')}
              desc={t('potential_for_growth_entry')}
            />
            <Featured
              className="bg-white mb-6"
              img={ImgRealEstateIco4.src}
              title={t('inflation_hedge')}
              desc={t('inflation_hedge_entry')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestAssetSection;
