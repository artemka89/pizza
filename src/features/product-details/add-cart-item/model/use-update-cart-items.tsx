import { useMutation } from '@tanstack/react-query';

import { useInvalidateCart } from '@/entities/cart';
import { cartApi } from '@/shared/api/models/cart';

export function useUpdateCartItem() {
  const invalidateCart = useInvalidateCart();
  return useMutation({
    mutationKey: ['update-cart'],
    mutationFn: (data: {
      id: string;
      productId: string;
      optionId: string;
      categoryId: string;
      ingredientsIds: string[];
      amount: number;
    }) => cartApi.updateItem(data),
    onSettled: async () => {
      await invalidateCart();
    },
  });
}
