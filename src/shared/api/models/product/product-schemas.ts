import { z } from 'zod';

const ProductOptionSchemaDto = z.object({
  $id: z.string(),
  size: z.number(),
  weight: z.number(),
  price: z.number(),
});

const IngredientSchemaDto = z.object({
  $id: z.string(),
  name: z.string(),
  imageId: z.string(),
  price: z.number(),
});

export const ProductSchemaDto = z.object({
  $id: z.string(),
  name: z.string(),
  imageId: z.string(),
  contents: z.string(),
  ingredients: IngredientSchemaDto.array(),
  options: ProductOptionSchemaDto.array(),
});

export type ProductDto = z.infer<typeof ProductSchemaDto>;

export const ProductNameSchemaDto = z.object({
  $id: z.string(),
  name: z.string(),
  imageId: z.string(),
});

export type ProductNameDto = z.infer<typeof ProductNameSchemaDto>;
