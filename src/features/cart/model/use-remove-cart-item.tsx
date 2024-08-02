import { useMutation } from '@tanstack/react-query';

import { useInvalidateCart } from '@/entities/cart';
import { cartApi } from '@/shared/api/models/cart';

export function useRemoveCartItem() {
  const invalidateCart = useInvalidateCart();
  return useMutation({
    mutationKey: ['remove-cart-item'],
    mutationFn: (id: string) => cartApi.removeItem(id),
    onSettled: async () => {
      await invalidateCart();
    },
  });
}
