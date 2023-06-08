import { createSlice } from "@reduxjs/toolkit";
import { siginRequest, siginUpRequest, signUpRequest } from "./AuthThunk";
import { StorageKey } from "../../constans";

const getInitialState = () => {
  const json = localStorage.getItem(StorageKey.AUTH);
  if (json) {
    const userData = JSON.parse(json);
    return {
      isAuthorization: true,
      token: userData.data.token,
      user: {
        name: userData.data.user.name,
        email: userData.data.user.email,
        role: userData.data.user.role,
      },
    };
  }
  return {
    isAuthorization: false,
    token: "",
    user: {
      name: "",
      email: "",
      role: "",
    },
  };
};
const initialState = getInitialState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthorization = false;
      state.token = "";
      state.user = {
        name: "",
        email: "",
        password: "",
        id: "",
      };
      return localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpRequest.fulfilled, (state, action) => {
        state.isAuthorization = true;
        state.token = action.token;
      })
      .addCase(siginRequest.fulfilled, (state, action) => {
        state.isAuthorization = true;
        state.isAuthorization = action.token;
      })
      .addCase(siginRequest.pending, (state) => {
        state.isAuthorization = false;
      });
  },
});

export const AuthActions = authSlice.actions;
