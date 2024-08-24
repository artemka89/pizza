import { z } from 'zod';

const Product = z.object({
  $id: z.string(),
  name: z.string(),
  imageId: z.string(),
});

const Ingredient = z.object({
  $id: z.string(),
  name: z.string(),
  imageId: z.string(),
  price: z.number(),
});

const Option = z.object({
  $id: z.string(),
  size: z.number().nullable(),
  price: z.number(),
  volume: z.number().nullable(),
  weight: z.number().nullable(),
});

const CartItem = z.object({
  $id: z.string(),
  product: Product,
  option: Option,
  ingredients: Ingredient.array(),
  amount: z.number(),
});

export const CartSchemaDto = z.object({
  $id: z.string(),
  cartItem: CartItem.array(),
});

export type CartDto = z.infer<typeof CartSchemaDto>;
