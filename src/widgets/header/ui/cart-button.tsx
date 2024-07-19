import { FC } from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';

interface CartButtonProps {
  className?: string;
}

export const CartButton: FC<CartButtonProps> = ({ className }) => {
  return (
    <Button className={cn('group relative', className)}>
      <span>{500} ₽</span>
      <span className='mx-3 h-full w-[1px] bg-primary-foreground/40' />
      <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
        <ShoppingCart size={16} />
        <span>{3}</span>
      </div>
      <ArrowRight className='absolute right-5 w-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100' />
    </Button>
  );
};
