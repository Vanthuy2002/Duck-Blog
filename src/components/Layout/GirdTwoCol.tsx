import React from 'react';
import HotPost from '../Block/HotPost';

const PostOutStanding: React.FC = () => {
  return (
    <div className='max-w-3xl px-5 grid gap-5 grid-cols-2 mx-auto max-sm:grid-cols-1'>
      <HotPost></HotPost>
      <HotPost></HotPost>
    </div>
  );
};

export default PostOutStanding;
