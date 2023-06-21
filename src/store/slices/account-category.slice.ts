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
    setAmount: (state, { payload: data }) => {
      if (state.find((el) => el.id == data.id)) {
        state.find((el) => el.id == data.id)!.toAdd = data.counter;
      }
    },
    clearAmount: (state, { payload: data }) => {
      state.filter((el) => el.id == data.id)[0].toAdd = 1;
    },
    setStock: (state, { payload: data }) => {
      state.filter((el) => el.id == data.id)[0].stock = data.stock - data.toAdd;
    },
  },
});

export const { actions, reducer } = CategorySlice;
