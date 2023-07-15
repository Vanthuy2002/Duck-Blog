import { FunnelIcon } from '@heroicons/react/24/solid';
import React, { useRef, useState } from 'react';
import { Checkbox, Label } from '..';
import { FormValue, categoryListProps } from '../../../utils/contants';
import { useOnClickOutside } from '../../../Hooks/useClick';
import { useForm } from 'react-hook-form';

const categoryList: categoryListProps = [
  { id: 1, name: 'Story' },
  { id: 2, name: 'Social' },
  { id: 3, name: 'Technical' },
  { id: 4, name: 'Life' },
  { id: 5, name: 'Work' },
];

const FilterDrop: React.FC = () => {
  const { control } = useForm<FormValue, any>();

  const [showDrop, setShowDrop] = useState<boolean>(false);
  const ref = useRef(null);

  const handleToggleShow = (): void => {
    setShowDrop(true);
  };
  const handleCloseMenu = () => {
    setShowDrop(false);
  };

  useOnClickOutside(ref, handleCloseMenu);

  return (
    <>
      <button
        ref={ref}
        className='md:w-auto w-full px-4 py-2.5 rounded-md flex items-center gap-2 bg-white border border-gray-200 focus:ring-4'
        onClick={handleToggleShow}
      >
        <FunnelIcon className='w-5 h-5 text-gray-400' />
        <span className='text-black'>Filter</span>
      </button>

      {showDrop && (
        <div
          className='z-10 transformCustom max-md:w-full max-md:translate-y-[66%] w-48 p-3 bg-white rounded-lg shadow absolute'
          ref={ref}
        >
          <h5 className='mb-3 text-md font-bold text-gray-900'>
            Choose Category
          </h5>
          <ul>
            {categoryList.length > 0 &&
              categoryList.map((category) => (
                <li
                  className='flex items-center my-2 hover:bg-gray-200'
                  key={category.id}
                >
                  <Checkbox name={category.name} control={control} />
                  <Label
                    name={category.name}
                    className='w-full ml-2 mt-2 select-none'
                  >
                    {category.name}
                  </Label>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default FilterDrop;
