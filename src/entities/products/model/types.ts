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
  options: {
    id: string;
    size: 25 | 30 | 35;
    weight: number;
    price: number;
  }[];
  ingredients: {
    id: string;
    name: string;
    price: number;
    imageId: string;
  }[];
}
