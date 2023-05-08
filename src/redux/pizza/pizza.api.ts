import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PizzaItem } from '../pizzas/types'

export const pizzaApi = createApi({
    reducerPath: 'pizza/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://643950d84660f26eb1afe5d8.mockapi.io/'
    }),
    endpoints: build => ({
        getPizzas: build.query({
            query: () => 'items'
        }),
        getPizzaByPopular: build.query<PizzaItem[], string>({
            query: () => ({
                url: 'items',
                params: {
                    rating: '1',
                    p: '1',
                    l: '3'
                } 
            })
        })
    })
})

export const { useGetPizzasQuery, useGetPizzaByPopularQuery } = pizzaApi