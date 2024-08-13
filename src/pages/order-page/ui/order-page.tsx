import { FC } from 'react';

import { Accordion } from '@/shared/ui/accordion';
import { PageContainer } from '@/shared/ui/layouts/page-container';
import { Title } from '@/shared/ui/title';

import { OrderAccordionItem } from './order-accordion-item';
import { OrderStatus } from './order-status';

export enum ORDER_STATUS {
  SUCCEEDED = 'SUCCEEDED',
  CANCELLED = 'CANCELLED',
  PENDING = 'PENDING',
}

export const OrderPage: FC = () => {
  return (
    <PageContainer className='container mb-20'>
      <Title size='lg' className='p-6'>
        Оформление заказа
      </Title>
      <div className='w-full max-w-[752px]'>
        <Accordion type='single' collapsible className='space-y-4'>
          <OrderAccordionItem
            orderNumber='A-123'
            date={new Date()}
            status={<OrderStatus status={ORDER_STATUS.PENDING} />}
            items={[
              {
                id: '1',
                name: 'Пицца сырная',
                imageUrl:
                  'https://cloud.appwrite.io/v1/storage/buckets/products/files/669e4940001b496ce8d7/preview?width=210&height=210&gravity=center&quality=70&output=webp&project=my-pizza-dev',
                price: 520,
                amount: 2,
                option: '25 см, 420 гр',
                ingredients: 'сыр',
              },
            ]}
            totalPrice={1040}
          />
        </Accordion>
      </div>
    </PageContainer>
  );
};
