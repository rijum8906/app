import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const peristedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: peristedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
