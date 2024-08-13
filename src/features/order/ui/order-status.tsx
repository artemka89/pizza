import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { Badge } from '@/shared/ui/badge';

import { OrderStatusType } from '../model/types';

const textStatusMap: Record<OrderStatusType, string> = {
  SUCCEEDED: 'Оплачен',
  CANCELLED: 'Отменен',
  PENDING: 'В обработке',
};

interface OrderStatusProps {
  status: OrderStatusType;
  className?: string;
}

export const OrderStatus: FC<OrderStatusProps> = ({ status, className }) => {
  return (
    <Badge
      className={cn(
        {
          PENDING: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100',
          SUCCEEDED: 'bg-green-100 text-green-700 hover:bg-green-100',
          CANCELLED: 'bg-red-100 text-red-700 hover:bg-red-100',
        }[status],

        'text-sm font-normal',
        className,
      )}>
      {textStatusMap[status]}
    </Badge>
  );
};
