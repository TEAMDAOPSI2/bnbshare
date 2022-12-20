import Pills from '@/components/Pills';
import Link from 'next/link';

const FaqSection = () => {
  return (
    <section>
      <div className="container py-16 px-3 mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-3">Frequently asked questions</h2>
          <p className="text-center text-gray-600 md:w-[60%] mx-auto">
            Here’s some of the most common questions about selling your property on Shares! You can also reach out to us
            if you have any questions and our team will take care of you!
          </p>
        </div>
        <div className="md:w-[80%] mx-auto">
          <Pills title="How much does it cost to sell my property with Shares?">
            <p className="py-2">
              Sellers pay a convenience fee of up to 6% on the sale price of their property and that’s it. The fee is
              deducted from the cash amount deposited to your bank account after the property has closed funding. The
              fee covers all due diligence, marketing and platform fees required for listing. By selling with Shares you
              can avoid brokerage commission and conveyancing fees of up to 3%, while securing a cash offer and quick
              sale.
            </p>
          </Pills>
          <Pills title="Are there any other transaction fees that seller’s are liable for?">
            <p className="py-2">
              No, there are no other fees levied on the seller by selling their property on Shares.
            </p>
          </Pills>
          <Pills title="How long does it take to sell my property on Shares?">
            <p className="py-2">
              It depends on the investment potential, price and size of your property. More expensive and larger units
              typically take a few extra days to fund. On average the whole process takes 45 days, from signing the MOU
              to the transfer of ownership. The maximum timeline required is 90 days (60 days to raise the funds on our
              platform, followed by 30 days to transfer ownership). In all scenarios this is a significantly shorter
              timeline than typical time properties are listed on the market.
            </p>
          </Pills>
          <Pills title="How does Shares determine an offer price?">
            <p className="py-2">
              We review the characteristics and condition of the property, as well as the sales transactions history
              published by the Dubai Land Department, via Reiden and other data sources. We then perform a value
              analysis of comparable sales of properties with similar characteristics, condition and locations, as well
              as the investment potential of the asset.
            </p>
          </Pills>
          <Pills title="What documents do I need to sell my property on Shares?">
            <p className="py-2">
              We will request common documentation such as a title deed, your proof of address and KYC details
              (passport, etc.) in order to sign a memorandum of understanding for the sale.
            </p>
          </Pills>
          <Pills title="Why is selling on Shares better than selling on the open market?">
            <p className="py-2">
              By selling with Shares you can secure a cash sale of your property and avoid any delays or closing
              failures due to leveraged offers. You can also avoid brokerage commission and conveyancing fees of up to
              3%, while securing a quick sale. Shares provides a security deposit of 5% of the agreed selling price, in
              order to secure exclusivity on your property, and has a 100% closing record within our maximum listing
              time of 60 days. Best of all - you can sell with a tenant in place while avoiding multiple viewings and
              multiple point of contacts. Shares takes the hassle out of home selling by taking it all off your plate!
            </p>
          </Pills>
          <Pills title="Can I sell my property before the current lease expires and the property is vacated?">
            <p className="py-2">
              Yes! Shares allows property owners to buy and sell real estate with tenants in place, ensuring no
              interruption of cash flow. There is no need to remove your existing tenant, or even arrange viewings or
              stage an open house. Our model reduces friction costs, prevents potential acrimony from tenants and
              streamlines the property selling experience for everyone.
            </p>
          </Pills>
        </div>
        <p className="mt-6 text-center">
          You can also reach out to us at
          <Link href="#" className="text-primary font-bold">
            {' '}
            contact@shares.villas
            {' '}
          </Link>
          if you have any other questions!
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
