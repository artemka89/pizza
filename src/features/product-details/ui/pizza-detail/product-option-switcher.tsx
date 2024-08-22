import { FC, useEffect, useState } from 'react';

import { cn } from '@/shared/lib/cn';

import { FieldValue } from '../../model/types/types';

interface ProductOptionSwitcherProps {
  fields: FieldValue[];
  setField: (value: string) => void;
}

export const ProductOptionSwitcher: FC<ProductOptionSwitcherProps> = ({
  fields,
  setField,
}) => {
  const defaultValue = fields.find((item) => item.isDefault === true);
  const [activeKey, setActiveKey] = useState(defaultValue?.key);

  const activeValueIndex = fields.findIndex((value) => value.key === activeKey);

  const onClickHandle = (key: string) => {
    setActiveKey(key);
    setField(key);
  };

  useEffect(() => {
    if (activeKey) {
      setField(activeKey);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='relative my-2 flex h-8 w-full overflow-hidden rounded-full bg-muted'>
      {fields.length > 1 && (
        <div
          className={cn(
            'absolute bottom-0 left-0 top-0 p-0.5 transition-transform',
            'before:block before:h-full before:w-full before:rounded-full',
            'before:bg-background before:drop-shadow-xl',
          )}
          style={{
            width: `${100 / fields.length}%`,
            transform: `translateX(${activeValueIndex * 100}%)`,
          }}></div>
      )}

      {fields.map((value) => (
        <button
          key={value.key}
          disabled={value.disabled}
          onClick={() => onClickHandle(value.key)}
          className={cn(
            'z-10 flex flex-1 select-none items-center justify-center py-1 text-xs font-medium text-foreground',
            value.key === activeKey
              ? 'cursor-default text-primary'
              : 'cursor-pointer hover:drop-shadow',
            value.disabled &&
              'text-foreground disabled:pointer-events-none disabled:opacity-70',
          )}>
          {value.name}
        </button>
      ))}
    </div>
  );
};
