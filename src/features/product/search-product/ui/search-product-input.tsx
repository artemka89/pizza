import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

import { SearchProductCard, useGetSearchingProducts } from '@/entities/product';
import { cn } from '@/shared/lib/cn';
import { ROUTES } from '@/shared/lib/constants/routes';
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

  const { data = [] } = useGetSearchingProducts(debouncedValue);

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
        <Search className='absolute left-3 top-1/2 h-5 translate-y-[-50%] text-muted-foreground' />
        <Input
          className='w-full bg-muted pl-11 outline-none'
          type='text'
          placeholder='Найти пиццу...'
          value={searchValue}
          onChange={handleSearch}
          onFocus={() => setFocused(true)}
        />
        <div
          className={cn(
            'invisible absolute top-14 z-30 w-full rounded-xl bg-background opacity-0 shadow-md transition-all duration-200',
            data.length > 0 && focused && 'visible top-12 opacity-100',
          )}>
          {data.map((item) => (
            <Link
              to={ROUTES.PRODUCTS(item.id)}
              key={item.id}
              onClick={onClickItem}>
              <SearchProductCard name={item.name} imageUrl={item.imageUrl} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
