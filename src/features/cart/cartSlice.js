import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartArray: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addNewPizza(state, action) {
      state.cartArray = state.cartArray
        .map((pizza) => pizza.id)
        .includes(action.payload.id)
        ? state.cartArray
        : [...state.cartArray, action.payload];
    },
  },
});

export const { addNewPizza } = cartSlice.actions;
export default cartSlice.reducer;
