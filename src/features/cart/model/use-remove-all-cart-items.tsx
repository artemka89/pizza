import { useMutation } from '@tanstack/react-query';

import { useInvalidateCart } from '@/entities/cart';
import { useGetUser } from '@/entities/user';
import { cartApi } from '@/shared/api/models/cart';

export function useRemoveAllCartItems() {
  const invalidateCart = useInvalidateCart();
  const user = useGetUser();
  return useMutation({
    mutationKey: ['remove-all-cart-items'],
    mutationFn: () => cartApi.removeAllItems(user.data?.id || ''),
    onSettled: async () => {
      await invalidateCart();
    },
  });
}
