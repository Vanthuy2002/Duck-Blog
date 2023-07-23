import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from 'src/components/Pages/NotFounnd';

const Blog = lazy(() => import('src/components/Pages/Blog'));
const Dashboard = lazy(() => import('src/components/Pages/Dashboard'));
const DetailsPage = lazy(() => import('src/components/Pages/DetailsPage'));
const HomePage = lazy(() => import('src/components/Pages/Home'));
const Login = lazy(() => import('src/components/Pages/Login'));
const Profile = lazy(() => import('src/components/Pages/Profile'));
const Register = lazy(() => import('src/components/Pages/Register'));

const Routing = () => {
  return (
    <Suspense
      fallback={
        <p className='flex items-center justify-center min-h-screen'>
          Loading....
        </p>
      }
    >
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
    </Suspense>
  );
};

export default Routing;
