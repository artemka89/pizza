import { useQuery } from '@tanstack/react-query';

import { getProductDetailQuery } from '../queries';

export function useGetProductDetail(id: string) {
  return useQuery({
    ...getProductDetailQuery(id),
    enabled: !!id,
    select: (data) => data,
  });
}
