import { Menu } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const DropDownLanguages = (props) => {
  // eslint-disable-next-line react/destructuring-assignment,react/prop-types
  const { links } = props.props;
  const router = useRouter();

  return (
    <div className="p-3 text-black">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              className={`flex font-bold flex-row gap-2 items-center  w-full sm:w-fit justify-between sm:justify-center text-white sm:text-black hover:text-primary ${
                open ? 'text-primary' : null
              }`}
            >
              {router.locale.toUpperCase()}
              <FontAwesomeIcon className="w-4" icon={open ? faAngleUp : faAngleDown} />
            </Menu.Button>
            <Menu.Items className="dropdown-items !w-[80px]">
              <div className="p-1 flex flex-col">
                {/* eslint-disable-next-line react/prop-types */}
                {links.map((item) => (
                  <Menu.Item>
                    <button
                      onClick={() => {
                        // change language
                        // eslint-disable-next-line no-undef
                        router.push(router.pathname, router.pathname, { locale: item?.code });
                      }}
                      className="flex flex-row gap-2 items-center justify-start w-full rounded-md p-2"
                    >
                      <img className="w-[40px]" src={item?.img.src} alt="" />
                    </button>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
};

export default DropDownLanguages;
