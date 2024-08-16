import { useMutation } from '@tanstack/react-query';

import { useInvalidateUser } from '@/entities/user';
import { profileApi } from '@/shared/api/models/profile';

export function useUpdatePhone() {
  const invalidateUser = useInvalidateUser();
  return useMutation({
    mutationKey: ['updatePhone'],
    mutationFn: (data: { phone: string; password: string }) =>
      profileApi.updatePhone(data),
    onSettled: async () => {
      await invalidateUser();
    },
  });
}
