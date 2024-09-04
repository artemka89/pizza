import { FC, useState } from 'react';
import { CircleCheck } from 'lucide-react';

import { cn } from '@/shared/lib/cn';

import { formatPrice } from '../../lib/format-price';
import { ProductIngredient } from '../model/types';

interface IngredientItemProps {
  item: ProductIngredient;
  toggleItem: (item: ProductIngredient) => void;
}

export const IngredientItem: FC<IngredientItemProps> = ({
  item,
  toggleItem,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelected = () => {
    setIsSelected((prev) => !prev);
    toggleItem(item);
  };

  return (
    <button
      onClick={toggleSelected}
      className={cn(
        'relative flex h-[166px] cursor-pointer flex-col items-center rounded-md border border-transparent',
        'select-none bg-background p-2 text-center shadow-xl transition hover:shadow-md',
        {
          'border-primary shadow-sm': isSelected,
        },
      )}>
      {isSelected && (
        <CircleCheck className='absolute right-2 top-2 text-primary' />
      )}

      <img src={item.imageUrl} alt={item.name} className='size-[88px]' />
      <span className='mb-1 text-xs leading-none'>{item.name}</span>
      <span className='mt-auto font-bold'>{formatPrice(item.price)}</span>
    </button>
  );
};
