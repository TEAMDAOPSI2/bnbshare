import { useTranslation } from 'next-i18next';

const ResponsibleInvesting = () => {
  const { t } = useTranslation('common');
  return (
    <section className="bg-slate-200">
      <div className="container py-12 px-3 mx-auto">
        <div className="flex flex-col items-center justify-center md:max-w-[60%] mx-auto">
          <h2 className="py-3 text-4xl font-bold text-center">{t('responsible_investing')}</h2>
          <p className="py-3">{t('responsible_investing_entry')}</p>
          <p className="py-3">{t('responsible_investing_entry2')}</p>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleInvesting;
