import logo from 'public/assets/share-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

// eslint-disable-next-line react/prop-types
const MenuList = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};

const ListLink = (props) => {
  // eslint-disable-next-line react/prop-types
  const { href, children } = props;
  return (
    <Link className="py-2 text-gray-300 hover:border-primary border-b-2 border-transparent w-fit" href={href}>
      {children}
    </Link>
  );
};

const LinkSocial = (props) => {
  // eslint-disable-next-line react/prop-types
  const { href, children } = props;
  return (
    <Link
      href={href}
      className="flex items-center justify-center h-[30px] w-[30px] bg-gray-400 hover:bg-primary-hover transition ease-in-out duration-150 rounded-full"
    >
      {children}
    </Link>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container pt-10 px-3 mx-auto">
      <div className="flex justify-between flex-row">
        <div className="flex flex-col">
          <img src={logo.src} alt="BNBShares" className="w-28" />
          <p className="text-white">Office 170, Level 1, Gate Avenue, DIFC, Dubai</p>
        </div>
        <div>
          <button
            className="py-3 px-4 rounded-lg bg-gray-600 hover:bg-primary-hover"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <FontAwesomeIcon className="w-4" icon={faAngleUp} />
          </button>
        </div>
      </div>
      <div className="grid py-5 md:grid-cols-3 md:w-[60%]">
        <MenuList>
          <h3 className="font-semibold py-3">Shares</h3>
          <ListLink href="/properties">Properties</ListLink>
          <ListLink href="/about">About</ListLink>
          <ListLink href="/about">Sell with shares</ListLink>
        </MenuList>
        <MenuList>
          <h3 className="font-semibold py-3">Learn</h3>
          <ListLink href="/properties">Insight</ListLink>
          <ListLink href="/about">FAQs</ListLink>
          <ListLink href="/about">Glossary</ListLink>
        </MenuList>
        <MenuList>
          <h3 className="font-semibold py-3">Connect with us</h3>
          <ListLink href="mailto:">contact@shares.villas</ListLink>
          <div className="flex flex-row gap-2">
            <LinkSocial href="https://www.facebook.com/">
              <FontAwesomeIcon className="w-3" icon={faFacebookSquare} />
            </LinkSocial>
            <LinkSocial href="https://twitter.com/">
              <FontAwesomeIcon className="w-3" icon={faTwitter} />
            </LinkSocial>
            <LinkSocial href="https://twitter.com/">
              <FontAwesomeIcon className="w-3" icon={faLinkedinIn} />
            </LinkSocial>
            <LinkSocial href="https://twitter.com/">
              <FontAwesomeIcon className="w-3" icon={faInstagram} />
            </LinkSocial>
          </div>
        </MenuList>
      </div>
      <div className="py-3 text-gray-400">© 2022 Shares. All rights reserved</div>
      <div className="py-6 border-t border-gray-500">
        <p className="text-sm text-gray-500">
          Shares Properties Limited is regulated by the Dubai Financial Services Authority (DFSA) as an Operator of a
          Property Investment Crowdfunding Platform. Shares platform consists of the website (shares ) and may include
          mobile apps in the future. By using shares, you agree to be bound by the Terms & Conditions, Cookie Notice and
          Privacy Policy. All investments through shares carry risk and are not guaranteed. Please read Key Risks before
          investing. shares Properties Limited does not have Islamic Finance endorsement from the DFSA.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
