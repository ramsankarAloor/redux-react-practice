import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
  badgeNumber: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload.id;
      const productObj = action.payload.obj;
      state.badgeNumber++;
      if (state.cart[id]) {
        state.cart[id].quantity++;
      } else {
        state.cart = { ...state.cart, [id]: { ...productObj, quantity: 1 } };
      }
    },
    removeFromCart(state, action) {
      const id = action.payload
      if(state.cart[id].quantity===1){
        delete state.cart[id]
      }else{
        state.cart[id].quantity--
      }
      state.badgeNumber--
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
