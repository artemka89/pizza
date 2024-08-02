import { FC } from 'react';

import { SignInSchemaType } from '../model/schemas';
import { useSignUp } from '../model/use-sign-up';
import { AuthModal } from '../ui/auth-modal';
import { SignUpForm } from '../ui/sign-up-form';

export const SignUpModal: FC = () => {
  const { mutate } = useSignUp();

  const onSubmit = (data: SignInSchemaType) => {
    mutate(data);
  };

  return (
    <AuthModal title='Создать'>
      <SignUpForm onSubmit={onSubmit} />
    </AuthModal>
  );
};
