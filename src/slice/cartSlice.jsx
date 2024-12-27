import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
  },
  reducers: {
    // Adding the items in cart
    addToCart: (state, action) => {
      state.items.push(action.payload); //reducers takes 2 params (state, action) & don't return anything
    },

    // Empting the cart
    emptyCart: (state) => {
      state.items.length = 0;
    },

    // Removing the item from the cart
    removeFromCart: (state, action) => {},
  },
});
export const { addToCart, emptyCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
