import { useQuery } from '@tanstack/react-query';

import { getProductsQuery } from '../../queries';
import { mapProduct } from '../lib/map-product';

export function useGetProducts() {
  return useQuery({
    ...getProductsQuery(),
    select: (data) => data.map(mapProduct),
  });
}
