import { CategoryDto } from '@/shared/api/models/category/category-schemas';
import { CATEGORY_TYPE } from '@/shared/lib/constants/category-type';

import { Category } from '../model/types';

export const mapCategory = (data: CategoryDto): Category => {
  return {
    id: data.$id,
    name: data.name,
    type: data.type as CATEGORY_TYPE,
    productAmount: data.products.length,
    products: data.products.map((product) => ({ id: product.$id })),
  };
};
