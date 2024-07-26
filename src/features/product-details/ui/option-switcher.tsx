import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

type Option = {
  value: string;
  name?: string;
  disabled: boolean;
};

interface OptionSwitcherProps {
  options: Option[];
  quantityType?: string;
  className?: string;
  onClickOption: (value: string) => void;
  activeOptionValue: string;
}

export const OptionSwitcher: FC<OptionSwitcherProps> = ({
  options,
  quantityType,
  className,
  activeOptionValue,
  onClickOption,
}) => {
  const activeOption = options.findIndex(
    (option) => option.value === activeOptionValue,
  );

  return (
    <div
      className={cn(
        'relative my-2 flex h-8 w-full overflow-hidden rounded-full bg-muted',
        className,
      )}>
      {options.length > 1 && (
        <div
          className={cn(
            'absolute bottom-0 left-0 top-0 p-0.5 transition-transform',
            'before:block before:h-full before:w-full before:rounded-full',
            'before:bg-background before:drop-shadow-xl',
          )}
          style={{
            width: `${100 / options.length}%`,
            transform: `translateX(${activeOption * 100}%)`,
          }}></div>
      )}

      {options.map((option) => (
        <button
          key={option.value}
          disabled={option.disabled}
          onClick={() => onClickOption(option.value)}
          className={cn(
            'z-10 flex flex-1 items-center justify-center py-1 text-xs font-medium text-foreground',
            option.value === activeOptionValue
              ? 'cursor-default text-primary'
              : 'cursor-pointer hover:drop-shadow',
            option.disabled &&
              'disabled:pointer-events-none disabled:opacity-50',
          )}>
          {option.name || option.value} {quantityType}
        </button>
      ))}
    </div>
  );
};
