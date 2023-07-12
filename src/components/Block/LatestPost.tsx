import React from 'react';

const LatestPost: React.FC = () => {
  return (
    <div className='max-md:mx-auto max-w-[300px] lg:mt-10 bg-white rounded-lg shadow-md'>
      <a href='#'>
        <img
          className='rounded-t-lg object-cover h-[180px] w-full'
          src='https://placehold.co/600x400?text=Some%20Text'
          alt=''
        />
      </a>
      <div className='p-5'>
        <span className='py-2 font-bold text-gray-500'>Customer Story</span>
        <a href='#'>
          <h5 className='my-2 text-lg font-bold tracking-tight text-gray-900'>
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
      </div>
    </div>
  );
};

export default LatestPost;
