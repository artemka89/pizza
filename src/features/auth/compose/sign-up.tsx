import { FC } from 'react';

import { SignInSchemaType } from '../model/schemas';
import { useSignUp } from '../model/use-sign-up';
import { SignUpForm } from '../ui/sign-up-form';

interface SignInProps {
  onCloseModal?: () => void;
}

export const SignUp: FC<SignInProps> = ({ onCloseModal }) => {
  const { mutate } = useSignUp();

  const onSubmit = (data: SignInSchemaType) => {
    mutate(data, { onSuccess: () => onCloseModal?.() });
    onCloseModal?.();
  };

  return <SignUpForm onSubmit={onSubmit} />;
};
