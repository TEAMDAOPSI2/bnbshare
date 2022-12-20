import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const DropDown = (props) => {
  // eslint-disable-next-line react/destructuring-assignment,react/prop-types
  const { title, links } = props.props;
  return (
    <div className="p-3 text-black">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              className={`flex flex-row gap-2 items-center  w-full sm:w-fit justify-between sm:justify-center text-white sm:text-black hover:text-primary ${
                open ? 'text-primary' : null
              }`}
            >
              {title} <FontAwesomeIcon className="w-4" icon={open ? faAngleUp : faAngleDown} />
            </Menu.Button>
            <Menu.Items className="dropdown-items">
              <div className="p-1 flex flex-col">
                {/* eslint-disable-next-line react/prop-types */}
                {links.map((item) => (
                  <Menu.Item>
                      <Link
                        className={`flex flex-row gap-2 items-center justify-start w-full rounded-md p-2`}
                        href={item.href}
                      >
                        <span className="text-primary w-5">{item.icon}</span>
                        <span className="text-gray-400 ml-2 hover:text-primary">{item.name}</span>
                      </Link>
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

export default DropDown;
