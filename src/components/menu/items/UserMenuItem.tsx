import { UserIcon } from '@heroicons/react/outline';

const UserMenuItem = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <div className='group inline-block rounded-full border '>
        <UserIcon className='w-7 text-slate-400' />
      </div>
    </div>
  );
};

export default UserMenuItem;
