import Link from 'next/link';
import logo from 'public/assets/shares-logo.svg';
import logoWhite from 'public/assets/shares-logo-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStoreAlt, faChartLine, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import DropDown from '@/components/navbar/DropDown';
import AnchorLink from '@/components/navbar/AnchorLink';
import { useEffect, useState } from 'react';
import enFlag from 'public/assets/us-flag.png';
import esFlag from 'public/assets/spain-flag.png';
import DropDownLanguages from '@/components/navbar/Languages';
import { useTranslation } from 'next-i18next';

// add token to wallet metamask
const addToWallet = async () => {
  const team = {
    address: '0x9BADA086BAE4962037f14B0e79BaEa62e972dD21',
    decimals: 8,
    image: 'https://raw.githubusercontent.com/Team-Exchange/icons/master/TE_SMALL.png',
    chainSymbol: 0x1,
  };
  // eslint-disable-next-line no-undef
  await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: team.address, // The address that the token is at.
        symbol: 'TEAM', // A ticker symbol or shorthand, up to 5 chars.
        decimals: team.decimals, // The number of decimals in the token
        image: team.image, // A string url of the token logo
      },
    },
  });
};

// eslint-disable-next-line react/prop-types
const Navbar = ({ pathName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const { t } = useTranslation();

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const connectWallet = async () => {
    try {
      // eslint-disable-next-line no-undef
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      setCurrentAccount(account);
    } catch (err) {
      throw new Error(err);
    }
  };

  const ifWalletConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log('No ethereum found');
      } else {
        console.log('Ethereum found', ethereum);
      }
      // check if authorized using wallet connect
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        setCurrentAccount(account);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    ifWalletConnected();
  }, []);

  const sellNav = {
    title: t('sell'),
    links: [
      { name: t('sell_with_shares'), href: '/sell-with-shares', icon: <FontAwesomeIcon icon={faHome} /> },
      {
        name: t('sell_transfer_facility'),
        href: '/shares-secondary-transfer-facility',
        icon: <FontAwesomeIcon icon={faStoreAlt} />,
      },
    ],
  };

  const LearnNav = {
    title: t('learn'),
    links: [{ name: t('insight'), href: '#', icon: <FontAwesomeIcon icon={faChartLine} /> }],
  };

  const LanguageNav = {
    title: 'Language',
    links: [
      { name: 'English', code: 'en', icon: null, img: enFlag },
      { name: 'Español', code: 'es', icon: null, img: esFlag },
    ],
  };

  return (
    <>
      <div
        className={`bg-white shadow w-full ease-in duration-300 ${
          scrolled ? 'fixed top-0 z-50 bg-white-transparent' : null
        }`}
      >
        <div className="max-w-[1240px] m-auto flex items-center p-3 justify-between relative">
          <div className="flex flex-row">
            <Link href="/" className="flex items-center justify-center">
              <img className="h-10" src={logo.src} alt="" />
            </Link>
            <div style={{ color: '#fff' }} className="hidden ml-3 sm:flex relative">
              <AnchorLink
                href="/properties"
                className={pathName === '/properties' ? 'text-primary border-b-2 border-primary-hover' : null}
              >
                {t('properties')}
              </AnchorLink>
              <AnchorLink
                href="/about"
                className={pathName === '/about' ? 'text-primary border-b-2 border-primary-hover' : null}
              >
                {t('about')}
              </AnchorLink>
              <AnchorLink href="https://etherscan.io/address/0x5308d43a01230874d98dceabde720af303a27c2c">
                sharesvillas.eth
              </AnchorLink>
              <DropDown props={sellNav} />
              <DropDown props={LearnNav} />
            </div>
          </div>
          <div>
            <ul className="ml-3 flex flex-row items-center">
              {/* <li className="p-3 hidden sm:block">
                <Link
                  href="/"
                  className="p-3 rounded-md border font-semibold hover:text-white hover:bg-primary-hover hover:border-primary-hover"
                >
                  Login
                </Link>
              </li> */}
              <li className="p-3 hidden sm:block">
                <button
                  onClick={() => addToWallet()}
                  className="p-3 rounded-md border font-semibold hover:text-white hover:bg-primary-hover hover:border-primary-hover"
                >
                  <span>{t('add_nft')} </span> <span>{t('to_metamask')}</span>
                </button>
              </li>
              <li className="p-3">
                <button
                  onClick={connectWallet}
                  className="p-3 bg-primary text-white rounded-md font-semibold hover:bg-primary-hover"
                >
                  {currentAccount ? `${currentAccount.slice(0, 6)}...${currentAccount.slice(-4)}` : t('connect_wallet')}
                </button>
              </li>

              <li className="burger flex sm:hidden py-3 px-6 border border-gray-200 rounded">
                <button className="w-4 flex items-center" onClick={() => setIsOpen(true)}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </li>
              <DropDownLanguages props={LanguageNav} />
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed z-[99999] bg-gray-800 w-[100%] h-[100vh] left-0 top-0 text-white transition ease-in duration-75">
          <div className="flex w-full h-full flex-col justify-between">
            <div className="flex justify-between w-full flex-col">
              <div className="flex flex-row items-center justify-between w-full p-3 border-b border-gray-600">
                <Link href="/" className="flex items-center justify-center">
                  <img className="h-10" src={logoWhite.src} alt="" />
                </Link>
                <div className="py-3 px-5">
                  <button className="w-3 flex items-center" onClick={() => setIsOpen(false)}>
                    <FontAwesomeIcon icon={faClose} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col p-3 w-full">
                <AnchorLink
                  href="/properties"
                  className={pathName === '/properties' ? 'text-primary border-b-2 border-primary-hover' : null}
                >
                  {t('properties')}
                </AnchorLink>
                <AnchorLink
                  href="/about"
                  className={pathName === '/about' ? 'text-primary border-b-2 border-primary-hover' : null}
                >
                    {t('about')}
                </AnchorLink>
                <DropDown props={sellNav} />
                <DropDown props={LearnNav} />
              </div>
            </div>
            <ul className="flex flex-col border-t border-gray-600 p-3 justify-self-end">
              <li className="p-3">
                <Link
                  href="/"
                  className="p-3 flex w-full justify-center rounded-md border font-semibold hover:text-white hover:bg-primary-hover hover:border-primary-hover"
                >
                  {t('login')}
                </Link>
              </li>
              <li className="p-3">
                <Link
                  href="/"
                  className="p-3 flex justify-center text-center bg-primary text-white rounded-md font-semibold hover:bg-primary-hover"
                >
                  {t('get_started')}
                </Link>
              </li>
              <div className="flex flex-col border-t border-gray-600 p-3 justify-self-end">
                <DropDownLanguages props={LanguageNav} />
              </div>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
