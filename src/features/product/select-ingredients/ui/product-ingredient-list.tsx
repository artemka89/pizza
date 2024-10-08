import { FC } from 'react';

import {
  IngredientItem,
  ProductIngredient,
  useSelectedItems,
} from '@/entities/product';
import { Title } from '@/shared/ui/title';

interface ProductIngredientListProps {
  items: ProductIngredient[];
}

export const ProductIngredientList: FC<ProductIngredientListProps> = ({
  items,
}) => {
  const [toggleItem] = useSelectedItems((state) => [state.toggleIngredient]);

  if (items.length < 1) {
    return null;
  }

  return (
    <div>
      <Title className='mb-2 text-[24px] font-medium'>Добавить по вкусу</Title>
      <div className='grid grid-cols-3 gap-2'>
        {items.map((item) => (
          <IngredientItem key={item.id} item={item} toggleItem={toggleItem} />
        ))}
      </div>
    </div>
  );
};
