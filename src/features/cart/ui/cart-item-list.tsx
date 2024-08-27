import { FC } from 'react';

import { useGetCart } from '@/entities/cart';
import { useGetUser } from '@/entities/user';

import { CartItem } from './cart-item';

export const CartItemList: FC = () => {
  const user = useGetUser();
  const cart = useGetCart(user.data?.id || '');
  return (
    <div className='space-y-10'>
      {cart.data?.cartItem.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};
