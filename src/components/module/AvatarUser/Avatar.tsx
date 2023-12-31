import React, { useContext, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, toast } from '..';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import { AuthContext } from 'src/components/context/AuthContext';
import { MenuDataProps } from 'src/utils/contants';
import { useOnClickOutside } from 'src/Hooks/useClick';
import { auth } from 'src/firebase/config';

const Avatar: React.FC = () => {
  const { accounts } = useContext(AuthContext);

  const subMenus: MenuDataProps = useMemo(() => {
    return [
      { title: 'Profile', to: `/me/${accounts?.displayName}` },
      { title: 'Dashboard', to: '/dashboard' },
    ];
  }, [accounts?.displayName]);

  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const [hide, setHide] = useState<boolean>(false);

  const handleShow = () => {
    setHide(!hide);
  };

  const handleClickOut = () => {
    setHide(false);
  };

  useOnClickOutside(nodeRef, handleClickOut);

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
        <div
          className='z-10 absolute top-full my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-md shadow -translate-x-3/4'
          ref={nodeRef}
        >
          <div className='px-4 py-3'>
            <span className='block text-md text-gray-900'>
              {accounts?.displayName || 'Your username'}
            </span>
            <span className='block text-md text-gray-500 truncate'>
              {accounts?.email || 'example@gmail.com'}
            </span>
          </div>
          <ul className='pt-2'>
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
          </ul>
          <div className='max-w-[180px] mx-auto mt-3 my-2'>
            <Button
              onClick={handleSignOut}
              className='bg-red-400'
              type='button'
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
