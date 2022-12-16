import MakeMoneyPropertiesImg from 'public/assets/home/makemoney/1-bed-burj.svg';
import MakeMoneyIco1 from 'public/assets/home/makemoney/new-property-value.svg';
import MakeMoneyIco2 from 'public/assets/home/makemoney/new-monthly-cashflow.svg';
import ReactWOW from 'react-wow';

const MakeMoneySection = () => (
  <section className="bg-slate-100">
    <div className="container py-8 px-3 mx-auto">
      <ReactWOW animation="slideInUp" duration="1s">
        <div className="text-center">
          <h2 className="text-4xl py-3 font-semibold">So, how well you make money?</h2>
          <p className="font-medium">Stake was built to empower everyone to own and build wealth through real estate</p>
        </div>
      </ReactWOW>
      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center">
        <ReactWOW animation="slideInUp" duration="1s">
          <div className="info max-w-full sm:max-w-[300px] h-fit bg-white p-3 shadow rounded order-1">
            <div className="ico flex flex-col">
              <img className="w-[80px] " src={MakeMoneyIco2.src} alt="" />
            </div>
            <h4 className="text-2xl font-medium py-3 w-[180px]">Monthly rental income</h4>
            <p>Consistent passive income from monthly rental payments</p>
          </div>
        </ReactWOW>
        <ReactWOW animation="slideInUp" duration="1s">
          <div className="relative rounded shadow order-last sm:order-2 mx-10 sm:mx-0">
            <div className="flex flex-row h-[50px] w-fit py-3 px-5 rounded shadow justify-center bg-white absolute -left-10 top-2">
              <svg className="stroke-primary" viewBox="0 0 24 24" focusable="false" aria-label="user">
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
                  <path d="M5 20C5 17.5 7 15.6 9.4 15.6H14.5C17 15.6 18.9 17.6 18.9 20 M15 5.2C16.7 6.9 16.7 9.6 15 11.2C13.3 12.8 10.6 12.9 9.00001 11.2C7.40001 9.5 7.30001 6.8 9.00001 5.2C10.7 3.6 13.3 3.6 15 5.2" />
                </g>
              </svg>
              <span className="flex items-center font-medium">Rented</span>
            </div>
            <img src={MakeMoneyPropertiesImg.src} alt="Make money properties" />
          </div>
        </ReactWOW>
        <ReactWOW animation="slideInUp" duration="1s">
          <div className="info max-w-full sm:max-w-[300px] h-fit bg-white p-3 shadow rounded order-3">
            <div className="ico flex flex-col">
              <img className="w-[80px] " src={MakeMoneyIco1.src} alt="" />
            </div>
            <h4 className="text-2xl font-medium py-3 w-[180px]">Long term value appreciation</h4>
            <p>Watch your investment grow as the property value appreciates</p>
          </div>
        </ReactWOW>
      </div>
    </div>
  </section>
);
export default MakeMoneySection;
