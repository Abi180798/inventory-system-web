import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { dashboardApi } from "./services";

export interface DashboardState {
  getTotalArchivePaged?: any;
}

interface UpdateFieldPayload {
  fieldName: keyof DashboardState;
  fieldValue: any;
}

const initialState: DashboardState = {};

export const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    handleChangeDashboard: (state, action: PayloadAction<UpdateFieldPayload>) => {
      const { fieldName, fieldValue } = action.payload;
      state[fieldName] = fieldValue;
    },
    resetStateDashboard: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(dashboardApi.endpoints.getDashboardTotalArchivePaged.matchFulfilled, (state, { payload }) => {
        state.getTotalArchivePaged = payload
      })
  }
});

export const { handleChangeDashboard, resetStateDashboard } = DashboardSlice.actions;

export default DashboardSlice.reducer;
