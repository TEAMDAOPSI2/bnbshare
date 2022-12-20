import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactWOW from 'react-wow';
import Villa1 from 'public/assets/properties/villa_1.jpg';
import Villa2 from 'public/assets/properties/villa_2.jpg';
import Villa3 from 'public/assets/properties/villa_3.jpg';
import Villa4 from 'public/assets/properties/villa_4.jpg';
import IDFlags from 'public/assets/Flag_of_Indonesia.png';

const CustomNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 h-[25px] w-[25px] opacity-75 hover:opacity-100 bg-gray-100 hover:bg-gray-200 shadow rounded-full arrow"
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
      className="absolute  left-0 top-1/2 z-10 h-[25px] w-[25px] bg-white opacity-75 hover:opacity-100 hover:bg-gray-200 shadow rounded-full arrow"
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

const Property = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <ReactWOW animation="slideInRight" duration="1s" delay="0.5s">
      <div className="rounded-md bg-white shadow property-component cursor-pointer">
        <div className="relative">
          <div className="img-slider">
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Slider {...settings}>
              <img className="w-full h-[280px] object-cover rounded-t-md" src={Villa1.src} alt="listing 1" />
              <img className="w-full h-[280px] object-cover rounded-t-md" src={Villa2.src} alt="listing 2" />
              <img className="w-full h-[280px] object-cover rounded-t-md" src={Villa3.src} alt="listing 3" />
              <img className="w-full h-[280px] object-cover rounded-t-md" src={Villa4.src} alt="listing 4" />
            </Slider>
          </div>
          <div className="absolute top-2 left-2 flex flex-row">
            <div className="rounded-lg px-2 py-1  flex flex-row justify-between items-center bg-white">
              <img src={IDFlags.src} alt="Indonesia flag" className="w-5 h-5 rounded-full" />
              <span className="ml-1 text-sm font-medium">Bali</span>
            </div>
            <div className="rounded-lg px-2 py-1  flex flex-row justify-between items-center bg-white ml-3">
              <svg className="stroke-primary w-[20px]" viewBox="0 0 24 24" focusable="false" aria-label="user">
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
              <span className="ml-1 text-sm font-medium">Rented</span>
            </div>
          </div>
        </div>
        <div className="py-3 px-5">
          <h3 className="text-xl font-medium">1 Bed in Canggu, Bali.</h3>
          <div className="flex flex-row items-center gap-2">
            <p className="text-primary text-xl font-semibold grow-1">
              <span className="text-base">USD</span> 560,000
            </p>
            <div className="flex flex-row grow items-center justify-end py-3">
              <div className="bg-gray-200 rounded-full h-2.5 bg-gray-300 w-[120px]">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }} />
              </div>
              <p className="text-sm ml-1">45% founded</p>
            </div>
          </div>
          <div className="grid gap-3 bg-gray-200 grid-cols-3 rounded-md p-2 my-3">
            <div className="p-1">
              <p className="text-sm font-medium">56.82%</p>
              <p className="text-sm text-gray-600">project return</p>
            </div>
            <div className="p-1">
              <p className="text-sm font-medium">6.82%</p>
              <p className="text-sm text-gray-600">gross yield</p>
            </div>
            <div className="p-1">
              <p className="text-sm font-medium">30 Nov 2022</p>
              <p className="text-sm text-gray-600">closed</p>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-5 mb-3">
            <p className="font-semibold">
              <span className="font-light">Rent</span> USD 9,167.month
            </p>
            <p className="font-semibold">
              <span className="font-light">Distributed</span> Monthly
            </p>
          </div>
        </div>
      </div>
    </ReactWOW>
  );
};

export default Property;
