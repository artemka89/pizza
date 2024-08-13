import { QueryOptions } from '@tanstack/react-query';

import { orderApi } from '@/shared/api/models/order';

const orderKey = 'order';

export function getCategoriesQuery(userId: string) {
  return {
    queryKey: [orderKey, userId],
    queryFn: () => orderApi.getOrders(userId),
  } satisfies QueryOptions;
}
