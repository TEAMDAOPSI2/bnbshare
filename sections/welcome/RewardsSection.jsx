import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import IntroImg from 'public/assets/onboarding/stake-tier-2.svg';
import { useTranslation } from 'next-i18next';

const RewardsSection = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container mx-auto py-[60px] px-3">
        <div className="flex gap-6 sm:flex-row flex-col">
          <div className="basis-[40%]">
            <h2 className="text-4xl py-3">{t('get_reward_as_you_invest')}</h2>
            <p className="py-3">{t('get_reward_as_you_invest_entry')}</p>
            <div className="flex flex-row justify-between mt-5">
              <p>{t('how_much_do_you_want_to_invest')}</p>
              <p className="text-xl font-medium">USD 5,000</p>
            </div>
            <div className="w-full my-4">
              <Slider />
            </div>
          </div>
          <div className="basis-[60%] rounded-md p-6 border border-gray-200">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between justify-center">
              <div className="flex flex-row items-center justify-center mb-3">
                <img src={IntroImg.src} alt="Intro" className="w-[100px]" />
                <p className="text-4xl font-medium">{t('plus')}</p>
              </div>
              <div className="">
                <p className="font-medium">{t('when_you_invest')}</p>
                <p className="font-semibold text-2xl">USD 25,000 {t('or_more')}</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex flex-row items-center py-2 text-xl">
                <svg viewBox="0 0 24 24" focusable="false" className="w-[30px] mr-2" aria-label="check">
                  <circle cx="12" cy="12" r="10" fill="none" fillRule="nonzero" stroke="none" strokeWidth="1.5" />
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="6"
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1.5"
                  />
                  <g
                    className="stroke-primary"
                    fill="none"
                    fillRule="nonzero"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6.5L9 17.5L4 12.5" />
                  </g>
                </svg>
                USD 500 {t('for_each_referral')}
              </div>
              <div className="flex flex-row items-center py-2 text-xl">
                <svg viewBox="0 0 24 24" focusable="false" className="w-[30px] mr-2" aria-label="check">
                  <circle cx="12" cy="12" r="10" fill="none" fillRule="nonzero" stroke="none" strokeWidth="1.5" />
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="6"
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1.5"
                  />
                  <g
                    className="stroke-primary"
                    fill="none"
                    fillRule="nonzero"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6.5L9 17.5L4 12.5" />
                  </g>
                </svg>
                1.5% {t('cashback equivalent on every investment')}
              </div>
              <div className="flex flex-row items-center py-2 text-xl text-gray-500">
                <svg viewBox="0 0 24 24" focusable="false" className="w-[30px] mr-2" aria-label="cross">
                  <circle cx="12" cy="12" r="10" fill="none" fillRule="nonzero" stroke="none" strokeWidth="1.5" />
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="6"
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1.5"
                  />
                  <g
                    className="stroke-gray-500"
                    fill="none"
                    fillRule="nonzero"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4L20 20 M20 4L4 20" />
                  </g>
                </svg>
                {t('welcome_gift')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
