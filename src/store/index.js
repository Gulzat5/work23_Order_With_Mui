import { basketSlice } from "./basket/basketSlice";
import { configureStore } from "@reduxjs/toolkit";
import { mealsSlice } from "./meals/mealsSlice";
import { snakbarSlice } from "./snackbar";
import { authSlice } from "./auth/AuthSlice";
export const store = configureStore({
  reducer: {
    [mealsSlice.name]: mealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [snakbarSlice.name]: snakbarSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
});
