import React from 'react';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ children, className = '' }) => {
  return (
    <h1
      className={`text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
