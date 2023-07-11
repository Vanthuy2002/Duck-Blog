import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Input, Label, MessageError, Title } from '../module';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormValue, messErr } from '../../utils/contants';

const Register: React.FC = () => {
  const schema = yup.object({
    username: yup.string().required(messErr.require),
    email: yup.string().required(messErr.require).email(messErr.email),
    password: yup.string().required(messErr.require).min(8, messErr.password),
    terms: yup.boolean().oneOf([true], messErr.accept),
  });

  const { handleSubmit, control, formState } = useForm<FormValue>({
    resolver: yupResolver<FormValue>(schema),
  });

  const { errors } = formState;

  const handleRegister: SubmitHandler<FormValue> = (values) => {
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
            <Title>Create an accounts</Title>
            <form
              className='space-y-4 md:space-y-6'
              autoComplete='off'
              onSubmit={handleSubmit(handleRegister)}
            >
              <div>
                <Label name='username'>Username</Label>
                <Input
                  control={control}
                  name='username'
                  placeholder='Enter your username ...'
                  type='text'
                />
                {errors && errors?.username && (
                  <MessageError>{errors?.username?.message}</MessageError>
                )}
              </div>

              <div>
                <Label name='email'>Your email</Label>
                <Input
                  control={control}
                  name='email'
                  placeholder='example@gmail.com'
                  type='text'
                />
                {errors && errors?.email && (
                  <MessageError>{errors?.email?.message}</MessageError>
                )}
              </div>

              <div>
                <Label name='password'>Your Password</Label>
                <Input
                  control={control}
                  name='password'
                  placeholder='Enter your password...'
                  type='password'
                />
                {errors && errors.password && (
                  <MessageError>{errors?.password?.message}</MessageError>
                )}
              </div>

              {/* checkbox */}
              <div className='flex items-start gap-x-3'>
                <Checkbox control={control} name='terms' />
                <Label
                  name='terms'
                  className={
                    errors?.terms ? 'text-red-500 select-none' : 'select-none'
                  }
                >
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
