import { FC } from 'react';

import { AuthModal } from '../ui/auth-modal';
import { SignInForm } from '../ui/sign-in-form';

export const SignIn: FC = () => {
  return (
    <AuthModal title='Войти'>
      {/* eslint-disable-next-line no-console */}
      <SignInForm onSubmit={(data) => console.log(data)} />
    </AuthModal>
  );
};
