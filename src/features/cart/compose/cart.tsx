import { FC } from 'react';

import { useGetCart } from '@/entities/cart';
import { getTotalAmount } from '@/entities/cart';
import { getTotalPrice } from '@/entities/cart';
import { useGetUser } from '@/entities/user';

import { formatAmountText } from '../lib/format-amount-text';
import { CartContentLayout } from '../ui/cart-content-layout';
import { DrawerCartItem } from '../ui/drawer-cart-item';
import { PayButton } from '../ui/pay-button';

export const Cart: FC = () => {
  const user = useGetUser();
  const { data } = useGetCart(user.data?.id || '');

  const totalAmount = getTotalAmount(data?.cartItem);
  const totalPrice = getTotalPrice(data?.cartItem);
  const totalAmountText = formatAmountText(totalAmount);

  if (!data) return null;

  return (
    <CartContentLayout
      totalAmountText={totalAmountText}
      totalPrice={totalPrice}
      payButton={<PayButton />}>
      {data.cartItem.map((item) => (
        <DrawerCartItem key={item.id} item={item} />
      ))}
    </CartContentLayout>
  );
};
