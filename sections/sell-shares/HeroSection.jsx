import TimeImg from 'public/assets/published-in/time.svg';
import TCImg from 'public/assets/published-in/tech-crunch.svg';
import ForbesImg from 'public/assets/published-in/forbes.svg';
import GulfBusinessImg from 'public/assets/published-in/gulf-business.svg';
import EMImg from 'public/assets/published-in/entrepreneur-me.svg';
import TheNationImg from 'public/assets/published-in/the-national.svg';
import Divider from 'public/assets/sell-with-stake/divider.svg';

const HeroSection = () => (
  <section>
    <div className="container py-6 px-3 mx-auto">
      <div className="flex md:min-h-[450px] items-center justify-center flex-col">
        <p className="text-lg text-primary font-semibold">Sell with Shares</p>
        <h1 className="text-5xl py-3 font-bold text-center">The easiest home sale ever</h1>
        <p className="text-2xl text-center md:w-1/3 font-light text-gray-500">
          We’ll pay cash for your property. No showings, no surprises, and no hassle
        </p>
        <button className="px-3 py-2 bg-primary rounded-md hover:bg-primary-hover text-white my-5"> Sell with Shares</button>
      </div>
     <div className="py-3">
       <p className="py-6 font-bold text-center text-gray-500">As seen in</p>
       <div className="grid gap-5 sm:gap-3 grid-cols-3 sm:grid-cols-6">
         <img src={TimeImg.src} alt="Time"/>
         <img src={TCImg.src} alt="Tech Crunch"/>
         <img src={ForbesImg.src} alt="Forbes"/>
         <img src={GulfBusinessImg.src} alt="Gulf Business"/>
         <img src={EMImg.src} alt="Entrepreneur ME"/>
         <img src={TheNationImg.src} alt="The National"/>
       </div>
     </div>
    </div>
    <div>
        <img src={Divider.src} alt="divider" className="w-full"/>
    </div>
  </section>
);

export default HeroSection;
