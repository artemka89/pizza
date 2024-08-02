import { QueryOptions, useQueryClient } from '@tanstack/react-query';

import { authApi } from '@/shared/api/models/auth';

const authKey = 'auth';

export function getUserQuery() {
  return {
    queryKey: [authKey],
    queryFn: () => authApi.getUser(),
  } satisfies QueryOptions;
}

export function useInvalidateCart() {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: [authKey] });
}
