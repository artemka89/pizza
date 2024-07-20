import { useQuery } from '@tanstack/react-query';

import { mapSearchProduct } from '../lib/map-product';
import { searchProductListQuery } from '../queries';

export function useGetSearchProductList(name: string) {
  return useQuery({
    ...searchProductListQuery(name),
    select: (data) => data.map(mapSearchProduct),
    enabled: !!name,
    staleTime: 0,
  });
}
