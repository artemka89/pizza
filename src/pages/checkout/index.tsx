import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash2 } from 'lucide-react';

import { useGetCart } from '@/entities/cart';
import { useGetUser } from '@/entities/user';
import { PageContainer } from '@/shared/ui/layouts/page-container';
import { Title } from '@/shared/ui/title';

import { CheckoutCartItem } from './checkout-cart-item';
import { CheckoutDetails } from './checkout-details';
import {
  CheckoutInfoFormSchema,
  CheckoutInfoFormType,
} from './checkout-form-schema';
import { CheckoutInfoForm } from './checkout-info-form';
import { CheckoutSection } from './checkout-section';

export const CheckoutPage: FC = () => {
  const user = useGetUser();
  const cart = useGetCart(user.data?.id || '');

  const methods = useForm<CheckoutInfoFormType>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      comment: '',
    },
    resolver: zodResolver(CheckoutInfoFormSchema),
  });

  const onSubmitHandler: SubmitHandler<CheckoutInfoFormType> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <PageContainer className='container mb-20'>
      <Title size='lg' className='p-6'>
        Оформление заказа
      </Title>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
          <div className='flex gap-8'>
            <div className='flex flex-1 flex-col gap-8'>
              <CheckoutSection
                title='1. Корзина'
                actions={
                  <div className='text-md flex items-center gap-1 text-muted-foreground'>
                    <Trash2 size={18} />
                    <span>Очистить корзину</span>
                  </div>
                }>
                <div className='space-y-10'>
                  {cart.data?.cartItem.map((item) => (
                    <CheckoutCartItem key={item.id} item={item} />
                  ))}
                </div>
              </CheckoutSection>
              <CheckoutSection title='2. Персональная информация'>
                <CheckoutInfoForm />
              </CheckoutSection>
            </div>
            <div className='flex max-w-[450px] flex-1 flex-col gap-8'>
              <CheckoutSection title='Итого:'>
                <CheckoutDetails totalPrice={2005} />
              </CheckoutSection>
            </div>
          </div>
        </form>
      </FormProvider>
    </PageContainer>
  );
};
