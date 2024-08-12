import { FC } from 'react';

import { getTotalIngredientPrice } from '@/entities/cart';
import { OptionText } from '@/entities/products';
import { Separator } from '@/shared/ui/separator';
import { Title } from '@/shared/ui/title';

import { getIngredientsText } from '../lib/get-ingredients-text';
import { CartItemType } from '../model/types';

import { RemoveCartItemButton } from './remove-cart-item-button';
import { UpdateCartItemAmountButton } from './update-cart-item-amount-buttons';

interface DrawerCartItemProps {
  item: CartItemType;
}

export const DrawerCartItem: FC<DrawerCartItemProps> = ({ item }) => {
  const { id, product, category, option, amount, ingredients } = item;

  const price = (option.price + getTotalIngredientPrice(ingredients)) * amount;

  const ingredientsText = getIngredientsText(ingredients);

  return (
    <div className='flex gap-4 bg-background p-4'>
      <div className='size-[64px]'>
        <img
          src={product.imageUrl}
          alt={product.name}
          className='h-full w-full'
        />
      </div>
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <Title size='xs'>{product.name}</Title>
          <RemoveCartItemButton cartItemId={id} />
        </div>
        <div className='text-sm text-secondary-foreground'>
          <OptionText category={category.name} option={option} />
        </div>
        {ingredients.length && (
          <div className='text-xs leading-4 text-secondary-foreground'>
            {ingredientsText}
          </div>
        )}
        <Separator className='mb-4 mt-3' />
        <div className='flex items-center justify-between'>
          <UpdateCartItemAmountButton amount={amount} cartItemId={id} />
          <div className='font-bold'>{price} ₽</div>
        </div>
      </div>
    </div>
  );
};
