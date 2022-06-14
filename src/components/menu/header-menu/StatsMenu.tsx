import React from 'react';

const StatsMenu = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <div className='group inline-block'>
        <button className='min-w-32 flex items-center rounded-sm border bg-white px-3 py-1 outline-none focus:outline-none'>
          <span className='flex-1 pr-1 font-semibold'>Stats</span>
          <span>
            <svg
              className='h-4 w-4 transform fill-current transition
        duration-150 ease-in-out group-hover:-rotate-180'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </span>
        </button>
        <ul
          className='min-w-32 absolute origin-top scale-0 transform rounded-sm border 
  bg-white transition duration-150 ease-in-out group-hover:scale-100'
        >
          <li className='rounded-sm px-3 py-1 hover:bg-gray-100'>
            Programming
          </li>
          <li className='rounded-sm px-3 py-1 hover:bg-gray-100'>DevOps</li>
          <li className='relative rounded-sm px-3 py-1 hover:bg-gray-100'>
            <button className='flex w-full items-center text-left outline-none focus:outline-none'>
              <span className='flex-1 pr-1'>Langauges</span>
              <span className='mr-auto'>
                <svg
                  className='h-4 w-4 fill-current
            transition duration-150 ease-in-out'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </span>
            </button>
            <ul
              className='min-w-32 absolute top-0 right-0 origin-top-left rounded-sm 
  border bg-white transition duration-150
  ease-in-out
  '
            >
              <li className='px-3 py-1 hover:bg-gray-100'>Javascript</li>
              <li className='relative rounded-sm px-3 py-1 hover:bg-gray-100'>
                <button className='flex w-full items-center text-left outline-none focus:outline-none'>
                  <span className='flex-1 pr-1'>Python</span>
                  <span className='mr-auto'>
                    <svg
                      className='h-4 w-4 fill-current
                transition duration-150 ease-in-out'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </span>
                </button>
                <ul
                  className='min-w-32 absolute top-0 right-0 origin-top-left rounded-sm 
      border bg-white transition duration-150
      ease-in-out
      '
                >
                  <li className='px-3 py-1 hover:bg-gray-100'>2.7</li>
                  <li className='px-3 py-1 hover:bg-gray-100'>3+</li>
                </ul>
              </li>
              <li className='px-3 py-1 hover:bg-gray-100'>Go</li>
              <li className='px-3 py-1 hover:bg-gray-100'>Rust</li>
            </ul>
          </li>
          <li className='rounded-sm px-3 py-1 hover:bg-gray-100'>Testing</li>
        </ul>
      </div>
    </div>
  );
};

export default StatsMenu;
