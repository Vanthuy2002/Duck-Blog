import React from 'react';
import { Link } from 'react-router-dom';

type LogoProps = {
  title: string;
};

const Logo: React.FC<LogoProps> = ({ title }) => {
  return (
    <Link to='/' className='flex items-center gap-3'>
      <img src='/duck.png' className='h-8 sm:h-9' alt='Duck Logo' />
      <span className='self-center text-xl font-semibold whitespace-nowrap'>
        {title}
      </span>
    </Link>
  );
};

export default Logo;
