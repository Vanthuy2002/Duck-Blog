import React from 'react';
import { useParams } from 'react-router-dom';

const Profile: React.FC = () => {
  const { name } = useParams();

  return (
    <article className='flex items-center justify-center min-h-screen'>
      <section className='max-w-sm py-3 bg-white border border-gray-200 rounded-lg shadow flex-1'>
        <div className='flex flex-col items-center'>
          <img
            className='w-24 h-24 mb-3 rounded-full shadow-lg'
            src='/doraemon.jpg'
            alt={name}
          />
          <h5 className='mb-1 text-xl font-medium text-gray-900'>Emi Fukuda</h5>
          <span className='text-sm text-gray-500'>Visual Designer</span>
          <div className='flex mt-4 space-x-3 md:mt-6'>
            <a
              href='#'
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
            >
              Add friend
            </a>
            <a
              href='#'
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200'
            >
              Message
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Profile;
