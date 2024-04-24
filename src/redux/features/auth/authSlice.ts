import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { AuthState } from "@/models/auth";
import { authApi } from "./services";

const initialState: AuthState = {
  data: null,
  error: {
    title: "",
    type: "",
    detail: "",
    instance: "",
    errors: null,
    status: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuthError: (state, action: PayloadAction<AuthState>) => {
      state.error = action.payload.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.data = payload
      })
  }
});

export const { addAuthError } = authSlice.actions;

export const selectError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
