import PlaceHolderLeftImg from 'public/assets/sell-with-stake/ready-to-sell-left-placeholder.png';
import PlaceHolderBotImg from 'public/assets/sell-with-stake/ready-to-sell-bottom-placeholder.png';
import PlaceHolderRightImg from 'public/assets/sell-with-stake/ready-to-sell-right-placeholder.png';

const ReadyToSellBannerSection = () => (
  <section className="py-16">
    <div className="p-3 max-w-[1240px] m-5 sm:mx-auto bg-gray-800 rounded-md relative overflow-hidden">
      <div className="flex items-center justify-center flex-col text-white min-h-[350px]">
        <h2 className="text-3xl font-bold text-white mb-3">Ready to sell your property?</h2>
        <p className="text-lg text-white mb-3">We can help you sell your property in 30 days or less.</p>
        <button className="py-2 px-3 mt-3 rounded-md bg-primary hover:bg-primary-hover w-fit">Sell with Shares</button>
      </div>
      <div className="absolute -top-[20px] left-[120px] rounded w-[180px] h-[80px] bg-yellow-400 content-none" />
      <div className="absolute -bottom-[20px] right-[120px] rounded w-[180px] h-[80px] bg-gray-400 content-none" />

      <div className="hidden sm:flex absolute -left-[40px] top-[120px]">
        <img src={PlaceHolderLeftImg.src} alt="" className="rounded"/>
      </div>
      <div className="hidden sm:flex absolute bottom-0 left-1/3">
        <img src={PlaceHolderBotImg.src} alt="" className=""/>
      </div>
      <div className="hidden sm:flex absolute -right-1 top-1/4">
        <img src={PlaceHolderRightImg.src} alt="" className="rounded"/>
      </div>
    </div>
  </section>
);

export default ReadyToSellBannerSection;
