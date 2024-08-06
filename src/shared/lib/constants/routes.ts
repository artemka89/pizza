export const ROUTES = {
  HOME: '/',
  AUTH: '/auth',
  PRODUCTS: (id?: string) => `/products/${id}`,
  ORDER: (id?: string) => `/order/${id}`,
};
