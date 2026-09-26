import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("phoneStore_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("phoneStore_wishlist") || "[]"),
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("phoneStore_cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("phoneStore_cart", JSON.stringify(state.cart));
    },
    toggleWishlist: (state, action) => {
      const index = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.wishlist.splice(index, 1);
      } else {
        state.wishlist.push(action.payload);
      }
      localStorage.setItem(
        "phoneStore_wishlist",
        JSON.stringify(state.wishlist)
      );
    },
  },
});

export const { addToCart, removeFromCart, toggleWishlist } = shopSlice.actions;
export default shopSlice.reducer;