import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useOnClickOutside } from '../../../Hooks/useClick';

const ActionDrop: React.FC = () => {
  const [showActions, setShowActions] = useState<boolean>(false);
  const ref = useRef(null);
  const handleActions = (): void => {
    setShowActions(!showActions);
  };

  const handleClose = () => {
    setShowActions(false);
  };

  useOnClickOutside(ref, handleClose);

  return (
    <>
      <button
        ref={ref}
        className='inline-flex items-center p-0.5 rounded-lg focus:ring-4'
        type='button'
        onClick={handleActions}
      >
        <EllipsisHorizontalIcon className='h-6 w-6 text-black' />
      </button>

      {showActions && (
        <div
          ref={ref}
          className='z-20 w-44 bg-white rounded divide-y divide-gray-100 shadow absolute top-[50px]'
        >
          <ul className='py-1 text-md text-gray-700 dark:text-gray-200'>
            <li>
              <Link
                to='/manage/action'
                className='block py-2 px-4 hover:bg-gray-100'
              >
                Show
              </Link>
            </li>
            <li>
              <Link
                to='/manage/action'
                className='block py-2 px-4 hover:bg-gray-100'
              >
                Update
              </Link>
            </li>
            <li>
              <Link
                to='/manage/action'
                className='block py-2 px-4 hover:bg-gray-100'
              >
                Actions
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ActionDrop;
