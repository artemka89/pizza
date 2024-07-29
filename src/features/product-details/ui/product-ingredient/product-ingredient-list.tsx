import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { Title } from '@/shared/ui/title';

interface ProductIngredientListProps {
  children: React.ReactNode;
  className?: string;
}

export const ProductIngredientList: FC<ProductIngredientListProps> = ({
  children,
  className,
}) => {
  return (
    <div>
      <Title className='mb-2 text-[24px] font-medium'>Добавить по вкусу</Title>
      <div className={cn('grid grid-cols-3 gap-2', className)}>{children}</div>
    </div>
  );
};
