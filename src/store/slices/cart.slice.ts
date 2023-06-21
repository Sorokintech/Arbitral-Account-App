import { createSlice } from "@reduxjs/toolkit";

interface CartStateType {
  id: number;
  name: string;
  price: number;
  toAdd: number;
  stock: number;
}

const initialState: CartStateType[] = [];
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleItemToCart: (state, { payload: data }) => {
      let current = state.find((el) => el.id === data.id);
      if (current) {
        state.filter((el) => el.id == data.id)[0].toAdd =
          current.toAdd + data.toAdd;
      } else state.push(data);
    },
    setAmount: (state, { payload: data }) => {
      state.filter((el) => el.id == data.id)[0].toAdd = data.counter;
    },
    removeItem: (state, { payload: data }) => {
      return state.filter((el) => el.id !== data.id);
    },
  },
});

export const { actions, reducer } = CartSlice;
