import { Routes, Route } from 'react-router-dom';
import Register from '../components/Pages/Register';
import HomePage from '../components/Pages/Home';
import Login from '../components/Pages/Login';
import Blog from '../components/Pages/Blog';
import Dashboard from '../components/Pages/Dashboard';
import PageNotFound from '../components/Pages/NotFounnd';
import DetailsPage from '../components/Pages/DetailsPage';
import Profile from '../components/Pages/Profile';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='blog' element={<Blog />}></Route>
      <Route path='dashboard' element={<Dashboard />}></Route>
      <Route path='register' element={<Register />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
      <Route path='/:slug' element={<DetailsPage />}></Route>
      <Route path='/me/:name' element={<Profile />}></Route>
    </Routes>
  );
};

export default Routing;
