import { FC } from 'react';
import { Minus, Plus } from 'lucide-react';

import { getProductImageUrl } from '@/entities/products';
import { Button } from '@/shared/ui/button';
import { TextOptionParams } from '@/shared/ui/layouts/text-option-params';
import { Separator } from '@/shared/ui/separator';
import { Title } from '@/shared/ui/title';

interface CartItemProps {
  product: { id: string; name: string; imageId: string };
  category: { name: string };
  option: { size: number; price: number; weight?: number };
  amount: number;
  ingredients: { name: string }[];
}

export const CartItem: FC<CartItemProps> = ({
  product,
  category,
  option,
  amount,
  ingredients,
}) => {
  const imageUrl = getProductImageUrl({ id: product.imageId }).toString();

  const ingredientsText = ingredients
    ?.map((item) => {
      const result = item.name.charAt(0).toLowerCase() + item.name.slice(1);
      return result;
    })
    .join(', ');

  return (
    <div className='flex gap-4 bg-background p-4'>
      <div className='size-[64px]'>
        <img src={imageUrl} alt={product.name} className='h-full w-full' />
      </div>
      <div className='flex-1'>
        <Title size='xs'>{product.name}</Title>
        <div className='text-sm text-secondary-foreground'>
          <TextOptionParams
            category={category.name}
            params={{ size: option.size, weight: option.weight }}
          />
        </div>
        {ingredients.length > 0 && (
          <div className='text-xs leading-4 text-secondary-foreground'>
            + {ingredientsText}
          </div>
        )}
        <Separator className='mb-4 mt-3' />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Button
              variant={'outline'}
              size={'icon'}
              className='size-7 rounded-lg p-0'>
              <Minus />
            </Button>
            <span className='font-bold'>{amount}</span>
            <Button
              variant={'outline'}
              size={'icon'}
              className='size-7 rounded-lg p-0'>
              <Plus />
            </Button>
          </div>
          <div className='font-bold'>{option.price} ₽</div>
        </div>
      </div>
    </div>
  );
};
