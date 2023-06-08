import { createAsyncThunk } from "@reduxjs/toolkit";
import { StorageKey } from "../../constans";
import { signIn, signUp } from "../../api/AuthServise";

export const signUpRequest = createAsyncThunk(
  "auth/signup",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await signUp(payload);
      localStorage.setItem(StorageKey.AUTH, JSON.stringify(response.data));
      console.log(response, "respose");
      return response.data;
    } catch (error) {
      return rejectWithValue || "you make mistake";
    }
  }
);

export const siginRequest = createAsyncThunk(
  "auth/signin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await signIn(payload);
      localStorage.setItem(StorageKey.AUTH, JSON.stringify(response.data));

      console.log(response, "respose");
      return response.data;
    } catch (error) {
      return rejectWithValue || "you make mistake";
    }
  }
);
export const logout = () => {
  return localStorage.clear();
};
