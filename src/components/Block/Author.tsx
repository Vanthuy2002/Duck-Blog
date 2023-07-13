import React from 'react';
import { childProps } from './Category';
import { Link } from 'react-router-dom';

type AuthorProps = {
  src?: string;
  className?: string;
} & childProps;

const Author: React.FC<AuthorProps> = ({
  children,
  to,
  src = '/avatar.jpg',
  className = '',
}) => {
  return (
    <Link to={to} className={`flex items-center gap-2 ${className}`}>
      <span className='text-sm hover:text-blue-400'>{children}</span>
      <img
        className='w-8 h-8 object-cover rounded-full'
        src={src}
        alt='author'
      />
    </Link>
  );
};

export default Author;
