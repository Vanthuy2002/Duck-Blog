import { Link } from 'react-router-dom';
import CategoryTitle from './Category';
import Author from './Author';

const HotPost: React.FC = () => {
  return (
    <div className='relative max-md:mx-auto lg:mt-10 bg-white rounded-lg shadow-md'>
      <Link to='/id'>
        <img
          className='rounded-t-lg object-cover h-[280px] w-full'
          src='https://placehold.co/600x400?text=Images'
          alt=''
        />
      </Link>
      <CategoryTitle to='/category/id'>Category</CategoryTitle>
      <div className='p-5'>
        <Link to='/id'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 over-text'>
            Noteworthy technology acquisitions 2021
          </h5>
        </Link>
        <p className='mb-3 font-normal text-gray-400 over-text'>
          Here are the biggest enterprise technology acquisitions of 2021 so far
        </p>
        <section className='flex items-start justify-between'>
          <Link
            to='/id'
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:opacity-80'
          >
            Read more
          </Link>
          <Author to='/me/emifukuda'>EmiFukuda</Author>
        </section>
      </div>
    </div>
  );
};

export default HotPost;
