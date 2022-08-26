import { configureStore } from '@reduxjs/toolkit';
import weatherApp from '../pages/weather/reducer';

export const store = configureStore({
  reducer: {
    weather: weatherApp,
  },
})