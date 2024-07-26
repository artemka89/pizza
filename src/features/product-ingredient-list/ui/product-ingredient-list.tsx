import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

interface ProductIngredientListProps {
  children: React.ReactNode;
  className?: string;
}

export const ProductIngredientList: FC<ProductIngredientListProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('grid grid-cols-3 gap-2', className)}>{children}</div>
  );
};
