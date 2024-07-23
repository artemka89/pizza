import { useQuery } from '@tanstack/react-query';

import { mapCategory } from '../lib/map-category';
import { getCategoriesQuery } from '../queries';

export function useGetCategories() {
  return useQuery({
    ...getCategoriesQuery(),
    select: (data) => data.map(mapCategory),
  });
}
