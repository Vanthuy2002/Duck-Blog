import React from 'react';
import { ToastContainer } from 'react-toastify';

const Toasty: React.FC = () => {
  return (
    <ToastContainer
      position='top-right'
      autoClose={2000}
      closeOnClick
      draggable
      theme='light'
    />
  );
};

export default Toasty;
