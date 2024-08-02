import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/shared/api/models/auth';

import { SignUpSchemaType } from './schemas';

export function useSignUp() {
  return useMutation({
    mutationKey: ['sign-up'],
    mutationFn: (data: SignUpSchemaType) => authApi.signUp(data),
  });
}
