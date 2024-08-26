export interface Cart {
  id: string;
  cartItem: CartItem[];
}

interface CartItem {
  id: string;
  product: Product;
  option: Option;
  ingredients: Ingredient[];
  amount: number;
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  imageId: string;
}

export interface Option {
  id: string;
  size?: number;
  price: number;
  volume?: number;
  weight?: number;
}

export interface Ingredient {
  id: string;
  name: string;
  price: number;
}
