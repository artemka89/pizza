import { FC } from 'react';

import { ScrollArea } from '@/shared/ui/scroll-area';
import { Title } from '@/shared/ui/title';

interface ProductDetailLayoutProps {
  title: string;
  contents?: string;
  image?: JSX.Element;
  imageUrl?: string;
  optionFieldText?: JSX.Element;
  options: JSX.Element;
  ingredients?: JSX.Element;
  addToCartButton: JSX.Element;
}

export const ProductDetailLayout: FC<ProductDetailLayoutProps> = ({
  image,
  title,
  imageUrl,
  optionFieldText,
  contents,
  options,
  ingredients,
  addToCartButton,
}) => {
  return (
    <div className='relative flex'>
      <div className='flex h-full w-[506px] items-center justify-center'>
        {image}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className='h-[350px] w-[350px] object-cover'
          />
        )}
      </div>
      <div className='flex-1'>
        <div className='absolute -mr-[22px] w-[388px]'>
          <ScrollArea className='h-[488px] max-h-full'>
            <div className='px-7'>
              <Title className='mb-1 text-[24px] font-medium leading-none'>
                {title}
              </Title>
              {optionFieldText && <div className='mb-2'>{optionFieldText}</div>}
              {contents && (
                <div className='mb-4 text-sm leading-none'>{contents}</div>
              )}
              {options}
              {ingredients}
            </div>
          </ScrollArea>
          <div className='mx-7 mt-6'>{addToCartButton}</div>
        </div>
      </div>
    </div>
  );
};
