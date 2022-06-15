/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';

import WalletDrawer from '@/components/drawer/WalletDrawer';
import ExploreMenuItem from '@/components/menu/header-menu/ExploreMenuItem';
import ResourceMenuItem from '@/components/menu/header-menu/ResourcesItem';
import StatsMenuItem from '@/components/menu/header-menu/StatsMenuItem';

export default function WebMenu() {
  const [open, setOpen] = useState(false);
  const [drawerIcon, setDrawerIcon] = useState(false);

  const openCloseFunction = () => {
    if (drawerIcon && open) {
      setDrawerIcon(false);
      setOpen(false);
    } else if (drawerIcon && !open) {
      setDrawerIcon(true);
      setOpen(true);
    } else {
      setDrawerIcon(true);
      setOpen(true);
    }
  };

  return (
    <>
      <Popover className='fixed z-50 w-full bg-white shadow-md'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <a href='#'>
                <span className='text-lg font-bold text-green-300'>SmartX</span>
                <span className='text-3xl font-bold text-green-500'>NFT</span>
                <span className='sr-only'>Workflow</span>
              </a>
            </div>
            <div className='-my-2 -mr-2 md:hidden'>
              <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
              <a
                href='#'
                className='text-base font-medium text-gray-500 hover:text-gray-900'
              >
                <ExploreMenuItem />
              </a>

              <a
                href='#'
                className='text-base font-medium text-gray-500 hover:text-gray-900'
              >
                <StatsMenuItem />
              </a>
              <a
                href='#'
                className='text-base font-medium text-gray-500 hover:text-gray-900'
              >
                <ResourceMenuItem />
              </a>
            </Popover.Group>
            <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
              <a
                href='#'
                className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
              >
                Sign in
              </a>
              <a
                href='#'
                className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
              >
                Sign up
              </a>
              <a
                href='#'
                className='pointer-events-auto ml-8'
                id='close-drawer'
                onMouseDown={openCloseFunction}
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  className='cursor-pointer text-gray-600 hover:text-dark dark:text-gray-300  dark:hover:text-white'
                  height='24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M20 3H5C3.346 3 2 4.346 2 6v12c0 1.654 1.346 3 3 3h15c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19c-.552 0-1-.449-1-1V6c0-.551.448-1 1-1h15v3h-6c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h6.001v3H5zm15-9v4h-6v-4h6z'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'
          >
            <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    {/* <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  /> */}
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-8'>
                    <a
                      href='#'
                      className='text-base font-medium text-gray-500 hover:text-gray-900'
                    >
                      <ExploreMenuItem />
                    </a>

                    <a
                      href='#'
                      className='text-base font-medium text-gray-500 hover:text-gray-900'
                    >
                      <StatsMenuItem />
                    </a>
                    <a
                      href='#'
                      className='text-base font-medium text-gray-500 hover:text-gray-900'
                    >
                      <ResourceMenuItem />
                    </a>
                  </nav>
                </div>
              </div>
              <div className='space-y-6 py-6 px-5'>
                <div>
                  <a
                    href='#'
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                  >
                    Sign up
                  </a>
                  <p className='mt-6 text-center text-base font-medium text-gray-500'>
                    Existing customer?{' '}
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-500'
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <WalletDrawer open={open} setOpen={setOpen} />
    </>
  );
}
