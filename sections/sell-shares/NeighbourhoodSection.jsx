import PererranImg from 'public/assets/sell-with-stake/where/Pererran.jpg';
import CangguImg from 'public/assets/sell-with-stake/where/canggu.jpg';
import UbudImg from 'public/assets/sell-with-stake/where/ubud.avif';
import UluwatuImg from 'public/assets/sell-with-stake/where/uluwatu.avif';

const Box = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, image } = props;
  return (
    <div className="flex flex-col">
      <img src={image} className="h-[230px] object-cover rounded" loading="lazy" alt="" />
      <h3 className="text-xl font-bold mt-3">{title}</h3>
    </div>
  );
};
const NeighbourhoodSection = () => (
  <section className="py-16 bg-gray-100">
    <div className="container px-3 mx-auto">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-center mb-3">What neighbourhoods do we cover?</h2>
        <p className="text-center text-gray-600 md:w-1/2 mx-auto">
          We list properties in the following neighbourhoods. If you’re looking to sell in these areas then we’ll
          consider a full cash offer!
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-4">
        <Box title="Canggu" image={CangguImg.src} />
        <Box title="Pererran" image={PererranImg.src} />
        <Box title="Uluwatu" image={UluwatuImg.src} />
        <Box title="Ubud" image={UbudImg.src} />
      </div>
    </div>
  </section>
);

export default NeighbourhoodSection;
