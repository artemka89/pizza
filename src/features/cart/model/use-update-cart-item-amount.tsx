import { useMutation } from '@tanstack/react-query';

import { useInvalidateCart } from '@/entities/cart';
import { cartApi } from '@/shared/api/models/cart';
import { useToast } from '@/shared/ui/use-toast';

export function useUpdateCartItemAmount() {
  const { toast } = useToast();
  const invalidateCart = useInvalidateCart();

  return useMutation({
    mutationKey: ['update-cart-item-amount'],
    mutationFn: ({ id, amount }: { id: string; amount: number }) =>
      cartApi.updateItemAmount({ id, amount }),
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
}
