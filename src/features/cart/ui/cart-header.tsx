import { FC } from 'react';

import { Title } from '@/shared/ui/title';

interface CartHeaderProps {
  productAmount: number;
}

export const CartHeader: FC<CartHeaderProps> = ({ productAmount }) => {
  return (
    <Title>
      В корзине <span className='font-bold'>{productAmount} товара</span>
    </Title>
  );
};
