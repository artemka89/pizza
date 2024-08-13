import { FC } from 'react';

import { useGetOrders } from '@/entities/order';
import { useGetUser } from '@/entities/user';
import { Accordion } from '@/shared/ui/accordion';

import { getLocaleDate } from '../lib/get-locale-date';

import { OrderItemList } from './order-item-list';
import { OrderStatus } from './order-status';

export const OrderAccordionList: FC = () => {
  const user = useGetUser();
  const orders = useGetOrders(user.data?.id || '');

  return (
    <Accordion type='single' collapsible className='space-y-4'>
      {orders.data?.map((order, i) => (
        <OrderItemList
          id={order.id}
          orderNumber={`A-12${i}`}
          date={getLocaleDate(order.createdAt)}
          status={<OrderStatus status={order.orderStatus} />}
          items={order.orderItems}
          totalPrice={order.totalPrice}
        />
      ))}
    </Accordion>
  );
};
