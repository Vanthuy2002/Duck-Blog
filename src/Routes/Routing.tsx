import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../components/Pages/Register';
import HomePage from '../components/Pages/Home';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='register' element={<Register />}></Route>
    </Routes>
  );
};

export default Routing;
