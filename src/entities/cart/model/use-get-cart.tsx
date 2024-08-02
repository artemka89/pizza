import { useQuery } from '@tanstack/react-query';

import { mapCart } from '../lib/map-cart';
import { getCartQuery } from '../queries';

export function useGetCart(id: string) {
  return useQuery({
    ...getCartQuery(id),
    select: mapCart,
  });
}
