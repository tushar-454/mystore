import images from '@/public';

export type NavType = {
  name: string;
  icon: string;
  url: string;
};

const navs: NavType[] = [
  {
    name: 'Dashboard',
    icon: images.dashboard,
    url: '/',
  },
  {
    name: 'Documents',
    icon: images.documents,
    url: '/documents',
  },
  {
    name: 'Images',
    icon: images.image,
    url: '/images',
  },
  {
    name: 'Media',
    icon: images.media,
    url: '/media',
  },
  {
    name: 'Others',
    icon: images.others,
    url: '/others',
  },
];

export default navs;
