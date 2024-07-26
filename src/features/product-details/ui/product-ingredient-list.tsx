import { FC } from 'react';

import { useGetProductIngredients } from '@/entities/products';
import { cn } from '@/shared/lib/cn';

import { IngredientItem } from './ingredient-item';

interface ProductIngredientListProps {
  productId: string;
  className?: string;
}

export const ProductIngredientList: FC<ProductIngredientListProps> = ({
  productId,
  className,
}) => {
  const { data: ingredients } = useGetProductIngredients(productId);

  return (
    <div className={cn('grid grid-cols-3 gap-2', className)}>
      {ingredients?.map((ingredient) => (
        <IngredientItem key={ingredient.id} item={ingredient} />
      ))}
    </div>
  );
};
