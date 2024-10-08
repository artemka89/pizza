export const APPWRITE = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  PROJECT_ID: import.meta.env.VITE_API_PROJECT_ID,
  DATABASE_ID: 'pizzas',

  PRODUCT_COLLECTION_ID: 'products',
  PRODUCT_BUCKET_ID: 'products',

  INGREDIENT_BUCKET_ID: 'ingredient',

  PRODUCT_CATEGORIES_COLLECTION_ID: 'categories',

  CART_COLLECTION_ID: 'carts',
  CART_ITEM_COLLECTION_ID: 'cart-item',

  ORDER_COLLECTION_ID: 'orders',
  ORDER_ITEM_COLLECTION_ID: 'order-items',
};
