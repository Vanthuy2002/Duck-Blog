import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit';
  isLoading?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  isLoading,
  className = 'bg-primary-600',
}) => {
  return (
    <button
      type={type}
      className={`w-full text-white ${className} hover:${className} font-medium rounded-lg text-md px-5 py-2.5 text-center`}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
