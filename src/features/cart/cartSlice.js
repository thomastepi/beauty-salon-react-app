import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    amount: 0,
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push(action.payload);
      }
      state.amount++;
      state.total += action.payload.price;
    },
    removeFromCart(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload);
      const itemTotal = item.price * item.quantity;
      state.amount -= item.quantity;
      state.total -= itemTotal;
    },
    increaseAmount(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
      state.amount++;
      state.total += item.price;
    },
    decreaseAmount(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity >= 2) {
        item.quantity--;
        state.amount--;
        state.total -= item.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseAmount, decreaseAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
