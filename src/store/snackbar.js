import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  severity: "",
  message: "",
  open: false,
};
export const snakbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    doSuccess(state) {
      state.severity = "success";
      state.message = "Successfuylly added";
      state.open = true;
    },

    doError(state) {
      state.severity = "error";
      state.message = "Error ";
      state.open = true;
    },
    closeSnackBar(state) {
      state.open = false;
    },
  },
});
export const snakbarReducer = snakbarSlice.reducer;
export const snakbarAction = snakbarSlice.actions;
