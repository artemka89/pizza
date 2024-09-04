import { CATEGORY_TYPE } from '@/shared/lib/constants/category-type';

export interface ProductCategory {
  id: string;
  name: string;
  type: CATEGORY_TYPE;
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  imageId: string;
  imageUrl: string;
  contents?: string;
  option: {
    id: string;
    price: number;
  };
}
