import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MenuDataProps } from 'src/utils/contants';
import { AuthContext } from '../context/AuthContext';
import { ActionBtn, Avatar, Logo } from '../module';

const menus: MenuDataProps = [
  { title: 'Home', to: '/' },
  { title: 'Blog', to: '/blog' },
  { title: 'Dashboard', to: '/dashboard' },
];

const Navbar: React.FC = () => {
  const { accounts } = useContext(AuthContext);
  const [show, setShow] = useState<boolean>(false);
  const handleShowMenu = () => {
    setShow(!show);
  };

  return (
    <header className='fixed left-0 right-0 top-0 z-20'>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-4 shadow-md'>
        <div className='flex flex-wrap items-center justify-between max-w-screen-xl mx-auto'>
          <Logo title='Duck Blog' />

          <div className='flex items-center gap-3 lg:order-2'>
            {accounts?.email ? <Avatar /> : <ActionBtn />}

            <button
              type='button'
              className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
              onClick={handleShowMenu}
            >
              {show ? (
                <XMarkIcon className='w-6 h-6 text-black' />
              ) : (
                <Bars3Icon className='w-6 h-6 text-black' />
              )}
            </button>
          </div>

          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              show ? '' : 'hidden'
            }`}
          >
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              {menus &&
                menus.map((menu) => (
                  <li key={menu.title}>
                    <NavLink
                      to={menu.to}
                      className='block px-4 py-2 text-black rounded hover:opacity-80'
                    >
                      {menu.title}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
