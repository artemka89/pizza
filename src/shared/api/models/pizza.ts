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

const PizzaSchemaDto = z.object({
  $id: z.string(),
  name: z.string(),
  imageId: z.string(),
  category: z.string(),
  description: z.string(),
  pizzaOptions: PizzaOptionDto.array(),
});

const PizzaNameSchemaDto = z.object({
  $id: z.string(),
  name: z.string(),
  imageId: z.string(),
});

type PizzaNameDto = z.infer<typeof PizzaNameSchemaDto>;

type PizzaDto = z.infer<typeof PizzaSchemaDto>;

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
  getPizzasNameAndImage: async (name: string): Promise<PizzaNameDto[]> => {
    const pizzas = await databases.listDocuments(
      APPWRITE.DATABASE_ID,
      APPWRITE.PIZZAS_COLLECTION_ID,
      [
        Query.contains('name', [name]),
        Query.select(['$id', 'name', 'imageId']),
      ],
    );
    return PizzaNameSchemaDto.array().parse(pizzas.documents);
  },
};
