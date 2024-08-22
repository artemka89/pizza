export interface CartItemType {
  id: string;
  product: { id: string; name: string; imageUrl: string };
  category: { name: string };
  option: { size?: number; price: number; weight?: number; volume?: number };
  amount: number;
  ingredients: { name: string; price: number }[];
}
