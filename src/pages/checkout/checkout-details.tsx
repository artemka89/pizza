import { FC } from 'react';

import { Button } from '@/shared/ui/button';

interface CheckoutDetailsProps {
  totalPrice: number;
}

export const CheckoutDetails: FC<CheckoutDetailsProps> = ({ totalPrice }) => {
  const deliveryPrice = 120;

  return (
    <div>
      <div className='mb-10 text-3xl font-extrabold'>
        {totalPrice + deliveryPrice} ₽
      </div>
      <div className='space-y-2'>
        <div className='flex w-full items-center justify-between text-lg font-medium'>
          <span>Стоимость товаров:</span>
          <span className='mx-1 flex-1 translate-y-1 border-b border-dashed border-secondary-foreground/20' />
          <span className='font-bold'>{totalPrice} ₽</span>
        </div>
        <div className='flex w-full items-center justify-between text-lg font-medium'>
          <span>Доставка:</span>
          <span className='mx-1 flex-1 translate-y-1 border-b border-dashed border-secondary-foreground/20' />
          <span className='font-bold'>{deliveryPrice} ₽</span>
        </div>
      </div>
      <Button type='submit' className='mt-10 h-12 w-full text-base'>
        <span>Перейти к оплате</span>
      </Button>
    </div>
  );
};
