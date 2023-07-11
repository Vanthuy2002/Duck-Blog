import { useState } from 'react';
import Input from './Input';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { UseControllerProps } from 'react-hook-form';
import { FormValue } from '../../../utils/contants';

const PasswordField = (props: UseControllerProps<FormValue>) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className='relative'>
      <Input
        type={show ? 'text' : 'password'}
        name='password'
        placeholder='Enter your password'
        control={props.control}
      ></Input>
      {show ? (
        <EyeIcon
          className='w-6 h-6 text-black eye'
          onClick={() => setShow(false)}
        />
      ) : (
        <EyeSlashIcon
          className='w-6 h-6 text-black eye'
          onClick={() => setShow(true)}
        />
      )}
    </div>
  );
};

export default PasswordField;
