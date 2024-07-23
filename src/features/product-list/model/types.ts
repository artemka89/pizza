export interface CategoryWithProducts {
  id: string;
  name: string;
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  imageId: string;
  ingredients: Ingredient[];
  startPrice: number;
  contents: string;
}

export interface Ingredient {
  id: string;
  name: string;
  imageId: string;
  price: number;
}
