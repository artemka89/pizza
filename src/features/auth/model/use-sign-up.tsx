import { useMutation } from '@tanstack/react-query';

import { useInvalidateUser } from '@/entities/user';
import { authApi } from '@/shared/api/models/auth';

import { SignUpSchemaType } from './schemas';

export function useSignUp() {
  const invalidateUser = useInvalidateUser();
  return useMutation({
    mutationKey: ['sign-up'],
    mutationFn: (data: SignUpSchemaType) => authApi.signUp(data),
    onSettled: async () => {
      await invalidateUser();
    },
  });
}
