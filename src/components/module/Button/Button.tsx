import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit';
  isLoading?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  ref?: React.LegacyRef<HTMLButtonElement> | undefined;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  isLoading = false,
  className = 'bg-primary-600',
  disabled = false,
  onClick,
  ref,
}) => {
  return (
    <button
      ref={ref}
      type={type}
      className={`w-full text-white ${className} font-medium rounded-md text-md px-5 py-2.5 text-center disabled:opacity-50`}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
