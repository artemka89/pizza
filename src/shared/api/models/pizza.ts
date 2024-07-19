import { Query } from 'appwrite';
import { z } from 'zod';

import { APPWRITE } from '@/shared/constants/appwrite';
import { databases } from '@/shared/lib/config/appwrite-config';

const PizzaOptionDto = z.object({
  $id: z.string(),
  size: z.number(),
  weight: z.number(),
  price: z.number(),
});

const PizzaCategoryDto = z.object({
  $id: z.string(),
  name: z.string(),
});

const PizzaSchemaDto = z.object({
  $id: z.string(),
  name: z.string(),
  imageId: z.string(),
  category: z.string(),
  description: z.string(),
  categoryIds: z.string().array(),
  pizzaOptions: PizzaOptionDto.array(),
  pizzaCategories: PizzaCategoryDto.array(),
  rating: z.number(),
});

export type PizzaDto = z.infer<typeof PizzaSchemaDto>;

export const pizzaApi = {
  getPizzas: async (category: string): Promise<PizzaDto[]> => {
    const pizzas = await databases.listDocuments(
      APPWRITE.DATABASE_ID,
      APPWRITE.PIZZAS_COLLECTION_ID,
      category ? [Query.equal('categoryIds', [category])] : [],
    );

    return PizzaSchemaDto.array().parse(pizzas.documents);
  },
  getPizzaById: async (id: string): Promise<PizzaDto> => {
    const pizza = await databases.getDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.PIZZAS_COLLECTION_ID,
      id,
    );

    return PizzaSchemaDto.parse(pizza);
  },
};
