import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as CartReducer } from "./slices/cart.slice";
import { reducer as CategoryReducer} from "./slices/account-category.slice"

const reducers = combineReducers({
        cart: CartReducer,
        category: CategoryReducer
})
export const store = configureStore({   
    reducer: reducers
})