import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistReducer = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state));
    },
    removeFromWishlist: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(state));
      }
    },
    initializeWishlist: (state) => {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        return JSON.parse(storedWishlist);
      }
      return state;
    },
  },
});

export const { addToWishlist, removeFromWishlist, initializeWishlist } =
  wishlistReducer.actions;
export default wishlistReducer.reducer;
