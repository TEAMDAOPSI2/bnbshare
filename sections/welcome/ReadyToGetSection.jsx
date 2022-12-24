const ReadyToGetSection = () => (
  <section>
    <div className="container px-3 py-12 mx-auto">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col justify-center mb-3 order-last sm:order-first">
          <h2 className="md:text-[45px] text-3xl md:leading-[80px] md:w-[70%] font-semibold">Ready to get started?</h2>
          <p className="text-lg py-3">It only takes 3 minutes to download our app, sign up, and invest</p>
        </div>
        <div className="w-full flex sm:justify-end justify-center">
          <div className="flex items-center justify-end">
            <video className="sm:w-[350px] w-[80%] mx-auto h-[450px] rounded-[60px]" autoPlay loop muted>
              <source src="assets/home/hero.mov" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ReadyToGetSection;
