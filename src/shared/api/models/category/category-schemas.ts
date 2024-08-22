import { z } from 'zod';

export const CategorySchemaDto = z.object({
  $id: z.string(),
  name: z.string(),
  type: z.string(),
  products: z
    .object({
      $id: z.string(),
    })
    .array(),
});

export type CategoryDto = z.infer<typeof CategorySchemaDto>;
