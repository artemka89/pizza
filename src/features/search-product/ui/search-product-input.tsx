import { FC, useState } from 'react';
import { Search } from 'lucide-react';

import { getPizzaImageUrl } from '@/entities/pizza';
import { useGetSearchProductList } from '@/entities/pizza';
import { cn } from '@/shared/lib/cn';
import { useDebouncedValue } from '@/shared/lib/use-debounced-value';
import { useFocusElement } from '@/shared/lib/use-focus-element';
import { Input } from '@/shared/ui/input';

interface SearchInputProps {
  className?: string;
}

export const SearchProductInput: FC<SearchInputProps> = ({ className }) => {
  const [searchValue, setSearchValue] = useState('');
  const [focused, setFocused, ref] = useFocusElement();
  const debouncedValue = useDebouncedValue(searchValue);

  const { data } = useGetSearchProductList(debouncedValue);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onClickItem = () => {
    setFocused(false);
    setSearchValue('');
  };

  return (
    <>
      {focused && (
        <div className='fixed bottom-0 left-0 right-0 top-0 z-30 bg-black/50' />
      )}
      <div
        ref={ref}
        className={cn(
          'relative z-30 flex max-w-[400px] flex-1 justify-between',
          className,
        )}>
        <Search className='absolute left-3 top-1/2 h-5 translate-y-[-60%] text-gray-400' />
        <Input
          className='w-full bg-gray-50 pl-11 outline-none'
          type='text'
          placeholder='Найти пиццу...'
          value={searchValue}
          onChange={handleSearch}
          onFocus={() => setFocused(true)}
        />
        <div
          className={cn(
            'invisible absolute top-14 z-30 w-full rounded-xl bg-background py-2 opacity-0 shadow-md transition-all duration-200',
            focused && data && 'visible top-12 opacity-100',
          )}>
          {data?.map((item) => (
            <div
              key={item.id}
              onClick={onClickItem}
              className='flex w-full cursor-pointer items-center gap-3 px-3 py-2 hover:bg-primary/10'>
              <img
                src={getPizzaImageUrl({ id: item.imageId }).toString()}
                alt={item.name}
                className='size-10'
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
