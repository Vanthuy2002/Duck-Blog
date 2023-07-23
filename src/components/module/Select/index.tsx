import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';
import { POSTTYPE } from 'src/utils/contants';
const options = [
  { name: 'Select an options', value: '' },
  { name: 'TV/Monitors', value: 'TV' },
  { name: 'PC', value: 'PC' },
  { name: 'Gaming/Console', value: 'GA' },
  { name: 'Phone', value: 'PH' },
];

type SelectProps<T extends FieldValues> = UseControllerProps<T>;

const Select = (props: SelectProps<POSTTYPE | FormData | any>) => {
  const { field } = useController(props);
  return (
    <select
      id={props.name}
      {...field}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
