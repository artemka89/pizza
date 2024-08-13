import { FC } from 'react';

import { OrderAccordionList } from '@/features/order';
import { Accordion } from '@/shared/ui/accordion';
import { PageContainer } from '@/shared/ui/layouts/page-container';
import { Title } from '@/shared/ui/title';

export const OrderPage: FC = () => {
  return (
    <PageContainer className='container mb-20'>
      <Title size='lg' className='p-6'>
        Мои заказы
      </Title>
      <div className='w-full max-w-[752px]'>
        <Accordion type='single' collapsible className='space-y-4'>
          <OrderAccordionList />
        </Accordion>
      </div>
    </PageContainer>
  );
};
