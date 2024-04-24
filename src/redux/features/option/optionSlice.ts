import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { optionApi } from "./services";

export interface OptionState {
  getOption?: any;
}

interface UpdateFieldPayload {
  fieldName: keyof OptionState;
  fieldValue: any;
}

const initialState: OptionState = {};

export const OptionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    handleChangeOption: (state, action: PayloadAction<UpdateFieldPayload>) => {
      const { fieldName, fieldValue } = action.payload;
      state[fieldName] = fieldValue;
    },
    resetStateOption: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(optionApi.endpoints.getOption.matchFulfilled, (state, { payload }) => {
        state.getOption = payload
      })
  }
});

export const { handleChangeOption, resetStateOption } = OptionSlice.actions;

export default OptionSlice.reducer;
