import { Query } from 'appwrite';

import { APPWRITE } from '@/shared/constants/appwrite';
import { databases } from '@/shared/lib/config/appwrite-config';

import {
  ProductDto,
  ProductNameDto,
  ProductNameSchemaDto,
  ProductSchemaDto,
} from './product-schemas';

export const productApi = {
  getProducts: async (): Promise<ProductDto[]> => {
    const products = await databases.listDocuments(
      APPWRITE.DATABASE_ID,
      APPWRITE.PRODUCT_COLLECTION_ID,
    );

    return ProductSchemaDto.array().parse(products.documents);
  },
  getProductById: async (id: string): Promise<ProductDto> => {
    const product = await databases.getDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.PRODUCT_COLLECTION_ID,
      id,
    );

    return ProductSchemaDto.parse(product);
  },
  getPizzasNameAndImage: async (name: string): Promise<ProductNameDto[]> => {
    const products = await databases.listDocuments(
      APPWRITE.DATABASE_ID,
      APPWRITE.PRODUCT_COLLECTION_ID,
      [
        Query.contains('name', [name]),
        Query.select(['$id', 'name', 'imageId']),
      ],
    );
    return ProductNameSchemaDto.array().parse(products.documents);
  },
};
