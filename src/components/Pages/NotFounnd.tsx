import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found';
  }, []);
  return (
    <section className='h-screen bg-black'>
      <div className='max-w-[1000px] text-center flex items-center justify-center flex-col mx-auto text-white'>
        <img
          src='/404.png'
          alt='notfound'
          className='w-[400px] max-sm:max-w-[300px] max-sm:max-h-[300px] h-[400px] object-cover'
        />
        <h1 className='text-[60px] font-bold max-sm:text-[36px]'>
          404 - Looks like you are lost.
        </h1>
        <p className='max-w-[800px] max-sm:text-sm mx-auto mb-10'>
          Maybe this page used to exist or you just spelled something wrong.
          Chances are your spelled something wrong, so can you double check the
          URL?
        </p>
        <Link to='/' className={'back bg-primary-500'}>
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
