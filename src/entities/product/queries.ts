import { QueryOptions } from '@tanstack/react-query';

import { productApi } from '@/shared/api/models/product/product';

const productsKey = 'products';
const searchProductKey = 'search-product';

export function getProductsQuery() {
  return {
    queryKey: [productsKey],
    queryFn: () => productApi.getProducts(),
  } satisfies QueryOptions;
}

export function searchProductListQuery(name: string) {
  return {
    queryKey: [searchProductKey, name],
    queryFn: () => productApi.getPizzasNameAndImage(name),
  } satisfies QueryOptions;
}
