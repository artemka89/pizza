import { useQuery } from '@tanstack/react-query';

import { mapProductDetail } from '../lib/map-product-detail';
import { getProductDetailQuery } from '../queries';

export function useGetProductDetail(id: string) {
  return useQuery({
    ...getProductDetailQuery(id),
    enabled: !!id,
    select: mapProductDetail,
  });
}
