import { FC } from 'react';

import { SignInSchemaType } from '../model/schemas';
import { useSignIn } from '../model/use-sign-in';
import { AuthModal } from '../ui/auth-modal';
import { SignInForm } from '../ui/sign-in-form';

export const SignIn: FC = () => {
  const { mutate } = useSignIn();

  const onSubmit = (data: SignInSchemaType) => {
    mutate(data);
  };

  return (
    <AuthModal title='Войти'>
      <SignInForm onSubmit={onSubmit} />
    </AuthModal>
  );
};
