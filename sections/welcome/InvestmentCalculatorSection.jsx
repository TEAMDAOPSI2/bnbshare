import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const InvestmentCalculatorSection = () => (
  <section>
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-center text-3xl font-bold py-3">Investment calculator</h2>
      <div className="gap-3 flex flex-col md:flex-row mt-5">
        <div className="basis-[100%] sm:basis-[40%] p-8 border border-gray-200 rounded-md min-h-[440px] flex flex-col justify-between">
          <h3 className="text-xl font-medium pb-5">How much do you want to invest?</h3>

          <div className="input">
            <div className="flex flex-row justify-between py-3">
              <p>Initial investment</p>
              <p className="font-medium text-xl">USD 105,000</p>
            </div>
            <Slider />
          </div>

          <div className="input">
            <div className="flex flex-row justify-between py-3">
              <p>Property value growth</p>
              <p className="font-medium text-xl">25%</p>
            </div>
            <Slider />
          </div>

          <div className="input">
            <div className="flex flex-row justify-between py-3">
              <p>Expected annual rental yield</p>
              <p className="font-medium text-xl">14%</p>
            </div>
            <Slider min={0} max={100} />
          </div>

          <p className="text-sm mt-5">
            All projected values are before any property costs and platform fees, and based on a 5-year holding period.
            We expect the asset value to grow 30% over the next 5 years.
          </p>
        </div>
        <div className="basis-[100%] sm:basis-[60%] px-6">
          <div className="flex flex-row justify-evenly gap-3 text-center">
            <div>
              <h3 className="text-xl font-medium pb-5">Total projected return:</h3>
              <p className="text-3xl font-bold text-soft-primary">USD 1,000,000</p>
            </div>
            <div>
              <h3 className="text-xl font-medium pb-5">Expected rental income:</h3>
              <p className="text-3xl font-bold text-soft-primary">
                USD 379 <span className="text-base font-normal text-black">/mont</span>
              </p>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-3 mt-6">
            <div className="bg-gray-100 py-3 text-center rounded">
              <p>Initial investment</p>
              <p className="font-medium text-base">USD 35,000</p>
            </div>
            <div className="bg-gray-100 py-3 text-center rounded">
              <p>Total rental income</p>
              <p className="font-medium text-base">USD 21,000</p>
            </div>
            <div className="bg-gray-100 py-3 text-center rounded">
              <p>Value appreciation</p>
              <p className="font-medium text-base">USD 8,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default InvestmentCalculatorSection;
