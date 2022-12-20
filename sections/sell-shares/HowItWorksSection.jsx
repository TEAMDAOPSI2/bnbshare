import QuickOfferImg from 'public/assets/sell-with-stake/quick-offer.svg';
import DueDiligenceImg from 'public/assets/sell-with-stake/due-diligence.svg';
import QuickSaleImg from 'public/assets/sell-with-stake/quick-sale.svg';
import EasyCloseImg from 'public/assets/sell-with-stake/easy-close.svg';

const Box = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, description, img } = props;
  return (
    <div className="flex flex-col shadow-md drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] rounded-md p-6">
      {/* eslint-disable-next-line react/prop-types */}
      <img src={img.src} alt={title} className="w-[50px]" />
      <h3 className="text-lg font-bold py-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
const HowItWorksSection = () => (
  <section className="border-t border-gray-300">
    <div className="container py-32 px-3 mx-auto">
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-3">How it works</h2>
        <p className="text-center text-gray-600 md:w-1/3 mx-auto">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          List your property on Shares and get paid in cash when funding closes. It's that simple
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 my-6">
        <Box
          title="Quick Offer"
          description="Upload your property details with no obligations. If we're interested then we’ll provide an offer"
          img={QuickOfferImg}
        />
        <Box
          title="Due diligence"
          description="We’ll manage any necessary upgrades and take professional photography for marketing"
          img={DueDiligenceImg}
        />
        <Box
          title="Quick sale"
          description="Your property will be listed on the Shares platform and typically sold within 30-45 days"
          img={QuickSaleImg}
        />
        <Box
          title="Easy close"
          description="Sale proceeds will be transferred to your bank acount within 30 days of the property closing"
          img={EasyCloseImg}
        />
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
