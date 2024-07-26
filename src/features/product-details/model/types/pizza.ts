import { ProductCategory, ProductIngredient, ProductOption } from './types';

export interface Pizza {
  id: string;
  name: string;
  imageId: string;
  contents: string;
  category: ProductCategory;
  options: ProductOption[];
  ingredients: ProductIngredient[];
}
