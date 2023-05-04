import axios from "axios";
import { createAsyncThunk} from "@reduxjs/toolkit";
import { FetchPizzaByIdArgs, FetchPizzasArgs, PizzaItem } from "./types";

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

export const fetchPizzasById = createAsyncThunk<PizzaItem[], FetchPizzaByIdArgs>(
    "items/fetchPizzasStatus",
    async (id) => {        
        const { data } = await axios.get<PizzaItem[]>(
            `https://643950d84660f26eb1afe5d8.mockapi.io/items?/${id}`
        );

        return data;
    }
);