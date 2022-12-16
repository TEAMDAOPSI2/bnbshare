import WorldMAP from 'public/assets/about/world-map.svg';
import TimeImg from  'public/assets/published-in/time.svg';
import ForbesImg from  'public/assets/published-in/forbes.svg';
import TechCrunchImg from  'public/assets/published-in/tech-crunch.svg';
import GuilfBuzzImg from 'public/assets/published-in/gulf-business.svg';
import EntrepeneurMiddleEeastImg from 'public/assets/published-in/entrepreneur-me.svg';
import TheNationIMG from 'public/assets/published-in/the-national.svg';

const Worlds = () => (
  <section className="relative">
    <div className="bg absolute -z-10">
      <img src={WorldMAP.src} alt="" />
    </div>
    <div className="container py-12 px-3 mx-auto">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="sm:text-[51px] md:leading-[1.2] text-xl font-bold">
            We’re creating a world where real estate is fully digital, accessible, borderless and liquid.
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Real estate is one the most important asset class to own in order to build long-term wealth, but it’s highly
            inaccessible, illiquid, and complicated. There’s tonnes of paperwork, large down payment requirements, and
            the market is completely illiquid. On top of that, great deals take a lot of time and connections to secure.
          </p>
          <p>
            Shares is a digital real estate investment platform, built to change this. We leverage our network and
            expertise, built up over 20+ years leading the biggest real estate companies in Dubai, to source the best
            properties in our markets, and break down the entry barrier for investors to only AED 500 (c. 136 USD). The
            rest is on us - we manage your all of your investments, from acquisition to exit, and distribute monthly
            rental payments and sales income directly to your Shares wallet.
          </p>
          <p>
            With Shares, you can <b>start building a global real estate portfolio in minutes</b>, and start generating
            lifetime passive income to support the life you deserve.
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-4 grid-cols-2 my-6">
        <div className="flex flex-col bg-white gap-4 rounded-lg shadow p-5">
          <p className="mb-1 text-xl sm:text-4xl text-primary font-bold">2021</p>
          <p>Launch date</p>
        </div>
        <div className="flex flex-col bg-white gap-4 rounded-lg shadow p-5">
          <p className="mb-1 text-xl sm:text-4xl text-primary font-bold">32</p>
          <p>Team members</p>
        </div>
        <div className="flex flex-col bg-white gap-4 rounded-lg shadow p-5">
          <p className="mb-1 text-xl sm:text-4xl text-primary font-bold">17</p>
          <p>Employee nationalities</p>
        </div>
        <div className="flex flex-col bg-white gap-4 rounded-lg shadow p-5">
          <p className="mb-1 text-xl sm:text-4xl text-primary font-bold">USD 82M+</p>
          <p>Value of properties funded</p>
        </div>
      </div>
      <div className="my-3">
        <p className="py-3 font-bold text-center">As featured in</p>
      </div>
      <div className="grid gap-4 md:grid-cols-6 grid-cols-3 my-5">
        <img src={TimeImg.src} alt=""/>
        <img src={ForbesImg.src} alt=""/>
        <img src={TechCrunchImg.src} alt=""/>
        <img src={GuilfBuzzImg.src} alt=""/>
        <img src={EntrepeneurMiddleEeastImg.src} alt=""/>
        <img src={TheNationIMG.src} alt=""/>
      </div>
    </div>
  </section>
);
export default Worlds;
