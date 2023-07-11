import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Label, Title, MessageError } from '../module';

const Login: React.FC = () => {
  return (
    <section className='bg-blue-50 min-h-screen'>
      <div className='flex flex-col max-w-2xl items-center justify-center px-6 mx-auto'>
        {/* Logo */}
        <Link to='/'>
          <span className='flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900'>
            <img className='w-[100px] h-[100px]' src='/duck.png' alt='logo' />
            <span>Duck Blogger</span>
          </span>
        </Link>

        {/* form */}
        <div className='w-full bg-white rounded-lg shadow'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <Title>Login with your accounts</Title>
            <form className='space-y-4 md:space-y-6' autoComplete='off'>
              <div>
                <Label name='email'>Your email</Label>
                <Input
                  name='email'
                  placeholder='example@gmail.com'
                  type='email'
                />
                <MessageError>This field is required</MessageError>
              </div>

              <div>
                <Label name='password'>Your Password</Label>
                <Input
                  name='password'
                  placeholder='Enter your password...'
                  type='password'
                />
                <MessageError>This field is required</MessageError>
              </div>
              {/* Button*/}
              <Button type='submit'>Login</Button>

              {/* already for accounts */}
              <p className='text-sm font-light text-gray-500'>
                First time, wanna create an account?
                <Link
                  to='/register'
                  className='font-medium text-primary-600 hover:underline'
                >
                  Register an accounts
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
