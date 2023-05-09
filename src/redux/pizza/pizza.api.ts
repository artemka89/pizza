import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PizzaItem,  } from "./types";
import { SearchFilter } from "../filter/types";

export const pizzaApi = createApi({
    reducerPath: "pizza/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://643950d84660f26eb1afe5d8.mockapi.io/",
    }),
    endpoints: (build) => ({
        getFilteredPizzas: build.query<PizzaItem[], SearchFilter>({
            query: (searchFilter) => ({
                url: "items",
                params: {
                    category: searchFilter.categoryId,
                    sortBy: searchFilter.sortName,
                    title: searchFilter.searchValue,
                    order: searchFilter.order,                   
                }
            }),
        }),
        getPizzaById: build.query<PizzaItem, string | undefined>({
            query: (id) => `items/${id}`,
        }),
        getPizzaByPopular: build.query<PizzaItem[], string>({
            query: () => ({
                url: "items",
                params: {
                    rating: "1",
                    page: "1",
                    limit: "3",
                },
            }),
        }),
    }),
});

export const {
    useGetFilteredPizzasQuery,
    useGetPizzaByPopularQuery,
    useGetPizzaByIdQuery,
} = pizzaApi;
