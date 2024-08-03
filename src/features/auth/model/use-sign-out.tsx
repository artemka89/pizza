import { useMutation } from '@tanstack/react-query';

import { useInvalidateUser } from '@/entities/user';
import { authApi } from '@/shared/api/models/auth';

export function useSignOut() {
  const invalidateUser = useInvalidateUser();
  return useMutation({
    mutationKey: ['sign-out'],
    mutationFn: () => authApi.signOut(),
    onSettled: async () => {
      await invalidateUser();
    },
  });
}
