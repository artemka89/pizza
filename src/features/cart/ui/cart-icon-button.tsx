import { FC } from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';

import { useCartStore, useGetCart } from '@/entities/cart';
import { useGetUser } from '@/entities/user';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';

import { getTotalAmount } from '../lib/get-total-amount';
import { getTotalPrice } from '../lib/get-total-price';

interface CartIconButtonProps {
  className?: string;
}

export const CartIconButton: FC<CartIconButtonProps> = ({ className }) => {
  const [setShowCart] = useCartStore((state) => [state.setShow]);
  const user = useGetUser();
  const { data } = useGetCart(user.data?.id || '');

  const totalAmount = getTotalAmount(data?.cartItem);

  const totalPrice = getTotalPrice(data?.cartItem);

  const onClickButton = () => {
    if (!data) return;
    setShowCart(true);
  };

  return (
    <Button onClick={onClickButton} className={cn('group relative', className)}>
      <span>{totalPrice} ₽</span>
      <span className='mx-3 h-full w-[1px] bg-primary-foreground/40' />
      <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
        <ShoppingCart size={16} />
        <span>{totalAmount}</span>
      </div>
      <ArrowRight className='absolute right-5 w-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100' />
    </Button>
  );
};
