import { useMutation } from '@tanstack/react-query';

import { useResetUserQuery } from '@/entities/user';
import { authApi } from '@/shared/api/models/auth';

export function useSignOut() {
  const resetUser = useResetUserQuery();

  return useMutation({
    mutationKey: ['sign-out'],
    mutationFn: () => authApi.signOut(),
    onSettled: async () => {
      resetUser();
    },
  });
}
