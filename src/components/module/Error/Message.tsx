import React from 'react';

type MessErrProps = {
  children: React.ReactNode;
};

const MessageError: React.FC<MessErrProps> = ({ children }) => {
  return <p className='text-sm text-red-500 mt-2'>{children}</p>;
};

export default MessageError;
