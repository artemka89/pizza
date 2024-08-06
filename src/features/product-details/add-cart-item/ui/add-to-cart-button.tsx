import { FC } from 'react';

import { useSelectedItems } from '@/entities/products';
import { Button } from '@/shared/ui/button';

import { useGetCartItemToAdd } from '../lib/use-get-cart-item-to-add';
import { useGetCartItemToUpdate } from '../lib/use-get-cart-item-to-update';
import { useCreateCartItem } from '../model/use-create-cart-item';
import { useUpdateCartItemAmount } from '../model/use-update-cart-item-amount';

interface AddToCartButtonProps {
  productId: string;
  categoryId: string;
  closeModal: () => void;
}
export const AddToCartButton: FC<AddToCartButtonProps> = ({
  closeModal,
  productId,
  categoryId,
}) => {
  const createCartItem = useCreateCartItem();
  const updateCartItem = useUpdateCartItemAmount();

  const [price] = useSelectedItems((state) => [state.price]);

  const cartItemToAdd = useGetCartItemToAdd(productId, categoryId);
  const cartItemToUpdate = useGetCartItemToUpdate(productId);

  const addToCart = () => {
    if (cartItemToUpdate) {
      updateCartItem.mutate(cartItemToUpdate, {
        onSuccess: () => closeModal(),
      });
    } else {
      cartItemToAdd &&
        createCartItem.mutate(cartItemToAdd, { onSuccess: () => closeModal() });
    }
  };

  return (
    <Button
      disabled={createCartItem.isPending || updateCartItem.isPending}
      onClick={addToCart}
      className='h-12 w-full text-base'>
      В корзину {price} ₽
    </Button>
  );
};
