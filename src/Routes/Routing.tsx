import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import AddPost from 'src/components/Block/Posts/AddPost';
import Blog from 'src/components/Pages/Blog';
import Login from 'src/components/Pages/Login';
import PageNotFound from 'src/components/Pages/NotFounnd';
import Register from 'src/components/Pages/Register';

const Dashboard = lazy(() => import('src/components/Pages/Dashboard'));
const DetailsPage = lazy(() => import('src/components/Pages/DetailsPage'));
const HomePage = lazy(() => import('src/components/Pages/Home'));
const Profile = lazy(() => import('src/components/Pages/Profile'));

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
        <Route path='/manage/post' element={<AddPost />}></Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;
