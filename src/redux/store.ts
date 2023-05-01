import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlise";
import items from "./slices/itemsSlise";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: { filter, cart, items }
});


export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()