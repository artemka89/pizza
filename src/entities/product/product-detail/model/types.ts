import { ProductIngredient } from '../../product-ingredient/model/types';

export interface ProductDetail {
  id: string;
  name: string;
  imageId: string;
  imageUrl: string;
  contents: string;
  category: ProductCategory;
  options: ProductOption[];
  ingredients: ProductIngredient[];
}

export interface ProductOption {
  id: string;
  size?: number;
  volume?: number;
  weight?: number;
  price: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  type: string;
}
