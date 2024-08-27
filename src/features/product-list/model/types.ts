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
  imageUrl: string;
  contents?: string;
  option: {
    id: string;
    price: number;
  };
}
