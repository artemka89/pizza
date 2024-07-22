import { useQuery } from '@tanstack/react-query';

import { mapProduct } from '../lib/map-product';
import { getProductsQuery } from '../queries';

export function useGetProducts() {
  return useQuery({
    ...getProductsQuery(),
    select: (data) => data.map(mapProduct),
  });
}
