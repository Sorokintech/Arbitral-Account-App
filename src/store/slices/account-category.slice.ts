import { createSlice } from "@reduxjs/toolkit";

interface CategoryStateType {
  id: number;
  name: string;
  price: number;
  stock: number;
  toAdd: number;
}
const initialState: CategoryStateType[] = [];

export const CategorySlice = createSlice({
  name: "account-category",
  initialState,
  reducers: {
    setCategory: (state, { payload: data }) => {
      state.push(data);
    },
    setAmount: (state, { payload: amount }) => {
      state.push(amount);
    },
  },
});

export const { actions, reducer } = CategorySlice;
