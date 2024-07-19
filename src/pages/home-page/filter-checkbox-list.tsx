import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

import { FilterCheckbox } from './filter-checkbox';

interface FilterCheckboxListProps {
  items: {
    name: string;
    value: string;
  }[];
  className?: string;
}

export const FilterCheckboxGroup: FC<FilterCheckboxListProps> = ({
  items,
  className,
}) => {
  return (
    <>
      <div className={cn('flex flex-col gap-3', className)}>
        {items.map((item) => (
          <FilterCheckbox
            key={item.value}
            text={item.name}
            value={item.value}
          />
        ))}
      </div>
    </>
  );
};
