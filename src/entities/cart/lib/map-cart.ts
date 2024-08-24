import { CartDto } from '@/shared/api/models/cart/cart-schema';

import { Cart } from '../model/types';

import { getCartItemImageUrl } from './get-cart-item-image-url';

export function mapCart(data: CartDto): Cart {
  const cartItem = data.cartItem.map((item) => {
    const imageUrl = getCartItemImageUrl(item.product.imageId);

    const ingredients = item.ingredients.map((ingredient) => {
      return {
        id: ingredient.$id,
        name: ingredient.name,
        price: ingredient.price,
      };
    });

    return {
      id: item.$id,
      product: {
        id: item.product.$id,
        name: item.product.name,
        imageUrl,
      },
      option: {
        id: item.option.$id,
        size: item.option.size || undefined,
        price: item.option.price,
        weight: item.option.weight || undefined,
        volume: item.option.volume || undefined,
      },
      ingredients,
      amount: item.amount,
    };
  });

  return {
    id: data.$id,
    cartItem,
  };
}
