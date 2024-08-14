import { useMutation } from '@tanstack/react-query';

import { useInvalidateUser } from '@/entities/user';
import { profileApi } from '@/shared/api/models/profile';

export function useUpdateName() {
  const invalidateUser = useInvalidateUser();
  return useMutation({
    mutationKey: ['updateName'],
    mutationFn: (value: string) => profileApi.updateName(value),
    onSettled: async () => {
      await invalidateUser();
    },
  });
}
