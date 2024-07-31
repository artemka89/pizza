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
};
