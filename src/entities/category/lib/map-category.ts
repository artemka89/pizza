import { CategoryDto } from '@/shared/api/models/category/category-schemas';

import { Category } from '../model/types';

export const mapCategory = (data: CategoryDto): Category => {
  return {
    id: data.$id,
    name: data.name,
    productAmount: data.products.length,
  };
};
