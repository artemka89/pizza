import { FC } from 'react';

type Item = {
  id: string;
  name: string;
  description: string;
  startPrice: number;
};

interface ProductCardLayoutProps {
  item: Item;
  action?: React.ReactNode;
  imageUrl: () => URL;
}

export const ProductCardLayout: FC<ProductCardLayoutProps> = ({
  item,
  action,
  imageUrl,
}) => {
  return (
    <div className='flex h-[418px] cursor-pointer flex-col items-center p-4'>
      <div className='h-[220px] w-[220px] transition-transform hover:translate-y-1'>
        <img
          src={imageUrl().toString()}
          alt={item.name}
          className='h-full w-full'
        />
      </div>
      <h4 className='pb-1 pt-2 text-center text-xl font-bold leading-tight'>
        {item.name}
      </h4>
      <div className='flex-1 overflow-hidden text-center text-sm text-muted-foreground'>
        <p className='line-clamp-4'>{item.description}</p>
      </div>

      <div className='flex w-full items-center justify-between'>
        <span className='text-lg font-bold'>от {item.startPrice} ₽</span>
        {action}
      </div>
    </div>
  );
};
