import Link from 'next/link';
import logo from 'public/assets/stake-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStoreAlt, faChartLine, faBars } from '@fortawesome/free-solid-svg-icons';
import DropDown from '@/components/navbar/DropDown';
import AnchorLink from '@/components/navbar/AnchorLink';

const Navbar = () => {
  const sellNav = {
    title: 'Sell',
    links: [
      { name: 'Sell with Stake', href: '/sell', icon: <FontAwesomeIcon icon={faHome} /> },
      { name: 'Sell transfer Facility', href: '/sell', icon: <FontAwesomeIcon icon={faStoreAlt} /> },
    ],
  };

  const LearnNav = {
    title: 'Learn',
    links: [
      { name: 'Insight', href: '#', icon: <FontAwesomeIcon icon={faChartLine} /> },
    ],
  };

  return (
    <div style={{ backgroundColor: '#fff' }} className="shadow w-full ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex items-center p-3 justify-between">
        <div className="flex flex-row">
          <Link href="/">
            <img src={logo.src} alt="" />
          </Link>
          <div style={{ color: '#fff' }} className="hidden ml-3 sm:flex relative">
            <AnchorLink href="/stake">Properties</AnchorLink>
            <AnchorLink href="/about">About</AnchorLink>
            <DropDown props={sellNav} />
            <DropDown props={LearnNav} />
          </div>
        </div>
        <div>
          <ul className="ml-3 flex flex-row">
            <li className="p-3 hidden sm:block">
              <Link
                href="/"
                className="p-3 rounded-md border font-semibold hover:bg-emerald-400 hover:border-emerald-400"
              >
                Login
              </Link>
            </li>
            <li className="p-3">
              <Link href="/" className="p-3 bg-emerald-300 rounded-md font-semibold hover:bg-emerald-400">
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
