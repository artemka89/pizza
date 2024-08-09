import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { useGetCart } from '@/entities/cart';
import { useGetUser } from '@/entities/user';
import { CheckoutCartItem, ClearCartButton } from '@/features/cart';
import { CheckoutForm, CheckoutInfo } from '@/features/checkout';
import { CheckoutDetails } from '@/features/checkout';
import { CheckoutInfoFormType } from '@/features/checkout/';
import { PageContainer } from '@/shared/ui/layouts/page-container';
import { Title } from '@/shared/ui/title';

import { CheckoutSection } from './checkout-section';

export const CheckoutPage: FC = () => {
  const user = useGetUser();
  const cart = useGetCart(user.data?.id || '');

  const cartIsEmpty = cart.data?.cartItem.length === 0;

  const onSubmitHandler: SubmitHandler<CheckoutInfoFormType> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
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
                <CheckoutCartItem key={item.id} item={item} />
              ))}
            </div>
          </CheckoutSection>
          <CheckoutSection title='2. Персональная информация'>
            <CheckoutInfo />
          </CheckoutSection>
        </div>
        <div className='flex max-w-[450px] flex-1 flex-col gap-8'>
          <CheckoutSection title='Итого:'>
            <CheckoutDetails totalPrice={2005} />
          </CheckoutSection>
        </div>
      </CheckoutForm>
    </PageContainer>
  );
};
