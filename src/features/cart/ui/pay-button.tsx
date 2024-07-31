import { FC } from 'react';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/shared/ui/button';

interface PayButtonProps {}

export const PayButton: FC<PayButtonProps> = () => {
  return (
    <Button className='group relative w-full'>
      Оформить заказ
      <ArrowRight className='absolute right-14 w-5 animate-duration-1000 animate-ease-linear group-hover:animate-shake group-hover:animate-infinite' />
    </Button>
  );
};
