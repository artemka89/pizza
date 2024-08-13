import React, { FC } from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';

import { OrderItemType } from '../model/types';

import { OrderItem } from './order-item';

interface OrderItemListProps {
  id: string;
  orderNumber: string;
  date: string;
  status: React.ReactNode;
  items: OrderItemType[];
  totalPrice: number;
}

export const OrderItemList: FC<OrderItemListProps> = ({
  id,
  orderNumber,
  date,
  status,
  items,
  totalPrice,
}) => {
  return (
    <AccordionItem
      value={id}
      className='rounded-2xl border-none bg-muted/60 px-6'>
      <AccordionTrigger className='flex items-center justify-between py-6'>
        <div className='mr-6 text-2xl font-bold'>Заказ #{orderNumber}</div>
        <div className='mr-4 flex flex-1 items-center justify-between'>
          <span className='text-sm text-secondary-foreground/40'>{date}</span>
          {status}
        </div>
      </AccordionTrigger>

      <AccordionContent>
        {items.map((item) => (
          <OrderItem {...item} />
        ))}

        <div className='mt-6 text-lg'>
          Итого: <span className='font-bold'>{totalPrice} ₽</span>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
