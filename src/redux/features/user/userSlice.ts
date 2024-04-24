import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UsersApi } from "./services";

export interface UsersState {
  filter?: any
  getUsers?: any;
}

interface UpdateFieldPayload {
  fieldName: keyof UsersState;
  fieldValue: any;
}

const initialState: UsersState = {};

export const UsersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    handleChangeUsers: (state, action: PayloadAction<UpdateFieldPayload>) => {
      const { fieldName, fieldValue } = action.payload;
      state[fieldName] = fieldValue;
    },
    resetStateUsers: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(UsersApi.endpoints.getUsers.matchFulfilled, (state, { payload }) => {
        state.getUsers = payload
      })
  }
});

export const { handleChangeUsers, resetStateUsers } = UsersSlice.actions;

export default UsersSlice.reducer;
