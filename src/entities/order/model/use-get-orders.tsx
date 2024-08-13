import { useQuery } from '@tanstack/react-query';

import { mapOrder } from '../lib/map-order';
import { getCategoriesQuery } from '../queries';

export function useGetOrders(userId: string) {
  return useQuery({
    ...getCategoriesQuery(userId),
    select: (data) => data.map(mapOrder),
    enabled: !!userId,
  });
}
