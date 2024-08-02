import { useMutation } from '@tanstack/react-query';

import { useCartStore, useInvalidateCart } from '@/entities/cart';
import { cartApi } from '@/shared/api/models/cart';

export function useCreateCartItem() {
  const cartId = useCartStore((state) => state.cartId);
  const invalidateCart = useInvalidateCart();
  return useMutation({
    mutationKey: ['add-cart'],
    mutationFn: (data: {
      cartItemIds: string[];
      productId: string;
      optionId: string;
      categoryId: string;
      ingredientsIds: string[];
      amount: number;
    }) => cartApi.addItem({ ...data, cartId }),
    onSettled: async () => {
      await invalidateCart();
    },
  });
}
