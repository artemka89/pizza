import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';

export const CheckoutInfoFormSchema = z.object({
  name: z.string().min(2, { message: 'Обязательное поле' }),
  email: z.string().min(3, { message: 'Обязательное поле' }).email({
    message: 'Email неверный',
  }),
  phone: z
    .string()
    .refine(isValidPhoneNumber, 'Некорректный номер телефона')
    .transform((value) => parsePhoneNumber(value).number.toString()),
  address: z.string().min(2, { message: 'Обязательное поле' }),
  comment: z.string().optional(),
});

export type CheckoutInfoFormType = z.infer<typeof CheckoutInfoFormSchema>;
