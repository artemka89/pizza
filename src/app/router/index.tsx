import { createBrowserRouter } from 'react-router-dom';

import { AuthGuard, GuestGuard } from '@/features/auth';
import { AuthPage } from '@/pages/auth-page';
import { HomePage } from '@/pages/home-page';
import { ProductDetailPage } from '@/pages/product-detail-page';
import { ROUTES } from '@/shared/lib/constants/routes';

import { Layout } from '../layout';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    errorElement: <div>Произошла ошибка</div>,
    children: [
      {
        path: '',
        element: <HomePage />,
        children: [
          {
            path: ROUTES.PRODUCTS(':id'),
            element: <ProductDetailPage />,
          },
          {
            path: ROUTES.AUTH,
            element: (
              <AuthGuard>
                <AuthPage />
              </AuthGuard>
            ),
          },
        ],
      },
      {
        path: '/profile',
        element: (
          <GuestGuard>
            <div>Профиль</div>
          </GuestGuard>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <div>Страница не найдена</div>,
  },
]);
