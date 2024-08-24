import { FC } from 'react';

import { useSelectedItems } from '@/entities/product';
import { Button } from '@/shared/ui/button';

import { useCreateCartItem } from '../model/use-create-cart-item';
import { useUpdateCartItemAmount } from '../model/use-update-cart-item-amount';

interface AddToCartButtonProps {
  productId: string;
  categoryId: string;
}
export const AddToCartButton: FC<AddToCartButtonProps> = ({
  productId,
  categoryId,
}) => {
  const [price] = useSelectedItems((state) => [state.price]);

  const createCartItem = useCreateCartItem();
  const updateCartItem = useUpdateCartItemAmount();

  const addToCart = () => {
    if (createCartItem.enabled) {
      createCartItem.create({ categoryId, productId });
    }
  };

  const isLoading = createCartItem.isPending || updateCartItem.isPending;

  return (
    <Button
      disabled={isLoading}
      onClick={addToCart}
      className='h-12 w-full text-base'>
      {isLoading ? <span>Добавляем...</span> : <span>В корзину {price} ₽</span>}
    </Button>
  );
};
