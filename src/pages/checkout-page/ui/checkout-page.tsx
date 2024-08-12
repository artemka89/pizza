import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';

import {
  getTotalIngredientPrice,
  getTotalPrice,
  useGetCart,
} from '@/entities/cart';
import { useGetUser } from '@/entities/user';
import { CartItem, ClearCartButton } from '@/features/cart';
import {
  CheckoutForm,
  CheckoutInfo,
  useCreateOrder,
} from '@/features/checkout';
import { CheckoutDetails } from '@/features/checkout';
import { CheckoutInfoFormType } from '@/features/checkout/';
import { PageContainer } from '@/shared/ui/layouts/page-container';
import { Title } from '@/shared/ui/title';

import { CheckoutSection } from './checkout-section';

const DELIVERY_PRICE = 250;

export const CheckoutPage: FC = () => {
  const user = useGetUser();
  const cart = useGetCart(user.data?.id || '');
  const createOrder = useCreateOrder();
  const cartIsEmpty = cart.data?.cartItem.length === 0;
  const totalPrice = getTotalPrice(cart.data?.cartItem);

  const onSubmitHandler: SubmitHandler<CheckoutInfoFormType> = (data) => {
    createOrder.mutate({
      userId: user.data?.id || '',
      userName: data.name,
      userEmail: data.email,
      userPhone: data.phone,
      orderStatus: 'PENDING',
      userAddress: data.address,
      comment: data.comment,
      paymentId: '1',
      totalPrice: totalPrice + DELIVERY_PRICE,
      orderItems:
        cart.data?.cartItem.map((item) => ({
          name: item.product.name,
          imageId: item.product.imageUrl,
          option: `${item.option.size}, ${item.option.weight || ''}`,
          ingredients: item.ingredients
            .map((ingredient) => ingredient.name)
            .join(', '),
          amount: item.amount,
          price:
            (totalPrice + getTotalIngredientPrice(item.ingredients)) *
            item.amount,
        })) || [],
    });
  };

  return (
    <PageContainer className='container mb-20'>
      <Title size='lg' className='p-6'>
        Оформление заказа
      </Title>
      <CheckoutForm onSubmit={onSubmitHandler}>
        <div className='flex flex-1 flex-col gap-8'>
          <CheckoutSection
            title='1. Корзина'
            actions={<>{!cartIsEmpty && <ClearCartButton />}</>}>
            <div className='space-y-10'>
              {cart.data?.cartItem.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </CheckoutSection>
          <CheckoutSection title='2. Персональная информация'>
            <CheckoutInfo />
          </CheckoutSection>
        </div>
        <div className='flex max-w-[450px] flex-1 flex-col gap-8'>
          <CheckoutSection title='Итого:'>
            <CheckoutDetails
              totalPrice={totalPrice}
              deliveryPrice={DELIVERY_PRICE}
            />
          </CheckoutSection>
        </div>
      </CheckoutForm>
    </PageContainer>
  );
};
