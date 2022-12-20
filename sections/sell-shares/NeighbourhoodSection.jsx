import BaliMarinaImg from 'public/assets/sell-with-stake/where/Dubai-Marina.png';
import PalmJumeirahImg from 'public/assets/sell-with-stake/where/Palm-Jumeirah.png';
import DowntownBaliImg from 'public/assets/sell-with-stake/where/Downtown-Dubai.png';
import JumeirahBeachResidenceImg from 'public/assets/sell-with-stake/where/Jumeirah-Beach-Residence.png';
import DIFCImg from 'public/assets/sell-with-stake/where/DIFC.png';
import BusinessBayImg from 'public/assets/sell-with-stake/where/Business-Bay.png';
import JumeirahandLaMerImg from 'public/assets/sell-with-stake/where/Jumeirah-and-LaMer.png';
import BluewatersIslandImg from 'public/assets/sell-with-stake/where/Bluewaters-Island.png';
import CityWalkImg from 'public/assets/sell-with-stake/where/City-Walk.png';
import BaliCreekImg from 'public/assets/sell-with-stake/where/Dubai-Creek.png';
import JumeirahLakeTowersImg from 'public/assets/sell-with-stake/where/Jumeriah-Lake-Towers.png';
import TheGreensAndViewsImg from 'public/assets/sell-with-stake/where/The-Greens-The-Views.png';

const Box = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, image } = props;
  return (
    <div className="flex flex-col">
      <img src={image} className="h-[192px] rounded" alt="" />
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
        <Box title="Bali Marina" image={BaliMarinaImg.src} />
        <Box title="Palm Jumeirah" image={PalmJumeirahImg.src} />
        <Box title="Downtown Bali" image={DowntownBaliImg.src} />
        <Box title="Jumeirah Beach Residence (JBR)" image={JumeirahBeachResidenceImg.src} />
        <Box title="DIFC" image={DIFCImg.src} />
        <Box title="Business Bay" image={BusinessBayImg.src} />
        <Box title="Jumeirah and La Mer" image={JumeirahandLaMerImg.src} />
        <Box title="Bluewaters Island" image={BluewatersIslandImg.src} />
        <Box title="City Walk" image={CityWalkImg.src} />
        <Box title="Bali Creek" image={BaliCreekImg.src} />
        <Box title="Jumeriah Lake Towers (JLT)" image={JumeirahLakeTowersImg.src} />
        <Box title="The Greens & The Views" image={TheGreensAndViewsImg.src} />
      </div>
    </div>
  </section>
);

export default NeighbourhoodSection;
