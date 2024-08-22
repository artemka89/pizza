import { useQuery } from '@tanstack/react-query';

import { getProductDetailQuery } from '@/entities/product';

import { mapPizzaDetail } from '../lib/map-pizza-detail';

export function useGetPizzaDetail(id: string) {
  return useQuery({
    ...getProductDetailQuery(id),
    enabled: !!id,
    select: mapPizzaDetail,
  });
}
