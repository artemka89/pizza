import { CATEGORY_TYPE } from '@/shared/lib/constants/category-type';

export interface Category {
  id: string;
  name: string;
  type: CATEGORY_TYPE;
  productAmount: number;
  products: { id: string }[];
}
