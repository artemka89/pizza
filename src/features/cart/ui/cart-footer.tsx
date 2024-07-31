import { FC } from 'react';

interface CartFooterProps {
  totalPrice: number;
}

export const CartFooter: FC<CartFooterProps> = ({ totalPrice }) => {
  return (
    <div className='flex w-full items-center justify-between'>
      <span>Итого: </span>
      <span className='mx-1 flex-1 translate-y-1 border-b border-dashed border-secondary-foreground/20' />
      <span className='font-bold'>{totalPrice} ₽</span>
    </div>
  );
};
