import { z } from 'zod';

const OrderItemSchema = z.object({
  $id: z.string(),
  name: z.string(),
  imageId: z.string(),
  option: z.string(),
  ingredients: z.string(),
  amount: z.number(),
  price: z.number(),
});

export const OrderSchemaDto = z.object({
  $id: z.string(),
  $createdAt: z.string(),
  orderStatus: z.enum(['PENDING', 'SUCCEEDED', 'CANCELLED']),
  paymentId: z.string(),
  userId: z.string(),
  userName: z.string(),
  userEmail: z.string(),
  userPhone: z.string(),
  userAddress: z.string(),
  comment: z.string().optional(),
  totalPrice: z.number(),
  orderItems: OrderItemSchema.array(),
});

export type CartDto = z.infer<typeof OrderSchemaDto>;

export interface CreateOrderDto {
  orderStatus: 'PENDING' | 'SUCCEEDED' | 'CANCELLED';
  paymentId: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  userAddress: string;
  comment?: string;
  totalPrice: number;
  orderItems: OrderItemDto[];
}

interface OrderItemDto {
  name: string;
  imageId: string;
  option: string;
  ingredients: string;
  amount: number;
  price: number;
}
