import { QueryOptions, useQueryClient } from '@tanstack/react-query';

import { pizzaApi } from '@/shared/api/models/pizza';

const pizzasKey = 'pizzas';
const searchProductKey = 'search-product';

export function getPizzasQuery(category: string) {
  return {
    queryKey: [pizzasKey, category],
    queryFn: () => pizzaApi.getPizzas(category),
  } satisfies QueryOptions;
}

export function useInvalidatePizzas() {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: [pizzasKey] });
}

export function searchProductListQuery(name: string) {
  return {
    queryKey: [searchProductKey, name],
    queryFn: () => pizzaApi.getPizzasNameAndImage(name),
  } satisfies QueryOptions;
}
