import { ProductCategory } from './types';

export interface Drink {
  id: string;
  name: string;
  imageId: string;
  contents: string;
  category: ProductCategory;
  options: DrinkOption[];
}

export interface DrinkOption {
  id: string;
  size: number;
  price: number;
}
