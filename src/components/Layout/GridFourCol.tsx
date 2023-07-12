import React from 'react';
import LatestPost from '../Block/LatestPost';
import { Title } from '../module';

const PostLasted: React.FC = () => {
  return (
    <section className='max-w-screen-xl mx-auto mt-20'>
      <Title className='!text-3xl'>
        Latest <span className='text-green-400'>Customer</span>{' '}
        <span className='text-rose-500'>Stories</span>
      </Title>
      <div className='grid grid-cols-4 gap-4'>
        <LatestPost></LatestPost>
        <LatestPost></LatestPost>
        <LatestPost></LatestPost>
        <LatestPost></LatestPost>
      </div>
    </section>
  );
};

export default PostLasted;
