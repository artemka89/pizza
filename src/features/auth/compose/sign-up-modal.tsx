import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignInSchemaType } from '../model/schemas';
import { useSignUp } from '../model/use-sign-up';
import { AuthModal } from '../ui/auth-modal';
import { SignUpForm } from '../ui/sign-up-form';

export const SignUpModal: FC = () => {
  const { mutate } = useSignUp();
  const navigate = useNavigate();

  const onCloseModal = () => {
    navigate('/');
  };

  const onSubmit = (data: SignInSchemaType) => {
    mutate(data);
  };

  return (
    <AuthModal title='Создать' onClose={onCloseModal}>
      <SignUpForm onSubmit={onSubmit} />
    </AuthModal>
  );
};
