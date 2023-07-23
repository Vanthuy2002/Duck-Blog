import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import { FormValue, POSTTYPE } from 'src/utils/contants';

interface TextAeraProps<T extends FieldValues> extends UseControllerProps<T> {
  placeholder: string;
}

const TextArea = (props: TextAeraProps<POSTTYPE | FormValue | any>) => {
  const { field } = useController(props);
  return (
    <textarea
      id={props.name}
      {...field}
      rows={8}
      className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
      placeholder={props.placeholder}
    ></textarea>
  );
};

export default TextArea;
