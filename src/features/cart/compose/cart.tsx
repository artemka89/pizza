import { FC } from 'react';

import { useGetCart } from '@/entities/cart';

import { CartContentLayout } from '../ui/cart-content';
import { CartFooter } from '../ui/cart-footer';
import { CartHeader } from '../ui/cart-header';
import { CartItem } from '../ui/cart-item';
import { CartSheet } from '../ui/cart-sheet';
import { PayButton } from '../ui/pay-button';

export const Cart: FC = () => {
  const { data } = useGetCart('66a2b7d7002431abd04c');

  const totalAmount = data?.cartItem.reduce(
    (acc, item) => acc + item.amount,
    0,
  );
  const totalPrice = data?.cartItem.reduce(
    (acc, item) => acc + item.amount * item.option.price,
    0,
  );

  if (!data) return null;

  return (
    <CartSheet>
      <CartContentLayout
        header={<CartHeader productAmount={totalAmount || 0} />}
        payButton={<PayButton />}
        footer={<CartFooter totalPrice={totalPrice || 0} />}>
        {data.cartItem.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            product={item.product}
            category={item.category}
            option={item.option}
            amount={item.amount}
            ingredients={item.ingredients}
          />
        ))}
      </CartContentLayout>
    </CartSheet>
  );
};
