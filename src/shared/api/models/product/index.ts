import { Query } from 'appwrite';

import { databases } from '@/shared/api/config/appwrite-config';

import { APPWRITE } from '../../config/appwrite';

import {
  ProductDetailSchemaDto,
  ProductNameSchemaDto,
  ProductsSchemaDto,
} from './product-schemas';

export const productApi = {
  getProducts: async () => {
    const categories = await databases.listDocuments(
      APPWRITE.DATABASE_ID,
      APPWRITE.PRODUCT_CATEGORIES_COLLECTION_ID,
    );

    return ProductsSchemaDto.array().parse(categories.documents);
  },
  getPizzasNameAndImage: async (name: string) => {
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
  getProductDetail: async (id: string) => {
    const product = await databases.getDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.PRODUCT_COLLECTION_ID,
      id,
    );
    return ProductDetailSchemaDto.parse(product);
  },
};
