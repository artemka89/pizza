import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/shared/api/models/auth';

import { SignInSchemaType } from './schemas';

export function useSignIn() {
  return useMutation({
    mutationKey: ['sign-in'],
    mutationFn: (data: SignInSchemaType) => authApi.signIn(data),
  });
}
