import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";


const initialState: FilterSliceState = {
    currentPage: 1,
    categoryId: 0,
    sortIndex: 0,
    searchValue: "",
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategotyId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSortIndex(state, action: PayloadAction<number>) {
            state.sortIndex = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFilter(state, action) {
            state.currentPage = Number(action.payload.currentPage);
            state.categoryId = Number(action.payload.categoryId);
            state.sortIndex = Number(action.payload.sortIndex);
        },
    },
});

export const {
    setCategotyId,
    setSortIndex,
    setSearchValue,
    setCurrentPage,
    setFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
