import WholePropertyImg from 'public/assets/sell-with-stake/whole-property.png';

const PayCashSection = () => (
  <section className="py-12 sm:py-32">
    <div className="container py-6 px-3 mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">We’ll pay cash for your property</h2>
          <p className="text-2xl text-gray-500 font-medium mb-4">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            If you're interested in a quick sale of your property for cash, then Shares is the perfect solution.
          </p>
          <p className="text-gray-500 mb-4">
            We have a 100% closing record and can offer fair market value - with none of the hassle. Our team is
            incredibly knowledgeable and can help you navigate the process seamlessly.
          </p>
          <button className="px-3 py-2 bg-primary rounded-md hover:bg-primary-hover text-white my-5 w-fit"> Sell with Shares</button>
        </div>
        <div>
            <img className="rounded-md" src={WholePropertyImg.src} alt="Whole Property" />
        </div>
      </div>
    </div>
  </section>
);

export default PayCashSection;