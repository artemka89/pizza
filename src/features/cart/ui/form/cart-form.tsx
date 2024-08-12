import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  CartInfoFormSchema,
  CartInfoFormType,
} from '../../model/cart-form-schema';

interface CartFormProps {
  children: React.ReactNode;
  onSubmit: (data: CartInfoFormType) => void;
}

export const CartFormProvider: FC<CartFormProps> = ({ children, onSubmit }) => {
  const methods = useForm<CartInfoFormType>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      comment: '',
    },
    resolver: zodResolver(CartInfoFormSchema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='flex gap-8'>
        {children}
      </form>
    </FormProvider>
  );
};
