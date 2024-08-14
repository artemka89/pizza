export const ROUTES = {
  HOME: '/',
  AUTH: '/auth',
  PROFILE: '/profile',
  PRODUCTS: (id?: string) => `/products/${id}`,
  CART: '/cart',
  ORDER: '/order',
};
