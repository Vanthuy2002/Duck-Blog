import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import TableSearch from '../Input/TableSearch';
import FilterDrop from '../Dropdown/FilterDrop';
import { Button } from '..';

const TableHead: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between mt-3 p-4 gap-y-2'>
      {/* form */}
      <TableSearch></TableSearch>

      <div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
        <Button
          type='button'
          className='flex items-center gap-2 focus:ring-4 bg-primary-800'
        >
          <PlusIcon className='w-5 h-5 text-white' />
          <span>Add product</span>
        </Button>
        <div className='flex items-center w-full md:w-auto relative'>
          <FilterDrop></FilterDrop>
        </div>
      </div>
    </div>
  );
};

export default TableHead;
