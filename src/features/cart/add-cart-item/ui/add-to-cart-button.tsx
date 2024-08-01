import { FC } from 'react';

import { useGetCart } from '@/entities/cart';
import { useSelectedItems } from '@/entities/products';
import { Button } from '@/shared/ui/button';

import { useCreateCartItem } from '../model/create-cart-item';
import { useUpdateCartItem } from '../model/update-cart-items';

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
  const { data } = useGetCart('66a2b7d7002431abd04c');

  const [selectedOption, selectedIngredients, price] = useSelectedItems(
    (state) => [state.option, state.ingredients, state.price],
  );

  const currentCartItem = data?.cartItem.find(
    (item) =>
      item.product.id === productId &&
      item.option.id === selectedOption?.id &&
      selectedIngredients.toString() === item.ingredients.toString(),
  );

  const { mutate: createCartItem, isPending: isPendingCreateCartItem } =
    useCreateCartItem();

  const { mutate: updateCartItem, isPending: isPendingUpdateCartItem } =
    useUpdateCartItem();

  const addToCart = () => {
    if (currentCartItem?.id) {
      updateCartItem(
        {
          id: currentCartItem?.id || '',
          productId,
          categoryId,
          optionId: selectedOption?.id || '',
          ingredientsIds: selectedIngredients.map((item) => item.id),
          amount: currentCartItem ? currentCartItem.amount + 1 : 1,
        },
        { onSuccess: () => closeModal() },
      );
    } else {
      createCartItem(
        {
          cartId: '66a2b7d7002431abd04c',
          cartItemIds: data?.cartItem.map((item) => item.id) || [],
          productId,
          categoryId,
          optionId: selectedOption?.id || '',
          ingredientsIds: selectedIngredients.map((item) => item.id) || [],
          amount: 1,
        },
        { onSuccess: () => closeModal() },
      );
    }
  };

  return (
    <Button
      disabled={isPendingCreateCartItem || isPendingUpdateCartItem}
      onClick={addToCart}
      className='h-12 w-full text-base'>
      В корзину {price} ₽
    </Button>
  );
};
