// import axios from "axios";
// import { createAsyncThunk} from "@reduxjs/toolkit";
// import { FetchPizzasArgs, PizzaItem } from "./pizzas/types";

// export const fetchPizzas = createAsyncThunk<PizzaItem[], FetchPizzasArgs>(
//     "items/fetchPizzasStatus",
//     async (params) => {
//         const {  categoryId, sortName, search } = params;
//         const { data } = await axios.get<PizzaItem[]>(
//             `https://643950d84660f26eb1afe5d8.mockapi.io/items?&limit=8${
//                 categoryId > 0 ? `&category=${categoryId}` : ""
//             }&sortBy=${sortName}&order=desc${search}`
//         );

//         return data;
//     }
// );

// export const fetchPizzaById = createAsyncThunk<PizzaItem, string>(
//     "item/fetchPizzaStatus",
//     async (PizzaId) => {        
//         const { data } = await axios.get<PizzaItem>(
//             `https://643950d84660f26eb1afe5d8.mockapi.io/items/${PizzaId}`
//         );

//         return data;
//     }
// );