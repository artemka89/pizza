import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useGetUser } from '@/entities/user';
import { ROUTES } from '@/shared/lib/constants/routes';

interface GuestGuardProps {
  children: React.ReactNode;
}

export const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const { data, isPending } = useGetUser();

  const location = useLocation();

  if (!data && !isPending) {
    return <Navigate to={ROUTES.AUTH} state={{ from: location }} replace />;
  }
  return children;
};
