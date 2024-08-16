import { useMutation } from '@tanstack/react-query';

import { useInvalidateUser } from '@/entities/user';
import { profileApi } from '@/shared/api/models/profile';

export function useUpdateEmail() {
  const invalidateUser = useInvalidateUser();
  return useMutation({
    mutationKey: ['updateEmail'],
    mutationFn: (data: { email: string; password: string }) =>
      profileApi.updateEmail(data),
    onSettled: async () => {
      await invalidateUser();
    },
  });
}
