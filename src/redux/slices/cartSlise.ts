import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItemType = {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    type: string;
    size: number;
    count: number;
}

interface CartSliceState {
    totalPrice: number;
    totalCount: number;
    items: CartItemType[]

}

const initialState: CartSliceState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,   
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItemType>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if(findItem) {
                findItem.count++
            } else {
                state.items.push({...action.payload, count: 1})
            }           
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price + sum) * obj.count
             }, 0) 
            state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0)            
        },
        MinusItem(state, action: PayloadAction<string>) {
            const findItem = state.items.find(obj => obj.id === action.payload)
            if(findItem && findItem.count > 1) {
                findItem.count--
            } 
             else {
                state.items = state.items.filter(obj => obj.id !== action.payload) 
            }           
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price + sum) * obj.count
             }, 0)
             state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0)
        },      
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(obj => obj.id !== action.payload) 
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price + sum) * obj.count
             }, 0)
             state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0)           
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
            state.totalCount = 0

        },
        setTotalCount(state) {
           state.totalCount = state.items.reduce((sum, item) => sum + item.count, 0)             
        }

    },
});

export const selectCart = (state: RootState)=> state.cart

export const { addItem, removeItem, clearItems, MinusItem } = cartSlice.actions;

export default cartSlice.reducer;
