import { FormValue, POSTTYPE } from 'src/utils/contants';
import { Label } from '..';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

interface RadioProps<T extends FieldValues> extends UseControllerProps<T, any> {
  label: string;
  checked?: boolean;
  onClick: () => void;
  value?: string;
}

const Radio = (props: RadioProps<POSTTYPE | FormValue>) => {
  const { field } = useController(props);
  return (
    <div className='flex items-center gap-3'>
      <input
        id={props.label}
        type='radio'
        checked={props.checked}
        {...field}
        {...props}
        onClick={props.onClick}
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
      />
      <Label className='mb-0' name={props.label}>
        {props.label}
      </Label>
    </div>
  );
};

export default Radio;
