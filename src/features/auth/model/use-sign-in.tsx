import { useMutation } from '@tanstack/react-query';

import { useInvalidateUser } from '@/entities/user';
import { authApi } from '@/shared/api/models/auth';

import { SignInSchemaType } from './schemas';

interface AppwriteError {
  message: string;
  type: string;
  code: number;
}

export function useSignIn() {
  const invalidateUser = useInvalidateUser();

  return useMutation({
    mutationKey: ['sign-in'],
    mutationFn: (data: SignInSchemaType) => authApi.signIn(data),
    onSettled: async () => {
      await invalidateUser();
    },
    onError: (error) => {
      if (isAppwriteError(error))
        // eslint-disable-next-line no-console
        console.log({
          message: error.message,
          type: error.type,
          code: error.code,
        });
    },
  });
}

export function isAppwriteError(error: unknown): error is AppwriteError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as AppwriteError).message === 'string' &&
    'type' in error &&
    typeof (error as AppwriteError).type === 'string' &&
    'code' in error &&
    typeof (error as AppwriteError).code === 'number'
  );
}
