import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/slice";
import cart from "./cart/slice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { pizzaApi } from "./pizza/pizza.api";

export const store = configureStore({
    reducer: {
        [pizzaApi.reducerPath]: pizzaApi.reducer,
        filter,
        cart       
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pizzaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
