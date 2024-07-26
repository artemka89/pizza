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
