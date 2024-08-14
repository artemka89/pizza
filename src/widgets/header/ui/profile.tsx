import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CircleUser } from 'lucide-react';

import { useGetUser } from '@/entities/user';
import { ROUTES } from '@/shared/lib/constants/routes';
import { Button } from '@/shared/ui/button';

export const Profile: FC = () => {
  const { data } = useGetUser();

  const isAuth = !!data;

  if (!isAuth) {
    return (
      <Link to={ROUTES.AUTH}>
        <Button variant='outline'>Войти</Button>
      </Link>
    );
  }

  return (
    <Link to={ROUTES.PROFILE}>
      <Button variant='outline'>
        <CircleUser size={18} className='mr-1' />
        Профиль
      </Button>
    </Link>
  );
};
