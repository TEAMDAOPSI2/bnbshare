import Link from 'next/link';
import logo from 'public/assets/share-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStoreAlt, faChartLine, faBars } from '@fortawesome/free-solid-svg-icons';
import DropDown from '@/components/navbar/DropDown';
import AnchorLink from '@/components/navbar/AnchorLink';

// eslint-disable-next-line react/prop-types
const Navbar = ({ pathName }) => {
  const sellNav = {
    title: 'Sell',
    links: [
      { name: 'Sell with Stake', href: '/sell', icon: <FontAwesomeIcon icon={faHome} /> },
      { name: 'Sell transfer Facility', href: '/sell', icon: <FontAwesomeIcon icon={faStoreAlt} /> },
    ],
  };

  const LearnNav = {
    title: 'Learn',
    links: [{ name: 'Insight', href: '#', icon: <FontAwesomeIcon icon={faChartLine} /> }],
  };

  return (
    <div style={{ backgroundColor: '#fff' }} className="shadow w-full ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex items-center p-3 justify-between">
        <div className="flex flex-row">
          <Link href="/" className="flex items-center justify-center">
            <img className="h-10" src={logo.src} alt="" />
          </Link>
          <div style={{ color: '#fff' }} className="hidden ml-3 sm:flex relative">
            <AnchorLink
              href="/properties"
              className={pathName === '/properties' ? 'text-primary border-b-2 border-primary-hover' : null}
            >
              Properties
            </AnchorLink>
            <AnchorLink
              href="/about"
              className={pathName === '/about' ? 'text-primary border-b-2 border-primary-hover' : null}
            >
              About
            </AnchorLink>
            <DropDown props={sellNav} />
            <DropDown props={LearnNav} />
          </div>
        </div>
        <div>
          <ul className="ml-3 flex flex-row">
            <li className="p-3 hidden sm:block">
              <Link
                href="/"
                className="p-3 rounded-md border font-semibold hover:text-white hover:bg-primary-hover hover:border-primary-hover"
              >
                Login
              </Link>
            </li>
            <li className="p-3">
              <Link href="/" className="p-3 bg-primary text-white rounded-md font-semibold hover:bg-primary-hover">
                Get Started
              </Link>
            </li>
            <li className="burger flex sm:hidden py-3 px-6 border border-gray-200 rounded">
              <FontAwesomeIcon className="w-4" icon={faBars} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
