import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Label, Title, MessageError } from '../module';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormValue } from '../module/Input/Input';

const Login: React.FC = () => {
  const { handleSubmit, control, formState } = useForm<FormValue>();

  const handleLogin: SubmitHandler<FormValue> = (values) => {
    console.log(values);
  };

  return (
    <section className='min-h-screen bg-blue-50'>
      <div className='flex flex-col items-center justify-center max-w-2xl px-6 mx-auto'>
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
            <form
              className='space-y-4 md:space-y-6'
              autoComplete='off'
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <Label name='email'>Your email</Label>
                <Input
                  control={control}
                  name='email'
                  placeholder='example@gmail.com'
                  type='email'
                />
                <MessageError>This field is required</MessageError>
              </div>

              <div>
                <Label name='password'>Your Password</Label>
                <Input
                  control={control}
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
