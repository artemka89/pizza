export interface CreateOrder {
  orderStatus: 'PENDING' | 'SUCCEEDED' | 'CANCELLED';
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
