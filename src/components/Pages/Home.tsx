import React, { useEffect } from 'react';
import { Layout } from '../Layout/';
import Hero from '../Layout/Hero';
import HotPost from '../Block/HotPost';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <Layout>
      <Hero></Hero>
      <div className='max-w-3xl px-5 grid gap-3 grid-cols-2 mx-auto max-sm:grid-cols-1'>
        <HotPost></HotPost>
        <HotPost></HotPost>
      </div>
    </Layout>
  );
};

export default HomePage;
