import { CartDto } from '@/shared/api/models/cart/cart-schema';

import { Cart } from '../model/types';

export function mapCart(data: CartDto): Cart {
  const cartItem = data.cartItem.map((item) => {
    return {
      id: item.$id,
      product: {
        id: item.product.$id,
        name: item.product.name,
        imageId: item.product.imageId,
      },
      option: {
        id: item.option.$id,
        size: item.option.size,
        price: item.option.price,
        weight: item.option.weight || undefined,
      },
      ingredients: item.ingredients.map((ingredient) => ({
        id: ingredient.$id,
        name: ingredient.name,
        imageId: ingredient.imageId,
        price: ingredient.price,
      })),
      amount: item.amount,
      category: {
        id: item.category.$id,
        name: item.category.name,
      },
    };
  });

  return {
    id: data.$id,
    cartItem,
    totalAmount: data.totalAmount,
    totalPrice: data.totalPrice,
  };
}
