import { useQuery } from '@tanstack/react-query';

import { mapUser } from '../lib/map-user';
import { getUserQuery } from '../queries';

export function useGetUser() {
  return useQuery({
    ...getUserQuery(),
    select: mapUser,
  });
}
