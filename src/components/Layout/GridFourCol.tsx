import React from 'react';
import LatestPost from '../Block/LatestPost';
import { Title } from '../module';

const PostLasted: React.FC = () => {
  return (
    <section className='max-w-screen-xl mx-auto mt-20 mb-5'>
      <Title className='!text-3xl max-lg:mb-5 max-md:text-center px-5'>
        Latest <span className='text-green-400 '>Customer</span>{' '}
        <span className='text-rose-500'>Stories</span>
      </Title>
      <div className='grid px-5 grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1'>
        <LatestPost></LatestPost>
        <LatestPost></LatestPost>
        <LatestPost></LatestPost>
        <LatestPost></LatestPost>
      </div>
    </section>
  );
};

export default PostLasted;
