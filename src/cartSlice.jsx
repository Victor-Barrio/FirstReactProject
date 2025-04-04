import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.name === action.payload.name
      );

      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.cart.push({
          ...action.payload,
          id: crypto.randomUUID(),
          quantity: 1,
        }); 
      }
    },
    removeFromCart: (state, action) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );

      if (existingItemIndex !== -1) {
        if (state.cart[existingItemIndex].quantity > 1) {
          state.cart[existingItemIndex].quantity -= 1;
        } else {
          state.cart.splice(existingItemIndex, 1);
        }
      }
    },
    absoluteRemoveFromCart: (state, action) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity = 0;
        state.cart.splice(existingItemIndex, 1);
      }
    },
    newOrder: (state) => {
      state.cart = [];
    }
  },
});

export const { addToCart, removeFromCart, absoluteRemoveFromCart, newOrder } = cartSlice.actions;
export default cartSlice.reducer;
