import { QueryOptions } from '@tanstack/react-query';

import { productApi } from '@/shared/api/models/product';

const searchProductKey = 'search-product';

export function searchProductListQuery(name: string) {
  return {
    queryKey: [searchProductKey, name],
    queryFn: () => productApi.getPizzasNameAndImage(name),
  } satisfies QueryOptions;
}
