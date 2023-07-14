import React from 'react';

type LabelProps = {
  children?: React.ReactNode;
  name: string;
  className?: string;
};

const Label: React.FC<LabelProps> = ({ children, name, className = '' }) => {
  return (
    <label
      htmlFor={name}
      className={`block mb-2 text-sm font-medium text-gray-900 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
