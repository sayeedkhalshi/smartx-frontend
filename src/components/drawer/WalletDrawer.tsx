/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React, { Fragment, useContext, useState } from 'react';

import { WalletContext } from '@/contexts/walletContext';

//set type for open and setOpen
interface TypeSetOpen {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function WalletDrawer({ open, setOpen }: TypeSetOpen) {
  const { wallet, setWalletAddress } = useContext(WalletContext);
  // my wallet states
  const [_loading, setLoading] = useState(false);
  const [_message, setMessage] = useState('');
  //const [account, setAccount] = useState(null);
  const openMetamask = async () => {
    setLoading(true);
    const { ethereum } = window;

    const accounts = await ethereum.request({
      method: 'wallet_requestPermissions',
      params: [
        {
          eth_accounts: {},
        },
      ],
    });

    if (ethereum?.networkVersion !== '13881') {
      const polygon = {
        chainId: `0x${Number(137).toString(16)}`,
        chainName: 'Polygon Mainnet',
        nativeCurrency: {
          name: 'MATIC',
          symbol: 'MATIC',
          decimals: 18,
        },
        rpcUrls: ['https://polygon-rpc.com/'],
        blockExplorerUrls: ['https://polygonscan.com/'],
      };

      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              ...polygon,
            },
          ],
        });

        //set the wallet address to local storage
        localStorage.setItem('GraziaMetamask', 'true');
        setWalletAddress(accounts[0].caveats[0].value[0]);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/wallets/add`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              walletaddress: accounts[0].caveats[0].value[0],
            }),
          }
        );

        await response.json();

        //console.log(wallet_add);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        return setMessage('Failed to change network');
      }
    } else {
      localStorage.setItem('GraziaMetamask', 'true');
      setWalletAddress(accounts[0].caveats[0].value[0]);
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wallets/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletaddress: accounts[0].caveats[0].value[0],
        }),
      });
    }

    setLoading(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 mt-14 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                  {/* <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                        onClick={() => setOpen(false)}
                      >
                        <span className='sr-only'>Close panel</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>
                  </Transition.Child> */}
                  <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                    <div className='px-4 sm:px-6'>
                      <Dialog.Title className='text-lg font-medium text-gray-900'>
                        <div className='group mt-3 inline-block rounded-full border bg-gray-900 '>
                          <UserIcon className='w-6 text-white' />
                        </div>
                        <span className='p-3 text-lg font-medium text-gray-900'>
                          {wallet.walletaddress ? (
                            <>{wallet.walletaddress}</>
                          ) : (
                            <>My Wallet</>
                          )}
                        </span>
                      </Dialog.Title>
                    </div>
                    <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                      {/* Replace with your content */}
                      <h4 className='text-md'>
                        {' '}
                        Connect with one of our available wallet providers or
                        create a new one.
                      </h4>

                      {/* table of wallet list */}
                      <div
                        onClick={openMetamask}
                        className='mt-3 cursor-pointer border border-dashed border-slate-300 p-3'
                      >
                        <Image
                          src='/images/logos/metamask-fox.svg'
                          alt='Metamask Logo'
                          width='25'
                          height='25'
                          className='relative -mb-3'
                        />
                        <p className='relative -mt-8 ml-9'>Metamask</p>
                      </div>

                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
