import { FunnelIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Button, Label } from '..';
import { categoryListProps } from '../../../utils/contants';

const categoryList: categoryListProps = [
  { id: 1, name: 'Story' },
  { id: 2, name: 'Social' },
  { id: 3, name: 'Technical' },
  { id: 4, name: 'Life' },
  { id: 5, name: 'Work' },
];

const FilterDrop: React.FC = () => {
  const [showDrop, setShowDrop] = useState<boolean>(false);

  const handleToggleShow = (): void => {
    setShowDrop(!showDrop);
  };

  return (
    <>
      <Button
        onClick={handleToggleShow}
        className='md:w-auto flex items-center gap-2 bg-white border border-gray-200 focus:ring-4'
        type='button'
      >
        <FunnelIcon className='w-5 h-5 text-gray-400' />
        <span className='text-black'>Filter</span>
      </Button>

      {showDrop && (
        <div className='z-10 transformCustom max-md:w-full max-md:translate-y-[66%] w-48 p-3 bg-white rounded-lg shadow absolute'>
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
                  <input
                    id={category.name}
                    type='checkbox'
                    value={category.name}
                    className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500'
                  />
                  <Label
                    name={category.name}
                    className='w-full ml-2 mb-0 select-none'
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
