import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { classificationApi } from "./services";

export interface ClassificationState {
  getClassification?: any;
}

interface UpdateFieldPayload {
  fieldName: keyof ClassificationState;
  fieldValue: any;
}

const initialState: ClassificationState = {};

export const ClassificationSlice = createSlice({
  name: "classification",
  initialState,
  reducers: {
    handleChangeClassification: (state, action: PayloadAction<UpdateFieldPayload>) => {
      const { fieldName, fieldValue } = action.payload;
      state[fieldName] = fieldValue;
    },
    resetStateClassification: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(classificationApi.endpoints.getClassification.matchFulfilled, (state, { payload }) => {
        state.getClassification = payload
      })
  }
});

export const { handleChangeClassification, resetStateClassification } = ClassificationSlice.actions;

export default ClassificationSlice.reducer;
