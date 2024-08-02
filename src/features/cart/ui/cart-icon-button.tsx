import { FC } from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';

import { useCartStore, useGetCart } from '@/entities/cart';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';

interface CartIconButtonProps {
  className?: string;
}

export const CartIconButton: FC<CartIconButtonProps> = ({ className }) => {
  const [setShowCart] = useCartStore((state) => [state.setShow]);

  const { data } = useGetCart('66a2b7d7002431abd04c');

  const totalAmount = data?.cartItem.reduce(
    (acc, item) => acc + item.amount,
    0,
  );
  const totalPrice = data?.cartItem.reduce(
    (acc, item) => acc + item.amount * item.option.price,
    0,
  );

  return (
    <Button
      onClick={() => setShowCart(true)}
      className={cn('group relative', className)}>
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
