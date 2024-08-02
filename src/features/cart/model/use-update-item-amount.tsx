import { useMutation } from '@tanstack/react-query';

import { useInvalidateCart } from '@/entities/cart';
import { cartApi } from '@/shared/api/models/cart';

export function useUpdateCartItemAmount() {
  const invalidateCart = useInvalidateCart();
  return useMutation({
    mutationKey: ['plus-cart-item-amount'],
    mutationFn: ({ id, amount }: { id: string; amount: number }) =>
      cartApi.updateItemAmount({ id, amount }),
    onSettled: async () => {
      await invalidateCart();
    },
  });
}
