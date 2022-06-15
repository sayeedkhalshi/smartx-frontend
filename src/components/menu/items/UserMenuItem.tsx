import { UserIcon } from '@heroicons/react/solid';

const UserMenuItem = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <div className='group inline-block'>
        <UserIcon className='w-7 rounded-full border' />
      </div>
    </div>
  );
};

export default UserMenuItem;
