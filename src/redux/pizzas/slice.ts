import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemsSliseState, PizzaItem, Status } from "./types";
import { fetchPizzas } from "./asyncActionc";

const initialState: ItemsSliseState = {
    items: [],
    status: Status.LOADING,
};

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {      
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(
            fetchPizzas.fulfilled,
            (state, action: PayloadAction<PizzaItem[]>) => {
                state.items = action.payload;
                state.status = Status.SUCCESS;
            }
        );
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    },
});

// export const { } = itemsSlice.actions;
export default itemsSlice.reducer;
