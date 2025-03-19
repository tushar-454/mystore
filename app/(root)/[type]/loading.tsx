const Loading = () => {
  return (
    <div className='page-container'>
      <section className='flex w-full flex-col'>
        <h1 className='h-10 w-40 animate-pulse rounded-full bg-gray-200'></h1>

        <div className='mt-5 flex items-center justify-between gap-5'>
          <p className='h-5 w-20 animate-pulse rounded-full bg-gray-200'></p>

          <div className='h-10 w-40 animate-pulse rounded-full bg-gray-200'></div>
        </div>
      </section>

      {/* Render the files */}

      <section className='file-list'>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
        <div className='file-card h-40 animate-pulse bg-neutral-100'></div>
      </section>
    </div>
  );
};

export default Loading;
