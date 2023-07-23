import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { FormValue, POSTTYPE } from 'src/utils/contants';
interface InputProps<T extends FieldValues> extends UseControllerProps<T, any> {
  type: string;
  placeholder: string;
  className?: string;
  isDisabled?: boolean;
}

const Input = (props: InputProps<FormValue | POSTTYPE>) => {
  const { field } = useController(props);

  return (
    <input
      type={props.type}
      id={props.name}
      className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${props.className}`}
      placeholder={props.placeholder}
      disabled={props.isDisabled}
      {...field}
    />
  );
};

export default Input;
