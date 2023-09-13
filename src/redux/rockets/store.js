import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
  },
});

export default store;
