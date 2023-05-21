import { createSlice } from '@reduxjs/toolkit'

interface CartStateType {
    id: number;
    name: string;
    price: number;
    stock: number;
}
const initialState: CartStateType[] = []

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleItemToCart: (state, {payload : Item}) => {
            state.push(Item)
        }
    }
})

export const { actions, reducer } = CartSlice;