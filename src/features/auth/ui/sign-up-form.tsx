import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/shared/ui/button';
import { FormInput } from '@/shared/ui/form/form-input';
import { Spinner } from '@/shared/ui/spinner';

import { SignUpSchema, SignUpSchemaType } from '../model/schemas';

interface SignUpFormProps {
  onSubmit: (data: SignUpSchemaType) => void;
}

export const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
  const methods = useForm<SignUpSchemaType>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmitHandler: SubmitHandler<SignUpSchemaType> = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <FormInput
          name='email'
          placeholder='name@example.com'
          type='email'
          label='Email'
          autoComplete='email'
          required
          disabled={false}
        />

        <FormInput
          name='password'
          placeholder='********'
          type='password'
          label='Пароль'
          autoComplete='password'
          required
          disabled={false}
        />

        <Button disabled={false} type='submit' className='mt-4 w-full'>
          {false && (
            <Spinner className='mr-2 h-4 w-4' aria-label='Загрузка входа' />
          )}
          Создать аккаунт
        </Button>
      </form>
    </FormProvider>
  );
};
