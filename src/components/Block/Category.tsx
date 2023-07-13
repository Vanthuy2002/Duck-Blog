import React from 'react';
import { Link } from 'react-router-dom';

export type childProps = {
  children: React.ReactNode;
  to: string;
};

const CategoryTitle: React.FC<childProps> = ({ children, to }) => {
  return (
    <Link to={to}>
      <span className='inline-block p-2 text-sm rounded-md bg-[#80ffdb] absolute top-3 left-3'>
        {children}
      </span>
    </Link>
  );
};

export default CategoryTitle;
