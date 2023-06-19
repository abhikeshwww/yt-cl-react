import { configureStore } from '@reduxjs/toolkit';
importappSlice from "./appslice"
const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
