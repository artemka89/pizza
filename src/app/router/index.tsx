import { createBrowserRouter } from 'react-router-dom';

import { ProductDetailPage } from '@/pages/product-detail-page';

import { App } from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Произошла ошибка</div>,
    children: [
      {
        path: '/product/:id',
        element: <ProductDetailPage />,
      },
    ],
  },
  {
    path: '*',
    element: <div>Страница не найдена</div>,
  },
]);
