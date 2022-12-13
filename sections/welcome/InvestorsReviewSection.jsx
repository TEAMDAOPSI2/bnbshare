import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimony from '@/components/welcome/Testimony';

const CustomNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <button
      className="absolute -bottom-20 right-10 h-[60px] w-[60px] bg-white hover:bg-gray-100 shadow rounded-full"
      onClick={onClick}
    >
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        className="w-[50%] mx-auto"
        aria-label="arrow-forward"
        aria-hidden="true"
      >
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
          fill="none"
          fillRule="nonzero"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5 M14 17L19 12 M14 7L19 12" />
        </g>
      </svg>
    </button>
  );
};

const CustomPrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <button
      className="absolute -bottom-20 right-[140px] h-[60px] w-[60px] bg-white hover:bg-gray-100 shadow rounded-full"
      onClick={onClick}
    >
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        className="w-[50%] mx-auto rotate-180"
        aria-label="arrow-forward"
        aria-hidden="true"
      >
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
          fill="none"
          fillRule="nonzero"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5 M14 17L19 12 M14 7L19 12" />
        </g>
      </svg>
    </button>
  );
};

const InvestorsReviewSection = () => {
  const settings = {
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <section className="investor-say bg-gray-200 min-h-[700px] sm:min-h-[550px] relative">
      <div className="clip"/>
      <div className="container px-3 py-12 mx-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 ">
          <div className="flex flex-col justify-center max-w-[80%] sm:max-w-[100%] mx-auto">
            <h2 className="sm:text-5xl text-3xl sm:text-left text-center leading-[1.2] pb-2 font-bold md:w-[80%]">Don’t just take our word for it,</h2>
            <h2 className="sm:text-5xl text-3xl sm:text-left text-center leading-[1.2] font-bold md:w-[80%]">see what our investors have to say</h2>
          </div>
          <div className="slider relative">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Slider {...settings}>
              <Testimony />
              <Testimony />
              <Testimony />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsReviewSection;
