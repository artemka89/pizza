import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, SortName } from "./types";


const initialState: FilterSliceState = {
    categoryId: undefined,
    sortName: SortName.RATING,
    searchValue: "",
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategotyId(state, action: PayloadAction<number | undefined>) {
            state.categoryId = action.payload;
        },
        setSortName(state, action: PayloadAction<SortName>) {
            state.sortName = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        }      
    },
});

export const { setCategotyId, setSortName, setSearchValue } =
    filterSlice.actions;

export default filterSlice.reducer;
