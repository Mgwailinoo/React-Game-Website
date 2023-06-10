import { configureStore } from "@reduxjs/toolkit";
import WishlistReducer, { initializeWishlist } from "./WishlistReducer";

const store = configureStore({
  reducer: {
    wishlist: WishlistReducer,
  },
});
store.dispatch(initializeWishlist());
export default store;
