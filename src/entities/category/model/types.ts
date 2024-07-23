export interface Category {
  id: string;
  name: string;
  products: {
    id: string;
    name: string;
    imageId: string;
    contents: string;
    startPrice: number;
    ingredients?: {
      id: string;
      name: string;
      imageId: string;
      price: number;
    }[];
  }[];
}
