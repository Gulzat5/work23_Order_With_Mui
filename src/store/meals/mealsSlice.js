import { createSlice } from "@reduxjs/toolkit";
import { getFoods } from "./mealsThunk";

const initialState = {
  meals: [],
  idLoading: false,
  isError: "",
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFoods.fulfilled, (state, action) => {
        state.meals = action.payload;
        state.idLoading = false;
        state.isError = "";
      })
      .addCase(getFoods.pending, (state) => {
        state.idLoading = true;
        state.meals = [];
        state.isError = "";
      })
      .addCase(getFoods.rejected, (state, action) => {
        state.idLoading = false;
        state.meals = [];
        state.isError = action.payload;
      });
  },
});
