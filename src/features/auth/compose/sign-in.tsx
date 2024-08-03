import { FC } from 'react';

import { SignInSchemaType } from '../model/schemas';
import { useSignIn } from '../model/use-sign-in';
import { SignInForm } from '../ui/sign-in-form';

interface SignInProps {
  onCloseModal?: () => void;
}

export const SignIn: FC<SignInProps> = ({ onCloseModal }) => {
  const { mutate } = useSignIn();

  const onSubmit = (data: SignInSchemaType) => {
    mutate(data, { onSuccess: () => onCloseModal?.() });
    onCloseModal?.();
  };

  return <SignInForm onSubmit={onSubmit} />;
};
