import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

const UploadImage = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <label
        htmlFor='upload'
        className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
      >
        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
          <CloudArrowUpIcon className='w-8 h-8 text-gray-500' />
          <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
            <span className='font-semibold'>Click to upload</span> or drag and
            drop
          </p>
          <p className='text-xs text-gray-500 dark:text-gray-400'>
            PNG, JPG (MAX. 800x400px)
          </p>
        </div>
        <input id='upload' type='file' className='hidden' />
      </label>
    </div>
  );
};

export default UploadImage;
