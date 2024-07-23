import { QueryOptions } from '@tanstack/react-query';

import { categoryApi } from '@/shared/api/models/category';

const categoriesKey = 'categories';

export function getCategoriesQuery() {
  return {
    queryKey: [categoriesKey],
    queryFn: () => categoryApi.getCategories(),
  } satisfies QueryOptions;
}
