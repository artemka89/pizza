import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { useCartStore } from '@/entities/cart';
import { ROUTES } from '@/shared/lib/constants/routes';
import { Button } from '@/shared/ui/button';

interface PayButtonProps {}

export const PayButton: FC<PayButtonProps> = () => {
  const navigate = useNavigate();

  const [showCart, setShowCart] = useCartStore((state) => [
    state.show,
    state.setShow,
  ]);

  const onClickPay = () => {
    setShowCart(false);
    if (showCart) navigate(ROUTES.CHECKOUT);
  };

  return (
    <Button onClick={onClickPay} className='group relative w-full'>
      Оформить заказ
      <ArrowRight className='absolute right-14 w-5 animate-duration-1000 animate-ease-linear group-hover:animate-shake group-hover:animate-infinite' />
    </Button>
  );
};
