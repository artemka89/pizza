import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/slice";
import cart from "./cart/slice";
import items from "./pizza/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: { filter, cart, items }
});


export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()