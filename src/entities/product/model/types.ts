export interface ProductWithStartPrice {
  id: string;
  name: string;
  contents: string;
  category: string;
  imageId: string;
  startPrice: number;
}

export interface Product {
  id: string;
  name: string;
  ingredients: string;
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
  size?: number;
  weight?: number;
  price: number;
}

export interface ingredient {
  id: string;
  name: string;
  imageId: string;
  price: number;
}

export interface ProductDto {
  $id: string;
  name: string;
  category: string;
  contents: string;
  ingredients: {
    $id: string;
    name: string;
    imageId: string;
    price: number;
  }[];
  imageId: string;
  options: {
    $id: string;
    size?: number;
    weight?: number;
    price: number;
  }[];
}
