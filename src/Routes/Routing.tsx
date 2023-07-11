import { Routes, Route } from 'react-router-dom';
import Register from '../components/Pages/Register';
import HomePage from '../components/Pages/Home';
import Login from '../components/Pages/Login';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='register' element={<Register />}></Route>
      <Route path='login' element={<Login />}></Route>
    </Routes>
  );
};

export default Routing;
