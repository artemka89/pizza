import { RootState } from "../store";

export const selectItems = (state: RootState) => state.items;
export const selectItemObj = (state: RootState) => state.items.items;