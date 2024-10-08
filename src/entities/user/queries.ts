import { QueryOptions, useQueryClient } from '@tanstack/react-query';

import { authApi } from '@/shared/api/models/auth';

const getUserKey = 'get-user';

export function getUserQuery() {
  return {
    queryKey: [getUserKey],
    queryFn: () => authApi.getUser(),
  } satisfies QueryOptions;
}

export function useInvalidateUser() {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: [getUserKey] });
}

export function useResetUserQuery() {
  const queryClient = useQueryClient();
  return () => queryClient.resetQueries({ queryKey: [getUserKey] });
}
