import { FC } from 'react';

import { useSelectedItems } from '@/entities/product';
import { Button } from '@/shared/ui/button';

import { useAddCartItem } from '../model/use-add-cart-item';

interface AddToCartButtonProps {
  productId: string;
  categoryId: string;
}
export const AddToCartButton: FC<AddToCartButtonProps> = ({ productId }) => {
  const [price] = useSelectedItems((state) => [state.price]);

  const { addCartItem, isLoading } = useAddCartItem();
  const addToCart = () => {
    addCartItem(productId);
  };

  return (
    <Button
      disabled={isLoading}
      onClick={addToCart}
      className='h-12 w-full text-base'>
      {isLoading ? <span>Добавляем...</span> : <span>В корзину {price} ₽</span>}
    </Button>
  );
};
