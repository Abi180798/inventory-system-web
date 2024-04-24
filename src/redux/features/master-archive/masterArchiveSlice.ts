import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MasterArchiveApi } from "./services";

export interface MasterArchiveState {
  filter?: any
  getMasterArchivePaged?: any;
}

interface UpdateFieldPayload {
  fieldName: keyof MasterArchiveState;
  fieldValue: any;
}

const initialState: MasterArchiveState = {
  filter: {
    all: "no",
    apid: "Z32zwmhpfj.2",
    limit: 10,
    page: 1,
    search: "",
    statarsip: "none"
  }
};

export const MasterArchiveSlice = createSlice({
  name: "masterArchive",
  initialState,
  reducers: {
    handleChangeMasterArchive: (state, action: PayloadAction<UpdateFieldPayload>) => {
      const { fieldName, fieldValue } = action.payload;
      state[fieldName] = fieldValue;
    },
    resetStateMasterArchive: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(MasterArchiveApi.endpoints.getMasterArchivePaged.matchFulfilled, (state, { payload }) => {
        state.getMasterArchivePaged = payload
      })
  }
});

export const { handleChangeMasterArchive, resetStateMasterArchive } = MasterArchiveSlice.actions;

export default MasterArchiveSlice.reducer;
