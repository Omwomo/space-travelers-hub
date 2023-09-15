import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionSlice';
import rocketSlice from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketSlice,
  },
});

export default store;
