const HotPost: React.FC = () => {
  return (
    <div className='max-md:mx-auto lg:mt-10 bg-white rounded-lg shadow-md'>
      <a href='#'>
        <img
          className='rounded-t-lg object-cover h-[280px] w-full'
          src='https://pixlr.com/images/index/remove-bg.webp'
          alt=''
        />
      </a>
      <div className='p-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-400'>
          Here are the biggest enterprise technology acquisitions of 2021 so far
        </p>
        <a
          href='#'
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default HotPost;
