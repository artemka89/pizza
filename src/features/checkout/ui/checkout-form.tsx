import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  CheckoutInfoFormSchema,
  CheckoutInfoFormType,
} from '../model/checkout-form-schema';

interface CheckoutFormProps {
  children: React.ReactNode;
  onSubmit: (data: CheckoutInfoFormType) => void;
}

export const CheckoutForm: FC<CheckoutFormProps> = ({ children, onSubmit }) => {
  const methods = useForm<CheckoutInfoFormType>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      comment: '',
    },
    resolver: zodResolver(CheckoutInfoFormSchema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='flex gap-8'>
        {children}
      </form>
    </FormProvider>
  );
};
