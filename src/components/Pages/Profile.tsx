import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../module';

const Profile: React.FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const handleBack = (): void => {
    navigate('/');
  };
  return (
    <article className='flex items-center justify-center min-h-screen'>
      <section className='max-w-sm py-3 bg-white border border-gray-200 rounded-lg shadow flex-1'>
        <div className='flex flex-col items-center'>
          <img
            className='w-24 h-24 mb-3 rounded-full shadow-lg'
            src='/doraemon.jpg'
            alt={name}
          />
          <h5 className='mb-1 text-xl font-medium text-gray-900'>{name}</h5>
          <span className='text-sm text-gray-500'>Visual Designer</span>
          <div className='flex mt-4 space-x-3 md:mt-6'>
            <a
              href='#'
              className='inline-flex p-2 text-sm font-medium text-center text-white bg-primary-500 rounded-lg flex-shrink-0'
            >
              Add friend
            </a>
            <Button type='button' onClick={handleBack}>
              Back
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Profile;
