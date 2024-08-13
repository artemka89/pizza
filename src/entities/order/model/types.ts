export interface Order {
  id: string;
  createdAt: Date;
  orderStatus: 'PENDING' | 'SUCCEEDED' | 'CANCELLED';
  paymentId: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  userAddress: string;
  comment?: string;
  totalPrice: number;
  orderItems: OrderItemType[];
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

export enum ORDER_STATUS {
  SUCCEEDED = 'SUCCEEDED',
  CANCELLED = 'CANCELLED',
  PENDING = 'PENDING',
}
