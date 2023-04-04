import { useTranslation } from 'next-i18next';

const UserSection = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container px-3 mx-auto mt-[-50px] relative used w-full">
        <div className="bg-white absolute z-10 w-[90%] py-8 text-center shadow rounded-md">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-4">
            <div className="mb-3">
              <h4 className="text-4xl font-bold py-3">
                76K<span>+</span>
              </h4>
              <p>{t('registered_user')}</p>
            </div>
            <div className="mb-3">
              <h4 className="text-4xl font-bold py-3">
                USD 81M<span>+</span>
              </h4>
                <p>{t('in_properties_funded')}</p>
            </div>
            <div className="mb-3">
              <h4 className="text-4xl font-bold py-3">166</h4>
                <p>{t('user_nationalities')}</p>
            </div>
            <div className="mb-3">
              <h4 className="text-4xl font-bold py-3">
                USD 2.2M<span>+</span>
              </h4>
                <p>{t('rental_income')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 h-[540px] sm:h-[250px] flex items-end justify-center">
        <a href="" className="pb-12">
          {t('see_our_27_reviews')}
        </a>
      </div>
    </section>
  );
};

export default UserSection;
