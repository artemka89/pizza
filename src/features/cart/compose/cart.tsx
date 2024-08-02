import { FC } from 'react';

import { useGetCart } from '@/entities/cart';

import { CartContentLayout } from '../cart-sheet/cart-content';
import { CartItem } from '../cart-sheet/cart-item';
import { CartSheet } from '../cart-sheet/cart-sheet';
import { PayButton } from '../cart-sheet/pay-button';
import { formatAmountText } from '../lib/format-amount-text';

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

  const totalAmountText = formatAmountText(totalAmount || 0);

  if (!data) return null;

  return (
    <CartSheet>
      <CartContentLayout
        payButton={<PayButton />}
        totalAmountText={totalAmountText}
        totalPrice={totalPrice || 0}>
        {data.cartItem.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartContentLayout>
    </CartSheet>
  );
};
