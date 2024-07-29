import { FC, useState } from 'react';

import { cn } from '../lib/cn';

interface SwitchButtonsProps {
  values: { param: string; name: string; disabled: boolean }[];
  activeParam?: string;
  onChangeValue: (value: string) => void;
  quantityType?: string;
}

export const SwitchButtons: FC<SwitchButtonsProps> = ({
  values,
  activeParam,
  onChangeValue,
  quantityType,
}) => {
  const [active, setActive] = useState(activeParam);

  const activeValueIndex = values.findIndex((value) => value.param === active);

  const onClickButton = (key: string) => {
    setActive(key);
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
          key={value.param}
          disabled={value.disabled}
          onClick={() => onClickButton(value.param)}
          className={cn(
            'z-10 flex flex-1 select-none items-center justify-center py-1 text-xs font-medium text-foreground',
            value.param === active
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
