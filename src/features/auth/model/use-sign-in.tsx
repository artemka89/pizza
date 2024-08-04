import { useMutation } from '@tanstack/react-query';

import { useInvalidateUser } from '@/entities/user';
import { ErrorHandler } from '@/shared/api/config/error-handler';
import { authApi } from '@/shared/api/models/auth';
import { useToast } from '@/shared/ui/use-toast';

import { SignInSchemaType } from './schemas';

export function useSignIn() {
  const { toast } = useToast();
  const invalidateUser = useInvalidateUser();

  return useMutation({
    mutationKey: ['sign-in'],
    mutationFn: (data: SignInSchemaType) => authApi.signIn(data),
    onSettled: async () => {
      await invalidateUser();
    },
    onError: (error) => {
      const message = ErrorHandler(error);
      toast({
        variant: 'destructive',
        title: message,
        description: 'Повторите попытку.',
      });
    },
  });
}
