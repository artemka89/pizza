import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { getTotalPrice, useGetCart } from '@/entities/cart';
import { useGetUser } from '@/entities/user';
import {
  CartDetails,
  CartForm,
  CartInfoFormType,
  CartInfoInputs,
  CartItem,
  ClearCartButton,
} from '@/features/cart';
import { useCreateOrder } from '@/features/order';
import { ROUTES } from '@/shared/lib/constants/routes';
import { PageContainer } from '@/shared/ui/layouts/page-container';
import { Title } from '@/shared/ui/title';

import { CartSection } from './cart-section';

const DELIVERY_PRICE = 250;

export const CartPage: FC = () => {
  const user = useGetUser();
  const cart = useGetCart(user.data?.id || '');
  const createOrder = useCreateOrder();

  const cartIsEmpty = cart.data?.cartItem.length === 0;
  const totalPrice = getTotalPrice(cart.data?.cartItem);

  const onSubmitHandler: SubmitHandler<CartInfoFormType> = (data) => {
    if (cart.data && user.data) {
      createOrder.mutate({
        ...data,
        totalPrice,
        items: cart.data.cartItem,
        userId: user.data.id,
      });
    }
  };

  if (cart.data?.cartItem.length === 0) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return (
    <PageContainer className='container mb-20'>
      <Title size='lg' className='p-6'>
        Оформление заказа
      </Title>
      <CartForm user={user.data} onSubmit={onSubmitHandler}>
        <div className='flex flex-1 flex-col gap-8'>
          <CartSection
            title='1. Корзина'
            actions={<>{!cartIsEmpty && <ClearCartButton />}</>}>
            <div className='space-y-10'>
              {cart.data?.cartItem.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </CartSection>
          <CartSection title='2. Персональная информация'>
            <CartInfoInputs />
          </CartSection>
        </div>
        <div className='flex max-w-[450px] flex-1 flex-col gap-8'>
          <CartSection title='Итого:'>
            <CartDetails
              totalPrice={totalPrice}
              deliveryPrice={DELIVERY_PRICE}
            />
          </CartSection>
        </div>
      </CartForm>
    </PageContainer>
  );
};
