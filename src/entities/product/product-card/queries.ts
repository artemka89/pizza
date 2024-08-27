import { QueryOptions } from '@tanstack/react-query';

import { productApi } from '@/shared/api/models/product';

const productsKey = 'products';

export function getProductsQuery() {
  return {
    queryKey: [productsKey],
    queryFn: () => productApi.getProducts(),
  } satisfies QueryOptions;
}
