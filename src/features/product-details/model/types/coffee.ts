import { ProductCategory, ProductIngredient } from './types';

export interface Coffee {
  id: string;
  name: string;
  imageId: string;
  contents: string;
  category: ProductCategory;
  options: CoffeeOption[];
  ingredients: ProductIngredient[];
}

export interface CoffeeOption {
  id: string;
  size: number;
  weight: number;
  price: number;
}
