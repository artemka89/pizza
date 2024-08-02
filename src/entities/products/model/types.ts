export interface Products {
  id: string;
  name: string;
  type: string;
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  imageId: string;
  contents?: string;
  option: {
    id: string;
    price: number;
  };
}

export interface SearchProduct {
  id: string;
  name: string;
  imageId: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  imageId: string;
  contents: string;
  category: ProductCategory;
  options: ProductOption[];
  ingredients: ProductIngredient[];
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

export interface ProductCategory {
  id: string;
  name: string;
  type: string;
}
