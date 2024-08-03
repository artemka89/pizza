import { useMutation } from '@tanstack/react-query';

import { useInvalidateUser } from '@/entities/user';
import { authApi } from '@/shared/api/models/auth';

import { SignInSchemaType } from './schemas';

export function useSignIn() {
  const invalidateUser = useInvalidateUser();
  return useMutation({
    mutationKey: ['sign-in'],
    mutationFn: (data: SignInSchemaType) => authApi.signIn(data),
    onSettled: async () => {
      await invalidateUser();
    },
  });
}
