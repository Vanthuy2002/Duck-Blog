import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuDataProps } from '../../../utils/contants';
import { Button, toast } from '..';
import { User, signOut } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { useClickOutSide } from '../../../Hooks/useClickOutSide';
import Swal from 'sweetalert2';

const subMenus: MenuDataProps = [
  { title: 'Profile', to: '/profile' },
  { title: 'Dashboard', to: '/dashboard' },
];

type AuthenProps = {
  user: User;
};

const Avatar: React.FC<AuthenProps> = ({ user }) => {
  const { nodeRef, hide, setHide } = useClickOutSide();
  const navigate = useNavigate();
  const handleShow = () => {
    setHide(!hide);
  };

  const handleSignOut = async () => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: 'We will miss you bro!!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await signOut(auth);
          navigate('/login');
          Swal.fire('Success!', 'Logout successfully.', 'success');
        }
      });
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
        ref={nodeRef}
      >
        <img
          className='w-12 h-12 rounded-full'
          src='/doraemon.jpg'
          alt='avatar'
        />
      </button>

      {/* Show submenu */}
      {hide && (
        <div className='z-10 absolute top-full -translate-x-1/2 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-md shadow'>
          <div className='px-4 py-3'>
            <span className='block text-md text-gray-900'>
              {user.displayName}
            </span>
            <span className='block text-md text-gray-500 truncate'>
              {user.email}
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
