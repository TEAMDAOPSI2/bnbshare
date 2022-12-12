import Property from '@/components/Property';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
      <button
          className="absolute right-0 top-1/2 h-[60px] w-[60px] bg-gray-100 hover:bg-gray-200 shadow rounded-full"
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
          className="absolute  left-0 top-1/2 z-10 h-[60px] w-[60px] bg-gray-100 hover:bg-gray-200 shadow rounded-full"
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


const PropertiesSection = () => {
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: 'my-5',
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <section className="bg-gray-100 properties-founded">
      <div className="container py-6 px-3 mx-auto">
        <div className="header py-3 text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold py-3">Funded properties</h2>
          <p className="text-center md:w-[70%] py-3 text-gray-900">
            We leverage our network and expertise, built up over 20+ years leading the biggest real estate companies in
            Dubai, to source the best properties with the highest investment potential for you
          </p>
        </div>

        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>
          <div className="p-3">
            <Property />
          </div>
          <div className="p-3">
            <Property />
          </div>
          <div className="p-3">
            <Property />
          </div>
          <div className="p-3">
            <Property />
          </div>
          <div className="p-3">
            <Property />
          </div>
          <div className="p-3">
            <Property />
          </div>
        </Slider>

        <div className="text-center mt-[60px] mb-[40px]">
          <a
            href="#"
            className="rounded-lg py-3 px-6 border border-gray-300 font-semibold transition ease-in-out duration-150 hover:bg-emerald-500 hover:border-emerald-400 hover:text-white"
          >
            View available properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
