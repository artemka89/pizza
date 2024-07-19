import { FC } from 'react';
import { Search } from 'lucide-react';

import { cn } from '@/shared/lib/cn';
import { Input } from '@/shared/ui/input';

interface SearchInputProps {
  className?: string;
}

export const SearchInput: FC<SearchInputProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative flex max-w-[400px] flex-1 justify-between',
        className,
      )}>
      <Search className='absolute left-3 top-1/2 h-5 translate-y-[-60%] text-gray-400' />
      <Input
        className='w-full bg-gray-50 pl-11 outline-none'
        type='text'
        placeholder='Найти пиццу...'
      />
    </div>
  );
};
