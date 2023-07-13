import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const Toasty: React.FC = () => {
  return (
    <ToastContainer
      position='top-right'
      autoClose={2000}
      closeOnClick
      draggable
      theme='light'
      pauseOnHover={false}
    />
  );
};

export default Toasty;
