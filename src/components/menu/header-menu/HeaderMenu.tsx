import CreateMenuItem from '@/components/menu/items/CreateMenuItem';
import ExploreMenuItem from '@/components/menu/items/ExploreMenuItem';
import ResourceMenuItem from '@/components/menu/items/ResourcesItem';
import StatsMenuItem from '@/components/menu/items/StatsMenuItem';

const HeaderMenu = () => {
  return (
    <>
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
      <a
        href='#'
        className='text-base font-medium text-gray-500 hover:text-gray-900'
      >
        <CreateMenuItem />
      </a>
    </>
  );
};

export default HeaderMenu;
