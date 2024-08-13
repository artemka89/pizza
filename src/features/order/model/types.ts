export interface CreateOrder {
  orderStatus: OrderStatusType;
  paymentId: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  userAddress: string;
  comment?: string;
  totalPrice: number;
  orderItems: {
    name: string;
    imageId: string;
    option: string;
    ingredients: string;
    amount: number;
    price: number;
  }[];
}

export interface OrderItemType {
  id: string;
  name: string;
  imageId: string;
  option: string;
  ingredients: string;
  amount: number;
  price: number;
}

export type OrderStatusType = 'PENDING' | 'SUCCEEDED' | 'CANCELLED';
