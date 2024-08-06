import { useGetCart } from '@/entities/cart';
import { useSelectedItems } from '@/entities/products';
import { useGetUser } from '@/entities/user';

export function useGetCartItemToAdd(productId: string, categoryId: string) {
  const user = useGetUser();
  const cart = useGetCart(user.data?.id || '');

  const [selectedOption, selectedIngredients] = useSelectedItems((state) => [
    state.option,
    state.ingredients,
  ]);

  if (!user.data || !cart.data || !selectedOption) return undefined;

  const cartItemIds = cart.data.cartItem.map((item) => item.id);
  const ingredientsIds = selectedIngredients.map((item) => item.id);

  return {
    cartId: user.data.id,
    cartItemIds,
    productId,
    categoryId,
    optionId: selectedOption.id,
    ingredientsIds,
    amount: 1,
  };
}
