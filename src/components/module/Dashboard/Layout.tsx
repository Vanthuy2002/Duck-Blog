import React, { useRef, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Logo, Avatar, Sidebar } from '..';
import { useOnClickOutside } from '../../../Hooks/useClick';

const LayoutDashboard: React.FC = () => {
  const ref = useRef(null);

  const [show, setShow] = useState<boolean>(true);
  const handleShowSidebar = () => {
    setShow(false);
  };

  const handleClickOut = () => {
    setShow(true);
  };

  useOnClickOutside(ref, handleClickOut);

  return (
    <React.Fragment>
      <nav className='fixed top-0 z-20 w-full bg-white border-b border-gray-200'>
        <section className='px-3 py-4 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <button
              ref={ref}
              onClick={handleShowSidebar}
              className='inline-flex bg-gray-200 items-center p-2 text-sm rounded-lg xl:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200'
            >
              <Bars3Icon className='w-6 h-6 text-black' />
            </button>
            <Logo title='Duck Blog' />
            <Avatar />
          </div>
        </section>
      </nav>

      {/* sidebar */}
      <Sidebar isShow={show} ref={ref} />
    </React.Fragment>
  );
};

export default LayoutDashboard;
