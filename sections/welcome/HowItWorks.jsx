import HowItWorksImg1 from 'public/assets/home/howitworks/1.svg';
import IphoneBorderImg from 'public/assets/common/iphone-13-pro-frame.png';
import HowItWorksIcon1 from 'public/assets/home/howitworks/1.icon.svg';
const HowItWorks = () => {
    return (
        <section className="how-it-works">
            <div className="container py-6 px-3 mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-4xl py-3 font-semibold">How it works</h2>
                    <p className="font-medium">BNBshares is available to savvy investors all over the world</p>
                </div>
                <div className="grid gap-4 grid-cols-4 selector mb-6">
                    <div className="py-3 cursor-pointer active">
                        <div className="w-[40px] rounded-md h-1 bg-emerald-500"/>
                        <h4>Browse</h4>
                        <p>
                            Sign up in less than 3 minutes and browse our collection of properties
                        </p>
                    </div>
                    <div className="py-3 cursor-pointer">
                        {/*<div className="w-[40px] rounded-md h-1 bg-emerald-500" />*/}
                        <h4>Purchase</h4>
                        <p>
                            Buy a piece of the ones you love, starting from only AED 500
                        </p>
                    </div>
                    <div className="py-3 cursor-pointer">
                        {/*<div className="w-[40px] rounded-md h-1 bg-emerald-500" />*/}
                        <h4>Own</h4>
                        <p>
                            Sit back and track your income and investments online
                        </p>
                    </div>
                    <div className="py-3 cursor-pointer">
                        {/*<div className="w-[40px] rounded-md h-1 bg-emerald-500" />*/}
                        <h4>Exit</h4>
                        <p>
                            Hold, exit or resell your stake in a way that suits your financial goals
                        </p>
                    </div>
                </div>
            </div>
            <div className="scroll bg-[#121C30] mt-12 h-[450px] w-from flex items-center justify-center">
                <div className="w-full h-full">
                    <div className="desc">
                        <div className="w-[40px] rounded-md h-1 bg-emerald-500" />
                        Our team of property professionals combine a data driven valuation and analysis process with
                        over 20 years of leadership experience at the top real estate companies in Dubai, to source the
                        best rental properties with the highest investment potential for you.
                    </div>
                    <div className="phone w-full relative">
                        <div className="absolute z-1 w-[450px]">
                            <img className="w-[380px] rounded-[60px]" src={HowItWorksImg1.src} alt="Banner Phone"/>
                            <picture className="absolute top-0">
                                <img alt="how it works" className="w-[382px]" src={IphoneBorderImg.src}/>
                            </picture>
                        </div>
                    </div>
                    <div className="ico">
                        <img src={HowItWorksIcon1.src} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;