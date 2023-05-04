import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter/slice";
import cart from "./cart/slice";
import items from "./pizzas/slice";
import { useDispatch, useSelector } from "react-redux";
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
  } from 'react-redux'

export const store = configureStore({
    reducer: { filter, cart, items, }
});


export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;