import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMealsRequest } from "../../api/Service";

export const getFoods = createAsyncThunk(
  "meals/getMeals",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMealsRequest();
      return data.data.data;
    } catch (error) {
      return rejectWithValue(error?.response.message || "You make mistake");
    }
  }
);
