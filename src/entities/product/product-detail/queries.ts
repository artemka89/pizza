import { QueryOptions } from '@tanstack/react-query';

import { productApi } from '@/shared/api/models/product';

const productsKey = 'products';

export function getProductDetailQuery(id: string) {
  return {
    queryKey: [productsKey, id],
    queryFn: () => productApi.getProductDetail(id),
  } satisfies QueryOptions;
}
