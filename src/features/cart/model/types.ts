export interface CartItemType {
  id: string;
  product: { id: string; name: string; imageId: string };
  category: { name: string };
  option: { size: number; price: number; weight?: number };
  amount: number;
  ingredients: { name: string; price: number }[];
}
