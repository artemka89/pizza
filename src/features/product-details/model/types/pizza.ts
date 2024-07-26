import { ProductCategory, ProductIngredient } from './types';

export interface Pizza {
  id: string;
  name: string;
  imageId: string;
  contents: string;
  category: ProductCategory;
  options: PizzaOptionType[];
  ingredients: ProductIngredient[];
}

export interface PizzaOptionType {
  id: string;
  size: number;
  weight: number;
  price: number;
}
