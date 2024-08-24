import { useMutation } from '@tanstack/react-query';

import { useGetCart, useInvalidateCart } from '@/entities/cart';
import { useSelectedItems } from '@/entities/product';
import { useGetUser } from '@/entities/user';
import { cartApi } from '@/shared/api/models/cart';
import { useToast } from '@/shared/ui/use-toast';

interface CreateCartItem {
  cartId: string;
  cartItemIds: string[];
  productId: string;
  optionId: string;
  categoryId: string;
  ingredientsIds: string[];
  amount: number;
}

export function useCreateCartItem() {
  const { toast } = useToast();
  const invalidateCart = useInvalidateCart();

  const user = useGetUser();
  const cart = useGetCart(user.data?.id || '');

  const [selectedOption, selectedIngredients] = useSelectedItems((state) => [
    state.option,
    state.ingredients,
  ]);

  const cartItemIds = cart.data?.cartItem.map((item) => item.id) || [];
  const ingredientsIds = selectedIngredients.map((item) => item.id) || [];

  const selectedOptionId = selectedOption?.id;
  const enabled = !!user.data && !!cart.data && !!selectedOptionId;

  const mutate = useMutation({
    mutationKey: ['add-cart'],
    mutationFn: (data: CreateCartItem) => cartApi.addItem(data),
    onSettled: async () => {
      await invalidateCart();
    },
    onSuccess: () => {
      toast({
        variant: 'success',
        title: 'Товар добавлен в корзину',
      });
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Ошибка добавления в корзину',
        description: 'Повторите попытку',
      });
    },
  });

  const create = ({
    categoryId,
    productId,
  }: {
    categoryId: string;
    productId: string;
  }) => {
    if (!enabled) {
      toast({
        variant: 'destructive',
        title: 'Ошибка добавления в корзину',
        description: 'Повторите попытку',
      });
      return;
    }

    const data: CreateCartItem = {
      cartId: user.data.id,
      cartItemIds: cartItemIds,
      productId,
      optionId: selectedOptionId,
      categoryId,
      ingredientsIds: ingredientsIds,
      amount: 1,
    };

    mutate.mutate(data);
  };

  return { create, enabled, isPending: mutate.isPending };
}
