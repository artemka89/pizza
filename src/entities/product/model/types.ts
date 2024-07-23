export interface ProductWithStartPrice {
  id: string;
  name: string;
  ingredients: Ingredient[];
  imageId: string;
  contents: string;
  startPrice: number;
}

export interface Product {
  id: string;
  name: string;
  ingredients: Ingredient[];
  imageId: string;
  options: ProductOption[];
}

export interface SearchProduct {
  id: string;
  name: string;
  imageId: string;
}

export interface ProductOption {
  id: string;
  size: number;
  weight: number;
  price: number;
}

export interface Ingredient {
  id: string;
  name: string;
  imageId: string;
  price: number;
}
