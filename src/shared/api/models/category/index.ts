import { databases } from '@/shared/api/config/appwrite-config';

import { APPWRITE } from '../../config/appwrite';

import { CategorySchemaDto } from './category-schemas';

export const categoryApi = {
  getCategories: async () => {
    const categories = await databases.listDocuments(
      APPWRITE.DATABASE_ID,
      APPWRITE.PRODUCT_CATEGORIES_COLLECTION_ID,
    );

    return CategorySchemaDto.array().parse(categories.documents);
  },
};
