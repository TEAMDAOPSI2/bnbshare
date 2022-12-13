import Featured from '@/components/welcome/Featured';
import ImgRealEstateIco1 from 'public/assets/home/realestate/1-business-chart.svg';
import ImgRealEstateIco2 from 'public/assets/home/realestate/2-business-coin.svg';
import ImgRealEstateIco3 from 'public/assets/home/realestate/3-business-arrow-up.svg';
import ImgRealEstateIco4 from 'public/assets/home/realestate/4-business-bar.svg';

const BestAssetSection = () => (
  <section className="assets-class bg-gray-100 relative">
    <div className="clip"/>
    <div className="container px-3 py-12 mx-auto">
      <div className="flex gap-3 flex-col sm:flex-row">
        <div className="basis-[40%] flex flex-col justify-center items-center ">
          <h2 className="text-4xl font-medium py-3 md:pr-5">Real estate combines the best of all asset classes</h2>
          <p className="md:pr-5">It is one of the most important asset classes to own and to build long term wealth</p>
        </div>
        <div className="basis-[30%] pt-12">
          <Featured
            className="bg-white mb-6"
            img={ImgRealEstateIco1.src}
            title="Value appreciation"
            desc="In addition to monthly passive income, real estate appreciates in value like equities, creating long term wealth for investors"
          />
          <Featured
            className="bg-white"
            img={ImgRealEstateIco2.src}
            title="Value appreciation"
            desc="In addition to monthly passive income, real estate appreciates in value like equities, creating long term wealth for investors"
          />
        </div>
        <div className="basis-[30%]">
          <Featured
            className="bg-white mb-6"
            img={ImgRealEstateIco3.src}
            title="Value appreciation"
            desc="In addition to monthly passive income, real estate appreciates in value like equities, creating long term wealth for investors"
          />
          <Featured
            className="bg-white mb-6"
            img={ImgRealEstateIco4.src}
            title="Value appreciation"
            desc="In addition to monthly passive income, real estate appreciates in value like equities, creating long term wealth for investors"
          />
        </div>
      </div>
    </div>
  </section>
);

export default BestAssetSection;
