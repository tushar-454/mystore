'use client';

import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import navs, { NavType } from '@/constants/navs';
import { cn } from '@/lib/utils';
import images from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import FileUploader from './FileUploader';
import { Button } from './ui/button';

interface MobileNavigationProps {
  ownerId: string;
  accountId: string;
  fullName: string;
  avatar: string;
  email: string;
}

const MobileNavigation = ({
  ownerId,
  accountId,
  fullName,
  avatar,
  email,
}: MobileNavigationProps) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  return (
    <header className='mobile-header'>
      <Image
        src={images.logoFullBrand}
        alt='logo'
        width={120}
        height={52}
        className='h-auto'
      />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image src={images.menu} alt='hamburger' width={30} height={30} />
        </SheetTrigger>
        <SheetContent className='shad-sheet h-screen px-3'>
          <SheetTitle>
            <div className='header-user'>
              <Image
                src={avatar}
                alt='avatar'
                width={44}
                height={44}
                className='header-user-avatar'
              />
              <div className='sm:hidden lg:block'>
                <p className='subtitle-2 capitalize'>
                  {fullName || 'Username'}
                </p>
                <p className='caption'>{email || 'email'}</p>
              </div>
            </div>
            <Separator className='mb-4 bg-light-200/20' />
          </SheetTitle>
          <nav className='mobile-nav'>
            <ul className='mobile-nav-list'>
              {navs.map(({ name, url, icon }: NavType) => (
                <Link key={url} href={url} className='lg:w-full'>
                  <li
                    className={cn(
                      'mobile-nav-item',
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
                    <p>{name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <Separator className='my-5 bg-light-200/20' />
          <div className='flex flex-col justify-between gap-5'>
            <FileUploader />
            <Button type='submit' className='mobile-sign-out-button'>
              <Image src={images.logout} alt='logout' width={24} height={24} />
              <p>Logout</p>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;
