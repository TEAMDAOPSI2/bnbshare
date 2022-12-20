import CashImg from 'public/assets/sell-with-stake/cash.svg';
import RealEstateImg from 'public/assets/sell-with-stake/real-estate.svg';
import FilesImg from 'public/assets/sell-with-stake/files.svg';
import UserImg from 'public/assets/sell-with-stake/user.svg';

const Box = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, description, img } = props;
  return (
    <div className="flex flex-row shadow rounded-md p-6 bg-white">
      {/* eslint-disable-next-line react/prop-types */}
      <img src={img.src} alt={title} className="w-[50px]" />
      <div className="ml-3">
        <h3 className="text-lg font-bold py-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhySection = () => (
  <section className="bg-gray-100">
    <div className="container py-32 px-3 mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-3">Why Sell With Shares?</h2>
        <p className="text-center text-gray-600 md:w-1/2 mx-auto">
          Sell your property for cash. Shares has a 100% closing rate and can offer fair market value, with none of the
          hassle
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        <Box
          title="No Fees"
          description="The majority of homes submitted will receive a competitive offer in days, and we maintain a 100% closing record on our platform"
          img={CashImg}
        />
        <Box
          title="Sell on your schedule"
          description="We make an offer in a matter of days, but you get to choose your sale date to ensure maximum flexibility"
          img={RealEstateImg}
        />
        <Box
          title="Hassle free exit with low fees"
          description="We cover valuations, marketing and all due diligence - you don’t have to deal with any showings or repairs"
          img={FilesImg}
        />
        <Box
          title="Tenants can remain in place"
          description="Sell with tenants in place, so you don’t have to wait for any leases to expire, and you keep receiving rental income while the property funds"
          img={UserImg}
        />
      </div>
    </div>
  </section>
);

export default WhySection;
