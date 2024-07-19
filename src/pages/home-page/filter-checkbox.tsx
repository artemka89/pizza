import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { Checkbox } from '@/shared/ui/checkbox';

interface FilterCheckboxProps {
  text: string;
  value: string;
  checked?: boolean;
  className?: string;
}

export const FilterCheckbox: FC<FilterCheckboxProps> = ({
  text,
  value,
  checked,
  className,
}) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Checkbox
        id={`checkbox-${text}-${String(value)}`}
        checked={checked}
        value={value}
        className='h-5 w-5 rounded-[8px]'
      />
      <label
        htmlFor={`checkbox-${text}-${String(value)}`}
        className='cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
        {text}
      </label>
    </div>
  );
};
