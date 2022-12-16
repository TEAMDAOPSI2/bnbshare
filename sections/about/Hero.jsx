import DividerIMG from 'public/assets/sell-with-stake/divider.svg';
import TeamImg from 'public/assets/about/team-1x.jpg';

const Hero = () => (
  <section className="relative w-full">
    <div className="container py-6 px-3 mx-auto">
      <div className="flex flex-col items-center justify-center text-center min-h-[45vh]">
        <p className="text-primary text-2xl font-bold py-6">About us</p>
        <h2 className="text-4xl font-bold md:w-10/12">
          We’re on a mission to empower everyone to own and build wealth through Real Estate.
        </h2>
      </div>
    </div>
    <img className="w-full" src={DividerIMG.src} alt="" />
    <img className="w-full" src={TeamImg.src} alt="" />
  </section>
);

export default Hero;
