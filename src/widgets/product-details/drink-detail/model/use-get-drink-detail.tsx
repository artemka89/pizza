import { useQuery } from '@tanstack/react-query';

import { getProductDetailQuery } from '@/entities/product';

import { mapDrinkDetail } from '../lib/map-drink-detail';

export function useGetDrinkDetail(id: string) {
  return useQuery({
    ...getProductDetailQuery(id),
    enabled: !!id,
    select: mapDrinkDetail,
  });
}
