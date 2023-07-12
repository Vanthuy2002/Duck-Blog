import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='max-w-screen-xl mx-auto rounded-lg my-4'>
      <div className='w-full p-4'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <Link to='/' className='hover:underline text-purple-500'>
            Duck Blogger
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
