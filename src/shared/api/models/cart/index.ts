import { APPWRITE } from '../../config/appwrite';
import { databases } from '../../config/appwrite-config';

import { CartDto, CartSchemaDto } from './cart-schema';

export const cartApi = {
  getCart: async (id: string): Promise<CartDto> => {
    const cart = await databases.getDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.CART_COLLECTION_ID,
      id,
    );

    return CartSchemaDto.parse(cart);
  },
  addItem: async (data: {
    cartId: string;
    cartItemIds: string[];
    productId: string;
    optionId: string;
    categoryId: string;
    ingredientsIds: string[];
    amount: number;
  }) => {
    const item = await databases.updateDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.CART_COLLECTION_ID,
      data.cartId,
      {
        cartItem: [
          ...data.cartItemIds,
          {
            amount: 1,
            product: { $id: data.productId },
            category: { $id: data.categoryId },
            option: { $id: data.optionId },
            ingredients: data.ingredientsIds.map((id) => id),
          },
        ],
      },
    );
    return item;
  },
  updateItem: async (data: {
    id: string;
    productId: string;
    optionId: string;
    categoryId: string;
    ingredientsIds: string[];
    amount: number;
  }) => {
    const item = await databases.updateDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.CART_ITEM_COLLECTION_ID,
      data.id,
      {
        amount: data.amount,
        product: { $id: data.productId },
        category: { $id: data.categoryId },
        option: { $id: data.optionId },
        ingredients: data.ingredientsIds.map((id) => id),
      },
    );
    return item;
  },
};
