import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  PizzaItem, Status, ItemSliseState } from "./../pizzas/types";
import { fetchPizzaById } from "./../pizzas/asyncActionc";


const initialState: ItemSliseState = {
    item: null,
    status: Status.LOADING,
};

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzaById.pending, (state) => {
            state.status = Status.LOADING;
            state.item = null;
        });
        builder.addCase(
            fetchPizzaById.fulfilled,
            (state, action: PayloadAction<PizzaItem>) => {
                state.item = action.payload;
                state.status = Status.SUCCESS;
            }
        );
        builder.addCase(fetchPizzaById.rejected, (state) => {
            state.status = Status.ERROR;
            state.item = null;
        });
    },
});

// export const { } = itemSlice.actions;
export default itemSlice.reducer;
