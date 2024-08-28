import { QueryOptions } from '@tanstack/react-query';

import { productApi } from '@/shared/api/models/product';

const searchProductKey = 'search-product';

export function searchProductsQuery(name: string) {
  return {
    queryKey: [searchProductKey, name],
    queryFn: () => productApi.getPizzasNameAndImage(name),
  } satisfies QueryOptions;
}

const productsKey = 'products';

export function getProductsQuery() {
  return {
    queryKey: [productsKey],
    queryFn: () => productApi.getProducts(),
  } satisfies QueryOptions;
}

export function getProductDetailQuery(id: string) {
  return {
    queryKey: [productsKey, id],
    queryFn: () => productApi.getProductDetail(id),
  } satisfies QueryOptions;
}
