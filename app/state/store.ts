import { api } from '@/app/api/rtkApi';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: __DEV__,
});

export default store;
