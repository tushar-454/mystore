import images from '@/public';

export type ActionDropdownType = {
  label: string;
  icon: string;
  value: string;
};

const actionsDropdown: ActionDropdownType[] = [
  {
    label: 'Rename',
    icon: images.rename,
    value: 'rename',
  },
  {
    label: 'Details',
    icon: images.details,
    value: 'details',
  },
  {
    label: 'Share',
    icon: images.share,
    value: 'share',
  },
  {
    label: 'Download',
    icon: images.download,
    value: 'download',
  },
  {
    label: 'Delete',
    icon: images.delete,
    value: 'delete',
  },
];

export { actionsDropdown };
