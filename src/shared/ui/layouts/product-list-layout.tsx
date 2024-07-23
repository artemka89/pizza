import { forwardRef } from 'react';

import { cn } from '@/shared/lib/cn';

import { Title } from '../title';

interface ProductListLayoutProps {
  title: string;
  columnsNumber?: 3 | 'auto';
  children: React.ReactNode;
}

export const ProductListLayout = forwardRef<
  HTMLDivElement,
  ProductListLayoutProps
>(({ title, columnsNumber = 'auto', children }, ref) => {
  return (
    <div id={title}>
      <Title size='lg'>{title}</Title>
      <div
        ref={ref}
        className={cn(
          `my-10 grid w-full justify-center gap-4`,
          {
            3: ['grid-cols-[repeat(3,288px)]'],
            auto: ['grid-cols-[repeat(auto-fill,288px)]'],
          }[columnsNumber],
        )}>
        {children}
      </div>
    </div>
  );
});
