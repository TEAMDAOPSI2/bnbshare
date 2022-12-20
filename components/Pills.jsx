import { Disclosure, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Pills = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, children } = props;
  return (
    <div className="mb-3 rounded border">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex justify-between p-4 w-full hover:bg-gray-100 text-left transition ease-in duration-75 ${
                open ? 'bg-gray-200' : ''
              }`}
            >
              <h3 className="text-lg font-semibold">{title}</h3>
              <FontAwesomeIcon icon={open ? faMinus : faPlus} className="text-gray-400 w-4" />
            </Disclosure.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="text-gray-500 text-left p-4 transition ease-in duration-75">
                {children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Pills;
