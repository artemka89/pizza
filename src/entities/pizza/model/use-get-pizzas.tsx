import { useQuery } from '@tanstack/react-query';

import { mapPizza } from '../lib/map-pizza';
import { getPizzasQuery } from '../queries';

export function useGetPizzas(category: string) {
  return useQuery({
    ...getPizzasQuery(category),
    select: (data) => data.map(mapPizza),
  });
}
