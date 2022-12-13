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
            <Menu.Button className={`flex flex-row gap-2 items-center justify-center hover:text-emerald-500 ${open ? 'text-emerald-500' : null}`}>
              {title} <FontAwesomeIcon className="w-4" icon={open ? faAngleUp : faAngleDown} />
            </Menu.Button>
            <Menu.Items className="focus:outline-none absolute top-[60px] z-10 origin-top-left  w-56  divide-y divide-gray-100 rounded-md bg-white shadow-lg border border-gray-200">
              <div className="p-1 flex flex-col">
                {/* eslint-disable-next-line react/prop-types */}
                {links.map((item) => (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        className={`flex flex-row gap-2 items-center justify-start ${active && 'bg-gray-100'} w-full rounded-md p-2`}
                        href="/account-settings"
                      >
                        <span className="text-emerald-500 w-5">{item.icon}</span>
                        <span className="text-gray-400 ml-2 hover:text-emerald-500">{item.name}</span>
                      </Link>
                    )}
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
