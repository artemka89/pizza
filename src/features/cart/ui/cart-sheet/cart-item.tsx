import { FC } from 'react';

import { getProductImageUrl } from '@/entities/products';
import { TextOptionParams } from '@/shared/ui/layouts/text-option-params';
import { Separator } from '@/shared/ui/separator';
import { Title } from '@/shared/ui/title';

import { getIngredientsText } from '../../lib/get-ingredients-text';
import { getTotalIngredientPrice } from '../../lib/get-total-price';
import { RemoveCartItemButton } from '../remove-cart-item-button';
import { UpdateCartItemAmountButton } from '../update-cart-item-amount-buttons';

type Item = {
  id: string;
  product: { id: string; name: string; imageId: string };
  category: { name: string };
  option: { size: number; price: number; weight?: number };
  amount: number;
  ingredients: { name: string; price: number }[];
};

interface CartItemProps {
  item: Item;
}

export const CartItem: FC<CartItemProps> = ({ item }) => {
  const { id, product, category, option, amount, ingredients } = item;

  const price = option.price + getTotalIngredientPrice(ingredients);

  const ingredientsText = getIngredientsText(ingredients);

  const imageUrl = getProductImageUrl({
    id: product.imageId,
  }).toString();

  return (
    <div className='flex gap-4 bg-background p-4'>
      <div className='size-[64px]'>
        <img src={imageUrl} alt={product.name} className='h-full w-full' />
      </div>
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <Title size='xs'>{product.name}</Title>
          <RemoveCartItemButton cartItemId={id} />
        </div>
        <div className='text-sm text-secondary-foreground'>
          <TextOptionParams category={category.name} params={option} />
        </div>
        {ingredients.length > 0 && (
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
