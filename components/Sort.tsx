'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import sortTypes from '@/constants/sortTypes';
import { usePathname, useRouter } from 'next/navigation';

const Sort = () => {
  const router = useRouter();
  const path = usePathname();

  const handleSortChange = (value: string) => {
    router.push(`${path}?sort=${value}`);
  };

  return (
    <Select onValueChange={handleSortChange} defaultValue={sortTypes[0].value}>
      <SelectTrigger className='sort-select'>
        <SelectValue placeholder={sortTypes[0].label} />
      </SelectTrigger>
      <SelectContent className='sort-select-content'>
        {sortTypes.map((sortType) => (
          <SelectItem key={sortType.value} value={sortType.value}>
            {sortType.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Sort;
