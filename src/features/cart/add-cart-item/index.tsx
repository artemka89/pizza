import { useMutation } from '@tanstack/react-query';

import { cartApi } from '@/shared/api/models/cart';

export function useAddCartItem() {
  return useMutation({
    mutationKey: ['add-cart'],
    mutationFn: (data: {
      cartId: string;
      productId: string;
      optionId: string;
      categoryId: string;
      ingredientsIds: string[];
      amount: number;
    }) => cartApi.addItem(data),
  });
}
