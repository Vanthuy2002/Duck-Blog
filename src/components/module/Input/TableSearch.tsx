import React from 'react';

const TableSearch: React.FC = () => {
  return (
    <form className='md:w-1/2 w-full'>
      <div className='relative'>
        <input
          type='text'
          id='search'
          className='w-full p-4 pr-28 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
          placeholder='Search Mockups, Logos...'
        />
        <button
          type='submit'
          className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2'
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default TableSearch;
