import { createSlice } from '@reduxjs/toolkit';
import { formatCurrency } from '../../utilities/helpers';

const initialState = {
  cartArray: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addNewPizza(state, action) {
      state.cartArray = state.cartArray
        .map((pizza) => pizza.pizzaId)
        .includes(action.payload.pizzaId)
        ? state.cartArray
        : [...state.cartArray, action.payload];
    },
    deletePizza(state, action) {
      state.cartArray = state.cartArray.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increaseQuantity(state, action) {
      // state.cartArray = state.cartArray.map((pizza) =>
      //   pizza.id === action.payload
      //     ? { ...pizza, quantity: pizza.quantity + 1 }
      //     : pizza,
      // );
      const currPizza = state.cartArray.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      currPizza.quantity++;
      currPizza.totalPrice = currPizza.quantity * currPizza.unitPrice;
    },
    decreaseQuantity(state, action) {
      // state.cartArray = state.cartArray.flatMap((pizza) =>
      //   pizza?.id === action.payload
      //     ? pizza.quantity !== 1
      //       ? { ...pizza, quantity: pizza.quantity - 1 }
      //       : []
      //     : pizza,
      // );
      const currPizza = state.cartArray.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      currPizza.quantity--;
      currPizza.totalPrice = currPizza.quantity * currPizza.unitPrice;
      if (currPizza.quantity === 0)
        cartSlice.caseReducers.deletePizza(state, action);
    },
    clearCart(state) {
      state.cartArray = [];
    },
  },
});

export const {
  addNewPizza,
  deletePizza,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCartTotalPrice = (state) =>
  state.cart.cartArray.reduce((acc, curr) => acc + curr.totalPrice, 0);
