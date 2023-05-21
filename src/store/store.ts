import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as CartReducer } from "./slices/cart.slice";

const reducers = combineReducers({
        cart: CartReducer,
})
export const store = configureStore({
    reducer: reducers
})