export interface CartItemType {
  id: string;
  product: { id: string; name: string; imageUrl: string; imageId: string };
  option: { size?: number; price: number; weight?: number; volume?: number };
  amount: number;
  ingredients: { name: string; price: number }[];
}

export interface CreateOrderDto {
  userId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  comment?: string;
  totalPrice: number;
  items: CartItemType[];
}
