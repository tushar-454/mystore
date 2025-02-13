import Card from '@/components/Card';
import Sort from '@/components/Sort';
import { getFiles } from '@/lib/actions/file.action';
import { Models } from 'node-appwrite';

const Page = async ({ params }: { params: any }) => {
  const type = ((await params)?.type as string) || '';

  const files = await getFiles();

  return (
    <div className='page-container'>
      <section className='w-full'>
        <h1 className='h1 capitalize'>{type}</h1>
        <div className='total-size-section'>
          <p className='body-1'>
            Total: <span className='h5'>10 MB</span>
          </p>
          <div className='sort-container'>
            <p className='body-1 hidden text-light-200 sm:block'>Sort By</p>
            <Sort />
          </div>
        </div>
      </section>
      {/* render the files here  */}
      {files.total > 0 ? (
        <section className='file-list'>
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className='empty-list'>No file uploaded</p>
      )}
    </div>
  );
};

export default Page;
