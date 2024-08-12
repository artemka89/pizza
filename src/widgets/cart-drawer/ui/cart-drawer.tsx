import { FC } from 'react';

import {
  formatAmountText,
  getTotalAmount,
  getTotalPrice,
  useGetCart,
} from '@/entities/cart';
import { useGetUser } from '@/entities/user';
import { DrawerCartItem, PayButton } from '@/features/cart';

import { Layout } from './layout';

export const CartDrawer: FC = () => {
  const user = useGetUser();
  const { data } = useGetCart(user.data?.id || '');

  const totalAmount = getTotalAmount(data?.cartItem);
  const totalPrice = getTotalPrice(data?.cartItem);
  const totalAmountText = formatAmountText(totalAmount);

  return (
    <Layout
      totalAmountText={totalAmountText}
      totalPrice={totalPrice}
      payButton={<PayButton />}>
      {data?.cartItem.map((item) => (
        <DrawerCartItem key={item.id} item={item} />
      ))}
    </Layout>
  );
};
