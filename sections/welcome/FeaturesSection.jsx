import FeaturesImg1 from 'public/assets/home/modernway/1.svg';
import FeaturesImg2 from 'public/assets/home/modernway/2.svg';
import FeaturesImg3 from 'public/assets/home/modernway/3.svg';
import FeaturesImg4 from 'public/assets/home/modernway/4.svg';
import Featured from '@/components/welcome/Featured';
import ReactWOW from 'react-wow';
import { useTranslation } from 'next-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container px-3 py-8 mx-auto">
        <div className="text-center w-full">
          <ReactWOW animation="slideInUp" duration="1s">
            <h2 className="text-4xl font-bold max-w-[90%] sm:max-w-[50%] mx-auto py-3">
              {t('the_modern_way_to_invest')}
            </h2>
          </ReactWOW>
          <ReactWOW animation="slideInUp" duration="1s">
            <p className="mt-4  font-medium text-gray-500 lg:max-w-[60%] mx-auto">
              {t('the_modern_way_to_invest_sub')}
            </p>
          </ReactWOW>
        </div>
        <ReactWOW animation="slideInUp" duration="1.3s">
          <div className="grid gap-7 lg:grid-cols-4 md:grid-cols-2 mt-6">
            <Featured
              img={FeaturesImg1.src}
              title={t('invest_in_real_estate')}
              desc={t('invest_in_real_estate_entry')}
            />
            <Featured
              img={FeaturesImg2.src}
              title={t('digital_and_diverse')}
              desc={t('digital_and_diverse_entry')}
            />
            <Featured
              img={FeaturesImg3.src}
              title={t('hassle_ownership')}
              desc={t('hassle_ownership_entry')}
            />
            <Featured
              img={FeaturesImg4.src}
              title={t('trusted_entity')}
              desc={t('trusted_entity_entry')}
            />
          </div>
        </ReactWOW>
      </div>
    </section>
  );
};

export default FeaturesSection;
