import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuDataProps } from '../../../utils/contants';
import { Button, toast } from '..';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/config';

const subMenus: MenuDataProps = [
  { title: 'Profile', to: '/profile' },
  { title: 'Dashboard', to: '/dashboard' },
];

const Avatar: React.FC = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => {
    setShow(!show);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success('Logout successfully!!');
      navigate('/login');
    } catch (error) {
      toast.error('Can not logout, try agian');
    }
  };

  return (
    <div className='relative'>
      <button
        type='button'
        className='flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300'
        onClick={handleShow}
      >
        <img
          className='w-10 h-10 rounded-full'
          src='/doraemon.jpg'
          alt='user photo'
        />
      </button>

      {/* Show submenu */}
      {show && (
        <div className='z-10 absolute top-full -translate-x-1/2 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-md shadow'>
          <div className='px-4 py-3'>
            <span className='block text-sm text-gray-900'>Thuy Nguyen</span>
            <span className='block text-sm text-gray-500 truncate'>
              name@flowbite.com
            </span>
          </div>
          <ul className='pt-2' aria-labelledby='user-menu-button'>
            {subMenus &&
              subMenus.map((menu) => (
                <li key={menu.title}>
                  <Link
                    to={menu.to}
                    className='block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100'
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            <Button
              onClick={handleSignOut}
              className='bg-red-400 !py-2'
              type='button'
            >
              Logout
            </Button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Avatar;
