export interface Cart {
  id: string;
  cartItem: CartItem[];
  totalAmount: number;
  totalPrice: number;
}

interface CartItem {
  id: string;
  product: Product;
  category: { id: string; name: string };
  option: Option;
  ingredients: Ingredient[];
  amount: number;
}

interface Product {
  id: string;
  name: string;
  imageId: string;
}

interface Option {
  id: string;
  size: number;
  price: number;
  weight?: number;
}

interface Ingredient {
  id: string;
  name: string;
  imageId: string;
  price: number;
}
