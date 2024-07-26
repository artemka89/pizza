import { FC, useState } from 'react';
import { CircleCheck } from 'lucide-react';

import { cn } from '@/shared/lib/cn';

import { getIngredientImageUrl } from '../lib/get-ingredient-image-url';
import { IngredientItemType } from '../model/types';

interface IngredientItemProps {
  item: IngredientItemType;
}

export const IngredientItem: FC<IngredientItemProps> = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false);

  const imageUrl = getIngredientImageUrl({
    id: item.imageId,
  }).toString();

  const toggleSelected = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <button
      key={item.id}
      onClick={toggleSelected}
      className={cn(
        'relative flex h-[166px] cursor-pointer flex-col items-center rounded-md border border-transparent',
        'bg-background p-2 text-center shadow-xl transition hover:shadow-md',
        {
          'border-primary shadow-sm': isSelected,
        },
      )}>
      {isSelected && (
        <CircleCheck className='absolute right-2 top-2 text-primary' />
      )}

      <img src={imageUrl} alt={item.name} className='size-[88px]' />
      <span className='mb-1 text-xs'>{item.name}</span>
      <span className='mt-auto font-bold'>{item.price} ₽</span>
    </button>
  );
};
