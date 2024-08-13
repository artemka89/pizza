import { ID, Permission, Query, Role } from 'appwrite';

import { APPWRITE } from '../../config/appwrite';
import { databases } from '../../config/appwrite-config';

import { CreateOrderDto, OrderSchemaDto } from './order-schema';

export const orderApi = {
  createOrder: async (data: CreateOrderDto) => {
    const order = await databases.createDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.ORDER_COLLECTION_ID,
      ID.unique(),
      {
        orderStatus: data.orderStatus,
        paymentId: data.paymentId,
        userId: data.userId,
        userName: data.userName,
        userEmail: data.userEmail,
        userPhone: data.userPhone,
        userAddress: data.userAddress,
        comment: data.comment,
        totalPrice: data.totalPrice,
        orderItems: data.orderItems,
      },
      [
        Permission.write(Role.user(data.userId)),
        Permission.read(Role.user(data.userId)),
        Permission.update(Role.user(data.userId)),
      ],
    );
    return OrderSchemaDto.parse(order);
  },
  getOrders: async (userId: string) => {
    const orders = await databases.listDocuments(
      APPWRITE.DATABASE_ID,
      APPWRITE.ORDER_COLLECTION_ID,
      [Query.equal('userId', userId)],
    );
    return OrderSchemaDto.array().parse(orders.documents);
  },
};
