import { ProductCategory, ProductIngredient } from './types';

export interface Pizza {
  id: string;
  name: string;
  imageId: string;
  contents: string;
  category: ProductCategory;
  options: PizzaOption[];
  ingredients: ProductIngredient[];
}

export interface PizzaOption {
  id: string;
  size: number;
  weight: number;
  price: number;
}
