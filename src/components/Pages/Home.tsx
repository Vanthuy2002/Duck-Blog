import React, { useEffect } from 'react';
import { Layout } from '../Layout/';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return <Layout></Layout>;
};

export default HomePage;
