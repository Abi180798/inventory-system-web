import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

import { baseApi } from "@/redux/features/baseQuery";
import authReducer from "@/redux/features/auth/authSlice";
import dashboardReducer from "@/redux/features/dashboard/dashboardSlice";
import masterArchiveReducer from "@/redux/features/master-archive/masterArchiveSlice";
import optionReducer from "@/redux/features/option/optionSlice";
import classificationReducer from "@/redux/features/classification/classificationSlice";
import userReducer from "@/redux/features/user/userSlice";

const encryptor = encryptTransform({
  secretKey: "UPT-Kearsipan",
});

const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  dashboard: dashboardReducer,
  masterArchive: masterArchiveReducer,
  option: optionReducer,
  classification: classificationReducer,
  user: userReducer,
});

const persistConfig = {
  key: "upt-kearsipan-store",
  version: 1,
  storage,
  transforms: [encryptor],
  blacklist: [
    baseApi.reducerPath,
    "dashboard",
    "masterArchive",
    "option",
    "classification",
    "user",
  ],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
