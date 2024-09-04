import { useQuery } from '@tanstack/react-query';

import { searchProductsQuery } from '../../queries';
import { mapSearchingProduct } from '../lib/map-searching-product';

export function useGetSearchingProducts(name: string) {
  return useQuery({
    ...searchProductsQuery(name),
    select: (data) => data.map(mapSearchingProduct),
    enabled: !!name,
    staleTime: 0,
  });
}
