import { useMutation } from '@tanstack/react-query';

import { useInvalidateCart } from '@/entities/cart';
import { cartApi } from '@/shared/api/models/cart';

export function useCreateCartItem() {
  const invalidateCart = useInvalidateCart();
  return useMutation({
    mutationKey: ['add-cart'],
    mutationFn: (data: {
      cartId: string;
      cartItemIds: string[];
      productId: string;
      optionId: string;
      categoryId: string;
      ingredientsIds: string[];
      amount: number;
    }) => cartApi.addItem(data),
    onSettled: async () => {
      await invalidateCart();
    },
  });
}
