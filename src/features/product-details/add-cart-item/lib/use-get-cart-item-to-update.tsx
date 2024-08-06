import { useGetCart } from '@/entities/cart';
import { useSelectedItems } from '@/entities/products';
import { useGetUser } from '@/entities/user';

export function useGetCartItemToUpdate(productId: string) {
  const user = useGetUser();
  const cart = useGetCart(user.data?.id || '');

  const [selectedOption, selectedIngredients] = useSelectedItems((state) => [
    state.option,
    state.ingredients,
  ]);

  const currentCartItem = cart.data?.cartItem.find(
    (item) =>
      item.product.id === productId &&
      item.option.id === selectedOption?.id &&
      selectedIngredients.toString() === item.ingredients.toString(),
  );

  if (currentCartItem) {
    return {
      id: currentCartItem.id,
      amount: currentCartItem.amount + 1,
    };
  }

  return undefined;
}
