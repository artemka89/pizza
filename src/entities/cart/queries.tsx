import { QueryOptions, useQueryClient } from '@tanstack/react-query';

import { cartApi } from '@/shared/api/models/cart';

const cartKey = 'cart';

export function getCartQuery(id: string) {
  return {
    queryKey: [cartKey],
    queryFn: () => cartApi.getCart(id),
  } satisfies QueryOptions;
}

export function useInvalidateCart() {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: [cartKey] });
}

export function useResetCart() {
  const queryClient = useQueryClient();
  return () => queryClient.resetQueries({ queryKey: [cartKey] });
}
