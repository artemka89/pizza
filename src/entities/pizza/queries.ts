import { QueryOptions, useQueryClient } from '@tanstack/react-query';

import { pizzaApi } from '@/shared/api/models/pizza';

const pizzasKey = 'pizzas';

export function getPizzasQuery(category: string) {
  return {
    queryKey: [pizzasKey, category],
    queryFn: async () => {
      const pizzas = await pizzaApi.getPizzas(category);
      return pizzas;
    },
  } satisfies QueryOptions;
}

export function useInvalidatePizzas() {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: [pizzasKey] });
}
