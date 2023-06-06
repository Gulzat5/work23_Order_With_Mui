import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToBasket,
  decrementBasketRequest,
  deleteBasketItem,
  getBuskett,
  incrementBasketRequest,
} from "../../api/Service";

export const addItem = createAsyncThunk(
  `basket/addItem`,
  async (newItem, { rejectWithValue, dispatch }) => {
    try {
      await addToBasket(newItem);

      dispatch(getBusket());
    } catch (error) {
      return rejectWithValue(
        error?.response.messenge ||
          "You make mistske don't worry end never give up"
      );
    }
  }
);
////////
export const getBusket = createAsyncThunk(
  "basket/getbusket",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getBuskett();
      return data.data.items;
    } catch (error) {
      return rejectWithValue(error?.response.messege || "You make mistake");
    }
  }
);

export const incrementFood = createAsyncThunk(
  "basket/incrementFoods",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await incrementBasketRequest(payload);

      dispatch(getBusket());
      return await response.items;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
///////////
export const decrementFood = createAsyncThunk(
  "basket/decrementFoods",
  async (payload, { rejectWithValue, dispatch }) => {
    // const decrement = true;
    if (payload.amount !== 0) {
      try {
        const response = await decrementBasketRequest(payload);
        dispatch(getBusket());

        return await response.items;
      } catch (error) {
        rejectWithValue(error);
      }
    } else {
      try {
        const response = await deleteBasketItem(payload);

        dispatch(getBusket());
        return await response.items;
      } catch (error) {
        new Error(error);
      }
    }
  }
);
/////////////
