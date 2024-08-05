import { FC } from 'react';

import { useGetCart } from '@/entities/cart';
import { useGetUser } from '@/entities/user';

import { formatAmountText } from '../lib/format-amount-text';
import { getTotalPrice } from '../lib/get-total-price';
import { CartContentLayout } from '../ui/cart-sheet/cart-content';
import { CartItem } from '../ui/cart-sheet/cart-item';
import { CartSheet } from '../ui/cart-sheet/cart-sheet';
import { PayButton } from '../ui/pay-button';

export const Cart: FC = () => {
  const user = useGetUser();
  const { data } = useGetCart(user.data?.id || '');

  const totalAmount = data?.cartItem.reduce(
    (acc, item) => acc + item.amount,
    0,
  );

  const totalPrice = getTotalPrice(data?.cartItem);

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
