import { api } from '@/app/api/rtkApi';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  [api.reducerPath]: api.reducer,
});