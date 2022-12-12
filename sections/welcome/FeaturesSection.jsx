import FeaturesImg1 from 'public/assets/home/modernway/1.svg';
import FeaturesImg2 from 'public/assets/home/modernway/2.svg';
import FeaturesImg3 from 'public/assets/home/modernway/3.svg';
import FeaturesImg4 from 'public/assets/home/modernway/4.svg';
import ReactWOW from 'react-wow';
import Featured from '@/components/welcome/Featured';

const FeaturesSection = () => (
  <section>
    <div className="container px-3 py-8 mx-auto">
      <div className="text-center w-full">
        <ReactWOW animation="slideInUp" duration="1s">
          <h2 className="text-4xl font-bold max-w-[50%] mx-auto py-3">
            The modern way for anyone to invest in real estate
          </h2>
        </ReactWOW>
        <ReactWOW animation="slideInUp" duration="1s">
          <p className="mt-4  font-medium text-gray-500 lg:max-w-[60%] mx-auto">
            90% of the worlds millionaires made their fortunes through real estate, but it’s highly inaccessible,
            illiquid, and complicated - that’s where we come in!
          </p>
        </ReactWOW>
      </div>
      <div className="grid gap-7 md:grid-cols-4 mt-6">
        <ReactWOW animation="slideInUp" duration="1.3s">
          <Featured
            img={FeaturesImg1.src}
            title="Invest in real estate from only AED 500"
            desc="With fractionalised properties there is no mortgage or large down payments required"
          />
        </ReactWOW>
        <ReactWOW animation="slideInDown" duration="1.5s">
          <Featured
            img={FeaturesImg2.src}
            title="Digital and diversified real estate investing"
            desc="Buy shares in prime rental properties and manage your diversified portfolio online through our mobile app and web platform"
          />
        </ReactWOW>
        <ReactWOW animation="slideInUp" duration="1.8s">
          <Featured
            img={FeaturesImg3.src}
            title="Hassle-free ownership"
            desc="We handle the entire sales process, screen tenants and manage the property, saving you time and money!"
          />
        </ReactWOW>
        <ReactWOW animation="slideInDown" duration="2s">
          <Featured
            img={FeaturesImg4.src}
            title="Trusted entity with real estate expertise"
            desc="Stake is regulated by the DFSA and our team has held leadership positions at the biggest developers in Dubai for over 20 years"
          />
        </ReactWOW>
      </div>
    </div>
  </section>
);

export default FeaturesSection;