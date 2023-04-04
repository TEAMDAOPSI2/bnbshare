import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t } = useTranslation('common');
  return (
    <section className="properties-hero">
      <div className="clip-path" />
      <div className="container py-11 pb-16 px-3 mx-auto">
        <div className="flex flex-col items-center justify-center py-6">
          <h2 className="text-4xl font-bold py-3">{t('properties')}</h2>
          <p className="text-lg text-center md:max-w-[70%]">{t('funded_properties_description')}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
