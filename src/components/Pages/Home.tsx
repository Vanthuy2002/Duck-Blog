import React, { useEffect } from 'react';
import { Layout } from '../Layout/';
import Hero from '../Layout/Hero';
import { PostLasted, PostOutStanding } from '../Layout';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <Layout>
      <Hero></Hero>
      <PostOutStanding />
      <PostLasted />
    </Layout>
  );
};

export default HomePage;
