export interface Product {
  id: string;
  name: string;
  imageId: string;
  contents: string;
  category: ProductCategory;
  options: ProductOption[];
  ingredients: ProductIngredient[];
}

export interface ProductCategory {
  id: string;
  name: string;
  type: string;
}

export interface ProductOption {
  id: string;
  size: number;
  weight: number;
  price: number;
}

export interface ProductIngredient {
  id: string;
  name: string;
  price: number;
  imageId: string;
}

export interface FieldValue {
  key: string;
  name: string;
  disabled: boolean;
  isDefault?: boolean;
}
