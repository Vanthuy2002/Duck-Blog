import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuDataProps } from '../../utils/contants';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const menus: MenuDataProps = [
  { title: 'Home', to: '/' },
  { title: 'Blog', to: '/blog' },
  { title: 'Dashboard', to: '/dashboard' },
];

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleShowMenu = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap items-center justify-between max-w-screen-xl mx-auto'>
          <Link to='/' className='flex items-center gap-3'>
            <img src='/duck.png' className='h-8 sm:h-9' alt='Duck Logo' />
            <span className='self-center text-xl font-semibold whitespace-nowrap'>
              Duck Blog
            </span>
          </Link>

          <div className='flex items-center gap-3 lg:order-2'>
            <Link
              to='/login'
              className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5'
            >
              Log in
            </Link>
            <Link
              to='/register'
              className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 '
            >
              Get started
            </Link>
            <button
              type='button'
              className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
              onClick={handleShowMenu}
            >
              {showMenu ? (
                <XMarkIcon className='w-6 h-6 text-black' />
              ) : (
                <Bars3Icon className='w-6 h-6 text-black' />
              )}
            </button>
          </div>
          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              showMenu ? '' : 'hidden'
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
