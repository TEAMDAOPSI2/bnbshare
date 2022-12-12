import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import IntroImg from 'public/assets/onboarding/stake-tier-2.svg';

const RewardsSection = () => (
  <section>
    <div className="container mx-auto py-[60px] px-3">
      <div className="flex gap-6 flex-row">
        <div className="basis-[40%]">
          <h2 className="text-4xl py-3">Get reward as you invest</h2>
          <p className="py-3">
            The more you invest, the more you get! All investors are automatically enrolled in our membership club, with
            rewards starting from only AED 500 invested
          </p>
          <div className="flex flex-row justify-between mt-5">
            <p>How much do you want to invest?</p>
            <p className="text-xl font-medium">AED 5,000</p>
          </div>
          <div className="w-full my-4">
            <Slider />
          </div>
        </div>
        <div className="w-[60%] rounded-md p-6 border border-gray-200">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center justify-center">
              <img src={IntroImg.src} alt="Intro" className="w-[100px]" />
              <p className="text-4xl font-medium">Plus</p>
            </div>
            <div className="">
              <p className="font-medium">When you invest</p>
              <p className="font-semibold text-2xl">AED 25,000 or more</p>
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
                  className="stroke-emerald-500"
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
              AED 500 for each qualified referral
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
                  className="stroke-emerald-500"
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
              1.5% cashback equivalent on every investment
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
              Welcome gift pack
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RewardsSection;
