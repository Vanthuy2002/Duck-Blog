import React from 'react';
import TableHead from './TableHead';
import ActionDrop from '../Dropdown/ActionDrop';

const TableDashboard: React.FC = () => {
  return (
    <section className='bg-gray-50 p-3 sm:p-5 mt-20'>
      <div className='ml-auto max-w-screen-xl pr-4 lg:pl-12'>
        <div className='bg-white relative shadow-md sm:rounded-lg'>
          <TableHead />
          {/* table */}
          <div className='max-sm:overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th scope='col' className='px-4 py-3'>
                    Product name
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Category
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Brand
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Description
                  </th>
                  <th scope='col' className='px-4 py-3'>
                    Price
                  </th>
                  <th scope='col' className='px-4 py-3'></th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b'>
                  <th
                    scope='row'
                    className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'
                  >
                    Apple iMac 27&#34;
                  </th>
                  <td className='px-4 py-3'>PC</td>
                  <td className='px-4 py-3'>Apple</td>
                  <td className='px-4 py-3'>300</td>
                  <td className='px-4 py-3'>$2999</td>
                  <td className='px-4 py-3 flex items-center justify-end relative'>
                    <ActionDrop />
                  </td>
                </tr>
                <tr className='border-b'>
                  <th
                    scope='row'
                    className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'
                  >
                    Apple iMac 27&#34;
                  </th>
                  <td className='px-4 py-3'>PC</td>
                  <td className='px-4 py-3'>Apple</td>
                  <td className='px-4 py-3'>300</td>
                  <td className='px-4 py-3'>$2999</td>
                  <td className='px-4 py-3 flex items-center justify-end relative'>
                    <ActionDrop />
                  </td>
                </tr>
                <tr className='border-b'>
                  <th
                    scope='row'
                    className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'
                  >
                    Apple iMac 27&#34;
                  </th>
                  <td className='px-4 py-3'>PC</td>
                  <td className='px-4 py-3'>Apple</td>
                  <td className='px-4 py-3'>300</td>
                  <td className='px-4 py-3'>$2999</td>
                  <td className='px-4 py-3 flex items-center justify-end relative'>
                    <ActionDrop />
                  </td>
                </tr>
                <tr className='border-b'>
                  <th
                    scope='row'
                    className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'
                  >
                    Apple iMac 27&#34;
                  </th>
                  <td className='px-4 py-3'>PC</td>
                  <td className='px-4 py-3'>Apple</td>
                  <td className='px-4 py-3'>300</td>
                  <td className='px-4 py-3'>$2999</td>
                  <td className='px-4 py-3 flex items-center justify-end relative'>
                    <ActionDrop />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableDashboard;
