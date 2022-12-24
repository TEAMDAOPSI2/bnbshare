import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactWOW from 'react-wow';
import IDFlags from 'public/assets/Flag_of_Indonesia.png';
// eslint-disable-next-line import/extensions
import { dateFormat, numberFormat } from '@/utils/strings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookingICO from 'public/assets/social/bookingcom-1.svg';
import MetamaskICO from 'public/assets/social/metamask-icon.svg';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';

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

const Property = (props) => {
  // eslint-disable-next-line react/prop-types
  const { property } = props;
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
              {
                // eslint-disable-next-line react/prop-types
                property?.image_url.map((image) => (
                  <img className="w-full h-[280px] object-cover rounded-t-md" src={image} alt="listing 1" />
                ))
              }
            </Slider>
          </div>
          <div className="absolute top-2 left-2 flex flex-row">
            <div className="rounded-lg px-2 py-1  flex flex-row justify-between items-center bg-white">
              <img src={IDFlags.src} alt="Indonesia flag" className="w-5 h-5 rounded-full" />
              <span className="ml-1 text-sm font-medium">{property?.city}</span>
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
              <span className="ml-1 text-sm font-medium capitalize">{property?.status}</span>
            </div>
          </div>
        </div>
        <div className="py-3 px-5">
          <h3 className="text-xl font-medium">{`${property?.name} | ${property?.type_bed} | ${property?.place}`}</h3>
          <div className="flex flex-row items-center gap-2">
            <p className="text-primary text-xl font-semibold grow-1">
              <span className="text-base">USD</span> {numberFormat(property?.price_actual)}
            </p>
            <div className="flex flex-row grow items-center justify-end py-3">
              <div className="bg-gray-200 rounded-full h-2.5 w-[120px]">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${property?.percentage_status}%` }} />
              </div>
              <p className="text-sm ml-1">
                {property?.percentage_status}% <span className="capitalize">{property?.status}</span>
              </p>
            </div>
          </div>
          <div className="grid gap-3 bg-gray-200 grid-cols-3 rounded-md p-2 my-3">
            <div className="p-1">
              <p className="text-sm font-medium">+{property?.project_roi}%</p>
              <p className="text-xs text-gray-600">project ROI(10y)</p>
            </div>
            <div className="p-1">
              <p className="text-sm font-medium">+{property?.annual_roi}%</p>
              <p className="text-xs text-gray-600">annual ROI(1y)</p>
            </div>
            <div className="p-1">
              <p className="text-sm font-medium">{dateFormat(property?.closed)}</p>
              <p className="text-xs text-gray-600">closed</p>
            </div>
          </div>

          <div className="flex flex-row justify-between mt-5 mb-3">
            <div className="font-semibold flex flex-col">
              <div>
                <p className="font-light mr-1">Rent Daily</p>
              </div>
              <div className='flex flex-row'>
                <span className="lowercase">usd</span> {property?.price_rent_month}
                <span className='flex flex-row'>
                  <FontAwesomeIcon icon={faAirbnb} className="ml-1 w-3" />
                  <img src={BookingICO.src} alt="" className='ml-1 w-3' />
                </span>
              </div>
            </div>
            <div className="font-semibold capitalize flex flex-col">
              <div>
                <span className="font-light">Distribution {property?.distribution}</span>
              </div>
              <div className='flex flex-row'>
                <span className="lowercase">usd</span> {numberFormat(property?.price_distribution)}
                <img src={MetamaskICO.src} alt="" className='ml-1 w-3' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactWOW>
  );
};

export default Property;
