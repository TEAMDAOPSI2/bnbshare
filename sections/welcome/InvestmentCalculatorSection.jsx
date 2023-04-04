import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useTranslation } from 'next-i18next';

const InvestmentCalculatorSection = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-center text-3xl font-bold py-3">{t('investment_calculator')}</h2>
        <div className="gap-3 flex flex-col md:flex-row mt-5">
          <div className="basis-[100%] sm:basis-[40%] p-8 border border-gray-200 rounded-md min-h-[440px] flex flex-col justify-between">
            <h3 className="text-xl font-medium pb-5">{t('how_much_do_you_want_to_invest')}</h3>

            <div className="input">
              <div className="flex flex-row justify-between py-3">
                <p>{t('initial_investment')}</p>
                <p className="font-medium text-xl">USD 105,000</p>
              </div>
              <Slider />
            </div>

            <div className="input">
              <div className="flex flex-row justify-between py-3">
                <p>{t('property_growth')}</p>
                <p className="font-medium text-xl">25%</p>
              </div>
              <Slider />
            </div>

            <div className="input">
              <div className="flex flex-row justify-between py-3">
                <p>{t('expected_annual_rental_income')}</p>
                <p className="font-medium text-xl">14%</p>
              </div>
              <Slider min={0} max={100} />
            </div>

            <p className="text-sm mt-5">{t('all_projected_value')}</p>
          </div>
          <div className="basis-[100%] sm:basis-[60%] px-6">
            <div className="flex flex-row justify-evenly gap-3 text-center">
              <div>
                <h3 className="text-xl font-medium pb-5">{t('total_project_return')}</h3>
                <p className="text-3xl font-bold text-soft-primary">USD 1,000,000</p>
              </div>
              <div>
                <h3 className="text-xl font-medium pb-5">{t('expected_rental_income')}</h3>
                <p className="text-3xl font-bold text-soft-primary">
                  USD 379 <span className="text-base font-normal text-black">/{t('month')}</span>
                </p>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-3 mt-6">
              <div className="bg-gray-100 py-3 text-center rounded">
                <p>{t('initial_investment')}</p>
                <p className="font-medium text-base">USD 35,000</p>
              </div>
              <div className="bg-gray-100 py-3 text-center rounded">
                <p>{t('total_rental_income')}</p>
                <p className="font-medium text-base">USD 21,000</p>
              </div>
              <div className="bg-gray-100 py-3 text-center rounded">
                <p>{t('value_appreciation')}</p>
                <p className="font-medium text-base">USD 8,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InvestmentCalculatorSection;
