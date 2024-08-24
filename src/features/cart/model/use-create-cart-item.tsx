import { useMutation } from '@tanstack/react-query';

import { useInvalidateCart } from '@/entities/cart';
import { cartApi } from '@/shared/api/models/cart';
import { useToast } from '@/shared/ui/use-toast';

import { CreateCartItem } from './types';

export function useCreateCartItem() {
  const { toast } = useToast();
  const invalidateCart = useInvalidateCart();

  return useMutation({
    mutationKey: ['create-cart-item'],
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
}
