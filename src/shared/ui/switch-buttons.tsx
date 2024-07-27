import { FC, useState } from 'react';

import { cn } from '../lib/cn';

interface SwitchButtonsProps {
  values: { key: string; name: string; disabled: boolean }[];
  initialKey?: string;
  onChangeValue: (value: string) => void;
  quantityType?: string;
}

export const SwitchButtons: FC<SwitchButtonsProps> = ({
  values,
  initialKey,
  onChangeValue,
  quantityType,
}) => {
  const [activeValue, setActiveValue] = useState<string>(
    initialKey || values[0].key,
  );

  const activeValueIndex = values.findIndex(
    (value) => value.key === activeValue,
  );

  const onClickButton = (key: string) => {
    setActiveValue(key);
    onChangeValue(key);
  };

  return (
    <div className='relative my-2 flex h-8 w-full overflow-hidden rounded-full bg-muted'>
      {values.length > 1 && (
        <div
          className={cn(
            'absolute bottom-0 left-0 top-0 p-0.5 transition-transform',
            'before:block before:h-full before:w-full before:rounded-full',
            'before:bg-background before:drop-shadow-xl',
          )}
          style={{
            width: `${100 / values.length}%`,
            transform: `translateX(${activeValueIndex * 100}%)`,
          }}></div>
      )}

      {values.map((value) => (
        <button
          key={value.key}
          disabled={value.disabled}
          onClick={() => onClickButton(value.key)}
          className={cn(
            'z-10 flex flex-1 select-none items-center justify-center py-1 text-xs font-medium text-foreground',
            value.key === activeValue
              ? 'cursor-default text-primary'
              : 'cursor-pointer hover:drop-shadow',
            value.disabled &&
              'text-foreground disabled:pointer-events-none disabled:opacity-70',
          )}>
          {value.name} {quantityType}
        </button>
      ))}
    </div>
  );
};
