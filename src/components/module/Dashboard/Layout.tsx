import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Logo, Avatar, Sidebar } from '..';

const LayoutDashboard: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleShowSidebar = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <nav className='fixed top-0 z-20 w-full bg-white border-b border-gray-200'>
        <section className='px-3 py-4 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <button
              onClick={handleShowSidebar}
              type='button'
              className='inline-flex bg-gray-200 items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200'
            >
              <Bars3Icon className='w-6 h-6 text-black' />
            </button>

            <Logo title='Duck Blog' />

            <Avatar />
          </div>
        </section>
      </nav>

      {/* sidebar */}
      <Sidebar isShow={show} />
    </React.Fragment>
  );
};

export default LayoutDashboard;
