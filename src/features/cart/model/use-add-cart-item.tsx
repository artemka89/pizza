import { useGetCart } from '@/entities/cart';
import { useSelectedItems } from '@/entities/product';
import { useGetUser } from '@/entities/user';

import { CreateCartItem } from './types';
import { useCreateCartItem } from './use-create-cart-item';
import { useUpdateCartItemAmount } from './use-update-item-amount';

export function useAddCartItem() {
  const user = useGetUser();
  const cart = useGetCart(user.data?.id || '');

  const createCartItem = useCreateCartItem();
  const updateCartItemAmount = useUpdateCartItemAmount();

  const [selectedOption, selectedIngredients] = useSelectedItems((state) => [
    state.option,
    state.ingredients,
  ]);

  const selectedOptionId = selectedOption?.id;
  const isItemData = !!user.data && !!cart.data && !!selectedOptionId;

  const isLoading = createCartItem.isPending || updateCartItemAmount.isPending;

  const addCartItem = (productId: string) => {
    if (!isItemData) throw Error('No data to add to cart');

    const currentCartItem = cart.data?.cartItem.find(
      (item) =>
        item.product.id === productId &&
        item.option.id === selectedOption?.id &&
        selectedIngredients.toString() === item.ingredients.toString(),
    );

    if (currentCartItem) {
      updateCartItemAmount.mutate({
        id: currentCartItem.id,
        amount: currentCartItem.amount + 1,
      });
    } else {
      const cartItemIds = cart.data.cartItem.map((item) => item.id) || [];
      const ingredientsIds = selectedIngredients.map((item) => item.id) || [];

      const data: CreateCartItem = {
        cartId: user.data.id,
        cartItemIds: cartItemIds,
        productId,
        optionId: selectedOptionId,
        ingredientsIds: ingredientsIds,
        amount: 1,
      };
      createCartItem.mutate(data);
    }
  };
  return { addCartItem, isLoading };
}
