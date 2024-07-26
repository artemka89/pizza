import { ProductCategory } from './types';

export interface Pizza {
  id: string;
  name: string;
  imageId: string;
  contents: string;
  category: ProductCategory;
  options: PizzaOptionType[];
  ingredients: {
    id: string;
    name: string;
    price: number;
    imageId: string;
  }[];
}

export interface PizzaOptionType {
  id: string;
  size: 25 | 30 | 35;
  weight: number;
  price: number;
}
