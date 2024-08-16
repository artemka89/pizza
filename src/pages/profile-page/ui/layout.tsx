import { FC } from 'react';

import { PageContainer } from '@/shared/ui/layouts/page-container';
import { Title } from '@/shared/ui/title';

interface LayoutProps {
  form: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ form }) => {
  return (
    <PageContainer className='container'>
      <Title size='lg' className='p-6'>
        Личные данные
      </Title>
      {form}
    </PageContainer>
  );
};
