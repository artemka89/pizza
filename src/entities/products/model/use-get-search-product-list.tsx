import { useQuery } from '@tanstack/react-query';

import { mapSearchingProduct } from '../lib/map-searching-product';
import { searchProductListQuery } from '../queries';

export function useGetSearchingProductList(name: string) {
  return useQuery({
    ...searchProductListQuery(name),
    select: (data) => data.map(mapSearchingProduct),
    enabled: !!name,
    staleTime: 0,
  });
}
