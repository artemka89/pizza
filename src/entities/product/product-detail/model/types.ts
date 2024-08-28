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

export interface ProductIngredient {
  id: string;
  name: string;
  price: number;
  imageId: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  type: string;
}
