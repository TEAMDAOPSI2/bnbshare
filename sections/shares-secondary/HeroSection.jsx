const Box = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, text } = props;
  return (
    <div className="bg-white rounded-md p-5 mb-3 shadow">
      <h3 className="text-lg pb-3">{title}</h3>
      <p className="text-gray-500 text-sm">{text}</p>
    </div>
  );
};
const HeroSection = () => (
  <section className="bg-gray-100">
    <div className="container py-16 px-3 mx-auto">
      <div className="flex gap-6 flex-col sm:flex-row">
        <div className="md:basis-[55%]">
          <div className="py-3 flex flex-row gap-3 items-center">
            <p className="text-primary font-bold text-lg">Trade your Shares</p>
            <p className="p-1 rounded-md text-sm font-bold bg-white border border-gray-300">Coming February 2023</p>
          </div>
          <h2 className="text-4xl font-bold py-3 mb-3">Flexibility and liquidity for your real estate portfolio</h2>
          <p className="font-light text-gray-500 md:w-[80%] mb-3">
            Our secondary transfer facility will match buyers and sellers of their individual Shares, offering owners
            another exit option and control of the sale process.
          </p>
          <div className="grid grid-cols-2 gap-6 md:w-[90%] py-3">
            <Box
              title="Buyers"
              text="Get much more investment and diversification opportunities through access to closed properties."
            />
            <Box
              title="Sellers"
              text="Actively manage your portfolio with access to instant liquidity and take control of the exit process if needed."
            />
          </div>
        </div>
        <div className="bg-transparent flex-auto"/>
      </div>
    </div>
  </section>
);

export default HeroSection;
