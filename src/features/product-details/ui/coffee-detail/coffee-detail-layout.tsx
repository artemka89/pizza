import React, { FC } from 'react';

import { ScrollArea } from '@/shared/ui/scroll-area';
import { Title } from '@/shared/ui/title';

interface CoffeeDetailLayoutProps {
  title: string;
  imageUrl: string;
  params: string;
  contents?: string;
  addToCartButton: JSX.Element;
  children: React.ReactNode;
}

export const CoffeeDetailLayout: FC<CoffeeDetailLayoutProps> = ({
  imageUrl,
  title,
  params,
  contents,
  children,
  addToCartButton,
}) => {
  return (
    <div className='relative flex'>
      <div className='flex h-full w-[506px] items-center justify-center'>
        <img
          src={imageUrl}
          alt={title}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex-1'>
        <div className='absolute -mr-[22px]'>
          <ScrollArea className='h-[488px]'>
            <div className='px-7'>
              <Title className='mb-1 text-[24px] font-medium'>{title}</Title>
              <div className='mb-2 text-muted-foreground'>{params}</div>
              {contents && (
                <div className='mb-4 text-sm leading-none'>{contents}</div>
              )}
              {children}
            </div>
          </ScrollArea>
          <div className='mx-7 mt-6'>{addToCartButton}</div>
        </div>
      </div>
    </div>
  );
};
