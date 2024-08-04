import { FC } from 'react';

import { Button } from '@/shared/ui/button';

import { useSignOut } from '../model/use-sign-out';

export const SignOutButton: FC = () => {
  const { mutate } = useSignOut();

  return (
    <Button onClick={() => mutate()} variant={'outline'}>
      Выйти
    </Button>
  );
};
