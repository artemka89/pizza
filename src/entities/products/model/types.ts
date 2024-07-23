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
