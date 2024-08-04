import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useGetUser } from '@/entities/user';
import { ROUTES } from '@/shared/lib/constants/routes';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const { data } = useGetUser();

  if (data) {
    return <Navigate to={ROUTES.HOME} />;
  }
  return children;
};
