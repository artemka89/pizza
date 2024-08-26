import { OrderDto } from '@/shared/api/models/order/order-schema';

import { Order, ORDER_STATUS } from '../model/types';

export const mapOrder = (data: OrderDto): Order => {
  const orderItems = data.orderItems.map((item) => ({
    id: item.$id,
    name: item.name,
    imageId: item.imageId,
    option: item.option,
    ingredients: item.ingredients,
    amount: item.amount,
    price: item.price,
  }));

  return {
    id: data.$id,
    createdAt: new Date(data.$createdAt),
    orderStatus: ORDER_STATUS[data.orderStatus],
    paymentId: data.paymentId,
    userId: data.userId,
    userName: data.userName,
    userEmail: data.userEmail,
    userPhone: data.userPhone,
    userAddress: data.userAddress,
    comment: data.comment,
    totalPrice: data.totalPrice,
    orderItems,
  };
};
