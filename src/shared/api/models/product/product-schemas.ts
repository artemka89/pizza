import { z } from 'zod';

const ProductSchemaDto = z.object({
  $id: z.string(),
  name: z.string(),
  imageId: z.string(),
  contents: z.string().nullable(),
  options: z
    .object({
      $id: z.string(),
      price: z.number(),
    })
    .array(),
});

export const ProductsSchemaDto = z.object({
  $id: z.string(),
  name: z.string(),
  type: z.string(),
  products: ProductSchemaDto.array(),
});

export const ProductNameSchemaDto = z.object({
  $id: z.string(),
  name: z.string(),
  imageId: z.string(),
});

export const ProductDetailSchemaDto = z.object({
  $id: z.string(),
  name: z.string(),
  imageId: z.string(),
  contents: z.string().nullable(),
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
      price: z.number(),
      imageId: z.string(),
    })
    .array(),
});

export type ProductsDto = z.infer<typeof ProductsSchemaDto>;
export type ProductDto = z.infer<typeof ProductSchemaDto>;
export type ProductNameDto = z.infer<typeof ProductNameSchemaDto>;
export type ProductDetailDto = z.infer<typeof ProductDetailSchemaDto>;
