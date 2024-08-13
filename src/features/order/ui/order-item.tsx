import { FC } from 'react';

import { getCartItemImageUrl } from '@/entities/cart';
import { Title } from '@/shared/ui/title';

interface OrderItemProps {
  id: string;
  name: string;
  imageId: string;
  option: string;
  ingredients?: string;
  amount: number;
  price: number;
}

export const OrderItem: FC<OrderItemProps> = ({
  id,
  name,
  imageId,
  option,
  ingredients,
  amount,
  price,
}) => {
  const imageUrl = getCartItemImageUrl(imageId);

  return (
    <div key={id} className='flex items-center py-4'>
      <div className='mr-4 size-[64px]'>
        <img src={imageUrl} alt={name} className='h-full w-full' />
      </div>
      <div className='flex-1'>
        <Title size='xs'>{name}</Title>
        <div className='text-sm text-secondary-foreground'>{option}</div>

        {ingredients && (
          <div className='text-xs leading-4 text-secondary-foreground'>
            + {ingredients}
          </div>
        )}
      </div>
      <div className='flex flex-col items-end'>
        <span className='text-lg font-bold'>{price} ₽</span>
        <span className='text-secondary-foreground'>{amount} шт</span>
      </div>
    </div>
  );
};
