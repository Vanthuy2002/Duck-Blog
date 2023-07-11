import React from 'react';

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  placeholder,
  className = '',
}) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
