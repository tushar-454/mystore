import { signOutUser } from '@/lib/actions/user.action';
import images from '@/public';
import Image from 'next/image';
import FileUploader from './FileUploader';
import Search from './Search';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className='header'>
      <Search />
      <div className='header-wrapper'>
        <FileUploader />
        <form
          action={async () => {
            'use server';
            await signOutUser();
          }}
        >
          <Button type='submit' className='sign-out-button'>
            <Image
              src={images.logout}
              alt='logout'
              width={24}
              height={24}
              className='w-6'
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
