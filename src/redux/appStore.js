import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // like combine reducer
    cart: cartReducer,
    // user: userReducer,
  },
});
export default appStore;
