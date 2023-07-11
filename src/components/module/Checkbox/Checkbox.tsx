import React from 'react';

type CheckboxProps = {
  name: string;
  className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ name, className = '' }) => {
  return (
    <input
      id={name}
      aria-describedby={name}
      type='checkbox'
      className={`w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 ${className}`}
    />
  );
};

export default Checkbox;
