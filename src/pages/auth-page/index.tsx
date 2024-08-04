import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignIn, SignUp } from '@/features/auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';

import { AuthModal } from './auth-modal';

export const AuthPage: FC = () => {
  const navigate = useNavigate();

  const onCloseModal = () => {
    navigate('/');
  };

  return (
    <AuthModal onClose={onCloseModal}>
      <Tabs defaultValue='sign-in'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='sign-in'>Войти</TabsTrigger>
          <TabsTrigger value='sign-up'>Создать</TabsTrigger>
        </TabsList>
        <TabsContent value='sign-in'>
          <SignIn onCloseModal={onCloseModal} />
        </TabsContent>
        <TabsContent value='sign-up'>
          <SignUp />
        </TabsContent>
      </Tabs>
    </AuthModal>
  );
};
