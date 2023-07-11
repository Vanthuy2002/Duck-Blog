import { useController, UseControllerProps } from 'react-hook-form';
import { FormValue } from '../../../utils/contants';

const Checkbox = (props: UseControllerProps<FormValue, any>) => {
  const { field } = useController(props);
  return (
    <input
      id={props.name}
      {...field}
      type='checkbox'
      className={`w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300`}
    />
  );
};

export default Checkbox;
