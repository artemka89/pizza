import { z } from 'zod';

export const UserDtoSchema = z.object({
  $id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

export type UserDto = z.infer<typeof UserDtoSchema>;
