const CreateMenuItem = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <div className='group inline-block'>
        <button className='min-w-32 flex items-center rounded-sm border-none bg-white px-3 py-1 outline-none focus:outline-none'>
          <span className='flex-1 pr-1 font-semibold'>Create</span>
        </button>
      </div>
    </div>
  );
};

export default CreateMenuItem;
