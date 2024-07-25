import { FC } from 'react';
import { useSet } from 'react-use';
import { CircleCheck } from 'lucide-react';

import { getIngredientImageUrl } from '@/entities/products';
import { cn } from '@/shared/lib/cn';

interface ProductIngredientListProps {
  ingredients: { id: string; name: string; price: number; imageId: string }[];
  className?: string;
}

export const ProductIngredientList: FC<ProductIngredientListProps> = ({
  ingredients,
  className,
}) => {
  const [selectedIngredientsIds, { toggle }] = useSet<string>(new Set([]));

  return (
    <div className={cn('grid grid-cols-3 gap-2', className)}>
      {ingredients.map((ingredient, index) => (
        <div
          key={index}
          onClick={() => toggle(ingredient.id)}
          className={cn(
            'relative flex w-[106] cursor-pointer flex-col items-center rounded-md border border-transparent bg-background p-1 text-center shadow-lg transition hover:shadow-md',
            {
              'border-primary shadow-sm': selectedIngredientsIds.has(
                ingredient.id,
              ),
            },
            className,
          )}>
          {selectedIngredientsIds.has(ingredient.id) && (
            <CircleCheck className='absolute right-2 top-2 text-primary' />
          )}

          <img
            src={getIngredientImageUrl({
              id: ingredient.imageId,
            }).toString()}
            alt={ingredient.name}
            className='size-[110px]'
          />
          <span className='mb-1 text-xs'>{ingredient.name}</span>
          <span className='mt-auto font-bold'>{ingredient.price} ₽</span>
        </div>
      ))}
    </div>
  );
};
