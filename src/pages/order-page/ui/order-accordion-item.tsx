import React, { FC } from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/accordion';
import { Title } from '@/shared/ui/title';

interface OrderItem {
  id: string;
  name: string;
  amount: number;
  imageUrl: string;
  option: string;
  ingredients: string;
  price: number;
}

interface OrderAccordionItemProps {
  orderNumber: string;
  date: Date;
  status: React.ReactNode;
  items: OrderItem[];
  totalPrice: number;
}

export const OrderAccordionItem: FC<OrderAccordionItemProps> = ({
  orderNumber,
  date,
  status,
  items,
  totalPrice,
}) => {
  const dateText = date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  return (
    <AccordionItem
      value='item-1'
      className='rounded-2xl border-none bg-muted/60 px-6'>
      <AccordionTrigger className='flex items-center justify-between py-6'>
        <div className='mr-6 text-2xl font-bold'>Заказ #{orderNumber}</div>
        <div className='mr-4 flex flex-1 items-center justify-between'>
          <span className='text-sm text-secondary-foreground/40'>
            {dateText}
          </span>
          {status}
        </div>
      </AccordionTrigger>

      <AccordionContent>
        {items.map((item) => (
          <div key={item.id} className='flex items-center py-4'>
            <div className='mr-4 size-[64px]'>
              <img
                src={item.imageUrl}
                alt={item.name}
                className='h-full w-full'
              />
            </div>
            <div className='flex-1'>
              <Title size='xs'>{'Пицца Пепперони'}</Title>
              <div className='text-sm text-secondary-foreground'>
                {item.option}
              </div>

              <div className='text-xs leading-4 text-secondary-foreground'>
                + {item.ingredients}
              </div>
            </div>
            <div className='flex flex-col items-end'>
              <span className='text-lg font-bold'>{item.price} ₽</span>
              <span className='text-secondary-foreground'>
                {item.amount} шт
              </span>
            </div>
          </div>
        ))}

        <div className='mt-6 text-lg'>
          Итого: <span className='font-bold'>{totalPrice} ₽</span>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
