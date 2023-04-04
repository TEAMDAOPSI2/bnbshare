import logo from 'public/assets/shares-logo-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAirbnb, faFacebookSquare, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import BookingICO from 'public/assets/social/bookingcom-1.svg';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

// eslint-disable-next-line react/prop-types
const MenuList = ({ children }) => <div className="flex flex-col">{children}</div>;

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

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container pt-10 px-3 mx-auto">
        <div className="flex justify-between flex-row">
          <div className="flex flex-col">
            <img src={logo.src} alt="shares" className="w-28" />
            <p className="text-white">Office heart of Canggu, Bali</p>
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
            <ListLink href="/properties">{t('properties')}</ListLink>
            <ListLink href="/about">{t('about')}</ListLink>
            <ListLink href="/about">{t('about')}</ListLink>
          </MenuList>
          <MenuList>
            <h3 className="font-semibold py-3">{t('learn')}</h3>
            <ListLink href="/properties">{t('insight')}</ListLink>
            <ListLink href="/about">{t('faq')}</ListLink>
            <ListLink href="/about">{t('glossary')}</ListLink>
          </MenuList>
          <MenuList>
            <h3 className="font-semibold py-3">{t('connect_with_us')}</h3>
            <ListLink href="mailto:">contact@shares.villas</ListLink>
            <div className="flex flex-row gap-2">
              <LinkSocial href="https://www.facebook.com/shares.villas">
                <FontAwesomeIcon className="w-3" icon={faFacebookSquare} />
              </LinkSocial>
              <LinkSocial href="https://twitter.com/shares.villas">
                <FontAwesomeIcon className="w-3" icon={faTwitter} />
              </LinkSocial>
              <LinkSocial href="https://linkedin.com/shares.villas">
                <FontAwesomeIcon className="w-3" icon={faLinkedinIn} />
              </LinkSocial>
              <LinkSocial href="https://instagram.com/shares.villas">
                <FontAwesomeIcon className="w-3" icon={faInstagram} />
              </LinkSocial>
              <LinkSocial href="https://www.airbnb.com/users/show/shares.villas">
                <FontAwesomeIcon className="w-3" icon={faAirbnb} />
              </LinkSocial>
              <LinkSocial href="https://booking.com/shares.villas">
                <img src={BookingICO.src} alt="booking" className="w-3" />
              </LinkSocial>
            </div>
          </MenuList>
        </div>
        <div className="py-3 text-gray-400">{t('footer')}</div>
        <div className="py-6 border-t border-gray-500">
          <p className="text-sm text-gray-500">{t('footer_entry')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
