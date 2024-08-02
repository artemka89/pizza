import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().min(1, { message: 'Обязательное поле' }).email({
    message: 'Email неверный',
  }),
  password: z
    .string()
    .min(8, { message: 'Пароль должен быть более 8 символов' }),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
