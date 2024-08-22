import { FC } from 'react';

import { getIngredientsText, getTotalIngredientPrice } from '@/entities/cart';
import { formatOptionFieldText } from '@/entities/product';
import { Title } from '@/shared/ui/title';

import { CartItemType } from '../model/types';

import { RemoveCartItemButton } from './remove-cart-item-button';
import { UpdateCartItemAmountButton } from './update-cart-item-amount-buttons';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: FC<CartItemProps> = ({ item }) => {
  const price =
    item.amount *
    (item.option.price + getTotalIngredientPrice(item.ingredients));

  const ingredientsText = getIngredientsText(item.ingredients);

  const optionFieldText = formatOptionFieldText(item.option);

  return (
    <div key={item.id} className='flex items-center'>
      <div className='mr-4 size-[64px]'>
        <img
          src={item.product.imageUrl}
          alt={item.product.name}
          className='h-full w-full'
        />
      </div>
      <div className='flex-1'>
        <Title size='xs'>{item.product.name}</Title>
        <div className='text-sm text-secondary-foreground'>
          {optionFieldText}
        </div>
        {item.ingredients.length > 0 && (
          <div className='text-xs leading-4 text-secondary-foreground'>
            {ingredientsText}
          </div>
        )}
      </div>
      <div className='mx-10 text-center font-bold'>{price} ₽</div>
      <div className='mx-6'>
        <UpdateCartItemAmountButton amount={item.amount} cartItemId={item.id} />
      </div>
      <RemoveCartItemButton cartItemId={item.id} />
    </div>
  );
};
