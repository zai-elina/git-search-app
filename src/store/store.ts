import { configureStore } from "@reduxjs/toolkit";
import userListSlice from "./slice/userListSlice";
import { api } from "./services/api";

export const store = configureStore({
  reducer: {
    userList: userListSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
