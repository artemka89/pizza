import { useMutation } from '@tanstack/react-query';

import { getTotalIngredientPrice } from '@/entities/cart';
import { ORDER_STATUS } from '@/entities/order';
import { orderApi } from '@/shared/api/models/order';

import { CreateOrderDto } from './types';
import { useRemoveAllCartItems } from './use-remove-all-cart-items';

export function useCreateOrder() {
  const clearCart = useRemoveAllCartItems();

  return useMutation({
    mutationKey: ['create-order'],
    mutationFn: (data: CreateOrderDto) => {
      const order = {
        userId: data.userId,
        userName: data.name,
        userEmail: data.email,
        userPhone: data.phone,
        orderStatus: ORDER_STATUS.PENDING,
        userAddress: data.address,
        comment: data.comment,
        paymentId: '1',
        totalPrice: data.totalPrice,
        orderItems:
          data.items.map((item) => ({
            name: item.product.name,
            imageId: item.product.imageId,
            option: `${item.option.size}, ${item.option.weight || ''}`,
            ingredients: item.ingredients
              .map((ingredient) => ingredient.name)
              .join(', '),
            amount: item.amount,
            price:
              (item.option.price + getTotalIngredientPrice(item.ingredients)) *
              item.amount,
          })) || [],
      };
      return orderApi.createOrder(order);
    },
    onSuccess: () => {
      clearCart.mutate();
    },
  });
}
