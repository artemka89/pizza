import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type PizzaItem = {
    id: string;
    title: string;
    imageUrl: string;
    types: string[];
    sizes: number[];
    price: number[];
    weight: number[];
};

enum Status {
    LOADING = "loading",
    SUCCESS = "succes",
    ERROR = "error",
}

interface ItemsSliseState {
    items: PizzaItem[];
    status: Status;
}

type FetchPizzasArgs = {
    currentPage: number;
    categoryId: number;
    sortName: string[];
    sortIndex: number;
    search: string;
};

export const fetchPizzas = createAsyncThunk<PizzaItem[], FetchPizzasArgs>(
    "items/fetchPizzasStatus",
    async (params) => {
        const { currentPage, categoryId, sortName, sortIndex, search } = params;
        const { data } = await axios.get<PizzaItem[]>(
            `https://643950d84660f26eb1afe5d8.mockapi.io/items?page=${currentPage}&limit=8${
                categoryId > 0 ? `&category=${categoryId}` : ""
            }&sortBy=${sortName[sortIndex]}&order=desc${search}`
        );

        return data;
    }
);

const initialState: ItemsSliseState = {
    items: [],
    status: Status.LOADING,
};

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<PizzaItem[]>) {
            state.items = action.payload;
        },
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

export const selectItems = (state: RootState) => state.items;

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
