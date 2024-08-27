import { FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  CartInfoFormSchema,
  CartInfoFormType,
} from '../../model/cart-form-schema';

function getDefaultValues(data: {
  name: string;
  email: string;
  phone: string;
}) {
  return {
    name: data.name,
    email: data.email,
    phone: data.phone,
  };
}

interface CartFormProps {
  user?: {
    name: string;
    email: string;
    phone: string;
  };
  leftSections: React.ReactNode;
  rightSections: React.ReactNode;
  onSubmit: (data: CartInfoFormType) => void;
}

export const CartForm: FC<CartFormProps> = ({
  user,
  leftSections,
  rightSections,
  onSubmit,
}) => {
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

  useEffect(() => {
    methods.reset(
      getDefaultValues({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='flex gap-8'>
        <div className='flex flex-1 flex-col gap-8'>{leftSections}</div>
        <div className='flex max-w-[450px] flex-1 flex-col gap-8'>
          {rightSections}
        </div>
      </form>
    </FormProvider>
  );
};
