import { z } from 'zod';

export const ProfileFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Обязательное поле' }),
  email: z.string().min(3, { message: 'Обязательное поле' }).email({
    message: 'Email неверный',
  }),
  phone: z
    .string()
    .refine(
      (value) =>
        /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value ?? '') ||
        /^\+7\d{10}$/.test(value ?? ''),
      'Неверный номер телефона',
    ),
  password: z.string().min(8, { message: 'Минимальная длина пароля 8' }),
});

export type ProfileFormType = z.infer<typeof ProfileFormSchema>;
