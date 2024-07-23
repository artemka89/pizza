import { z } from 'zod';

export const CategorySchemaDto = z.object({
  $id: z.string(),
  name: z.string(),
  products: z
    .object({
      $id: z.string(),
      name: z.string(),
      imageId: z.string(),
      contents: z.string(),
      options: z
        .object({
          $id: z.string(),
          size: z.number(),
          weight: z.number(),
          price: z.number(),
        })
        .array(),
      ingredients: z
        .object({
          $id: z.string(),
          name: z.string(),
          imageId: z.string(),
          price: z.number(),
        })
        .array()
        .optional(),
    })
    .array(),
});

export type CategoryDto = z.infer<typeof CategorySchemaDto>;
