import React from 'react';

const TableSearch: React.FC = () => {
  return (
    <form className='w-full md:w-1/2 relative'>
      <input
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3'
        placeholder='Search Mockups, Logos...'
      />
      <button className='text-white absolute right-0 bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 h-[45px]'>
        Search
      </button>
    </form>
  );
};

export default TableSearch;
