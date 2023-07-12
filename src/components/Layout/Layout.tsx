import React from 'react';
import Navbar from './Navbar';

type LayoutProps = {
  children?: React.ReactNode | null;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export default Layout;
