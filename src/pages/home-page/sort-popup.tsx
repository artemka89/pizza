import { FC, useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/ui/popover';

const items = [
  { id: '1', title: 'популярности' },
  { id: '2', title: 'цене DESC' },
  { id: '3', title: 'цене ASC' },
];

export const SortPopup: FC = () => {
  const [sortItem, setSortItem] = useState(items[0]);

  const handleSetActiveSorting = (item: { id: string; title: string }) => {
    setSortItem(item);
  };

  return (
    <Popover>
      <PopoverTrigger
        asChild
        className='h-12 cursor-pointer rounded-2xl bg-secondary font-bold'>
        <div className='inline-flex h-10 items-center gap-1 px-4 py-2'>
          <ArrowUpDown size={16} />
          <span>Сортировка по:</span>
          <span className='text-primary'>{sortItem.title}</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className='p-1'>
        <ul>
          {items.map((item) => (
            <PopoverClose
              key={item.id}
              onClick={() => handleSetActiveSorting(item)}
              className='w-full text-start'>
              <li className='cursor-pointer rounded-md p-2 hover:bg-secondary hover:text-primary'>
                {item.title}
              </li>
            </PopoverClose>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
