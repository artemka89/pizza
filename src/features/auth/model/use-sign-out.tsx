import { useMutation } from '@tanstack/react-query';

import { useResetCart } from '@/entities/cart';
import { useResetUserQuery } from '@/entities/user';
import { authApi } from '@/shared/api/models/auth';

export function useSignOut() {
  const resetUser = useResetUserQuery();
  const resetCart = useResetCart();
  return useMutation({
    mutationKey: ['sign-out'],
    mutationFn: () => authApi.signOut(),
    onSettled: async () => {
      await resetUser();
      await resetCart();
    },
  });
}
