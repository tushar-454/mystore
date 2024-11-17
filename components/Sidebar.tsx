'use client';

import navs, { NavType } from '@/constants/navs';
import { avatarPlaceholderUrl } from '@/constants/others';
import { cn } from '@/lib/utils';
import images from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <aside className='sidebar'>
      <Link href='/'>
        <Image
          src={images.logoFullBrand}
          alt='brand logo'
          width={160}
          height={50}
          className='hidden h-auto lg:block'
        />
        <Image
          src={images.logoBrand}
          alt='brand logo'
          width={52}
          height={52}
          className='lg:hidden'
        />
      </Link>
      <nav className='sidebar-nav'>
        <ul className='flex flex-1 flex-col gap-6'>
          {navs.map(({ name, url, icon }: NavType) => (
            <Link key={url} href={url} className='lg:w-full'>
              <li
                className={cn(
                  'sidebar-nav-item',
                  pathName === url && 'shad-active',
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    'nav-icon',
                    pathName === url && 'nav-icon-active',
                  )}
                />
                <p className='hidden lg:block'>{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Image
        src={images.files2}
        alt='files'
        width={506}
        height={418}
        className='w-full'
      />
      <div className='sidebar-user-info'>
        <Image
          src={avatarPlaceholderUrl}
          alt='avatar'
          width={44}
          height={44}
          className='sidebar-user-avatar'
        />
        <div className='hidden lg:block'>
          <p className='subtitle-2 capitalize'>{fullName}</p>
          <p className='caption'>{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
