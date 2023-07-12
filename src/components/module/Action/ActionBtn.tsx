import React from 'react';
import { Link } from 'react-router-dom';

const ActionBtn: React.FC = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default ActionBtn;
