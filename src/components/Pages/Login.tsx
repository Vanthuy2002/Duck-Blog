import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Input,
  Label,
  Title,
  MessageError,
  PasswordField,
} from '../module';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormValue, messErr } from '../../utils/contants';

const Login: React.FC = () => {
  const schema = yup.object({
    email: yup.string().required(messErr.require).email(messErr.email),
    password: yup.string().required(messErr.require).min(8, messErr.password),
  });
  const { handleSubmit, control, formState } = useForm<FormValue>({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

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
                {errors && errors?.email && (
                  <MessageError>{errors?.email?.message}</MessageError>
                )}
              </div>

              <div>
                <Label name='password'>Your Password</Label>
                <PasswordField control={control} name='password' />
                {errors && errors?.password && (
                  <MessageError>{errors?.password?.message}</MessageError>
                )}
              </div>
              {/* Button*/}
              <Button type='submit'>Login</Button>

              {/* already for accounts */}
              <p className='text-sm font-light text-gray-500'>
                First time, wanna create an account?{' '}
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
