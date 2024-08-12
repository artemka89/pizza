import { FC } from 'react';

import { getTotalIngredientPrice } from '@/entities/cart';
import { getProductImageUrl } from '@/entities/products';
import { TextOptionParams } from '@/shared/ui/layouts/text-option-params';
import { Title } from '@/shared/ui/title';

import { getIngredientsText } from '../lib/get-ingredients-text';
import { CartItemType } from '../model/types';

import { RemoveCartItemButton } from './remove-cart-item-button';
import { UpdateCartItemAmountButton } from './update-cart-item-amount-buttons';

interface CheckoutCartItemProps {
  item: CartItemType;
}

export const CheckoutCartItem: FC<CheckoutCartItemProps> = ({ item }) => {
  const price =
    item.amount *
    (item.option.price + getTotalIngredientPrice(item.ingredients));

  const ingredientsText = getIngredientsText(item.ingredients);

  const imageUrl = getProductImageUrl({
    id: item.product.imageId,
  }).toString();

  return (
    <div key={item.id} className='flex items-center'>
      <div className='mr-4 size-[64px]'>
        <img src={imageUrl} alt={item.product.name} className='h-full w-full' />
      </div>
      <div className='flex-1'>
        <Title size='xs'>{item.product.name}</Title>
        <div className='text-sm text-secondary-foreground'>
          <TextOptionParams
            category={item.category.name}
            params={item.option}
          />
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
