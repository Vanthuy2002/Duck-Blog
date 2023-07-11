import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Input, Label, Title } from '../module';

const Register: React.FC = () => {
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
            <Title>Create an accounts</Title>
            <form className='space-y-4 md:space-y-6' autoComplete='off'>
              <div>
                <Label name='username'>Username</Label>
                <Input
                  name='username'
                  placeholder='Enter your username ...'
                  type='text'
                />
              </div>

              <div>
                <Label name='email'>Your email</Label>
                <Input
                  name='email'
                  placeholder='example@gmail.com'
                  type='email'
                />
              </div>

              <div>
                <Label name='password'>Your Password</Label>
                <Input
                  name='password'
                  placeholder='Enter your password...'
                  type='password'
                />
              </div>

              {/* checkbox */}
              <div className='flex items-start gap-x-3'>
                <Checkbox name='terms' />
                <Label name='terms' className='select-none'>
                  By register, I accept the Terms and Conditions
                </Label>
              </div>

              {/* Button*/}
              <Button type='submit'>Create accounts</Button>

              {/* already for accounts */}
              <p className='text-sm font-light text-gray-500'>
                Already have an account?
                <Link
                  to='/login'
                  className='font-medium text-primary-600 hover:underline'
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
