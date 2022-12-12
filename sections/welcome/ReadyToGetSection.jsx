import AppStore from '../../public/assets/app-store.svg';
import GooglePlay from '../../public/assets/play-store.svg';
import HomeMockupImg from "../../public/assets/home/app-mockup.svg";
import IphoneBorderImg from "../../public/assets/common/iphone-13-pro-frame.png";

const ReadyToGetSection = () => (
  <section>
    <div className="container px-3 pb-12 mx-auto">
      <div className="grid gap-4 grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="md:text-[60px] md:leading-[80px] md:w-[70%] font-semibold">Ready to get started?</h2>
          <p className="text-lg py-3">It only takes 3 minutes to download our app, sign up, and invest</p>
          <div className="flex flex-row gap-3">
            <a href="#">
              <img src={AppStore.src} alt="app store" />
            </a>
            <a href="#">
              <img src={GooglePlay.src} alt="google play" />
            </a>
          </div>
        </div>
       <div className="w-full flex justify-end">
         <div className="relative flex inset-0 w-[300px] h-[700px]">
           <div className="absolute z-20 w-[300px] right-1">
             <img className="h-[650px] w-full rounded-[60px]" src={HomeMockupImg.src} alt="Banner Phone" />
             <picture className="absolute top-0">
               <img className="h-[650px] w-full" src={IphoneBorderImg.src} alt="Iphone Border" />
             </picture>
           </div>
         </div>
       </div>
      </div>
    </div>
  </section>
);

export default ReadyToGetSection;
