import React, { FC } from 'react';

import { ScrollArea } from '@/shared/ui/scroll-area';
import { Title } from '@/shared/ui/title';

interface ProductDetailLayoutProps {
  title: string;
  image: JSX.Element;
  params?: JSX.Element;
  contents?: string;
  addToCartButton: JSX.Element;
  children: React.ReactNode;
}

export const ProductDetailLayout: FC<ProductDetailLayoutProps> = ({
  image,
  title,
  params,
  contents,
  children,
  addToCartButton,
}) => {
  return (
    <div className='relative flex'>
      <div className='flex h-full w-[506px] items-center justify-center'>
        {image}
      </div>
      <div className='flex-1'>
        <div className='absolute -mr-[22px] w-[388px]'>
          <ScrollArea className='h-[488px] max-h-full'>
            <div className='px-7'>
              <Title className='mb-1 text-[24px] font-medium leading-none'>
                {title}
              </Title>
              {params && <div className='mb-2'>{params}</div>}
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
