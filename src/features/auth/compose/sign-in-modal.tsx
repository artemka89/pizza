import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignInSchemaType } from '../model/schemas';
import { useSignIn } from '../model/use-sign-in';
import { AuthModal } from '../ui/auth-modal';
import { SignInForm } from '../ui/sign-in-form';

export const SignInModal: FC = () => {
  const { mutate } = useSignIn();
  const navigate = useNavigate();

  const onCloseModal = () => {
    navigate('/');
  };

  const onSubmit = (data: SignInSchemaType) => {
    mutate(data);
    onCloseModal();
  };

  return (
    <AuthModal title='Войти' onClose={onCloseModal}>
      <SignInForm onSubmit={onSubmit} />
    </AuthModal>
  );
};
