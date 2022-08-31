import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './pages/weather/reducer';
import toDoSlice from './pages/to-do-list/reducer';
import dashboardSlice from './pages/dashboard/reducer';

export const store = configureStore({
  reducer: {
      weatherApp: weatherSlice,
      toDo: toDoSlice,
      dashboardApp: dashboardSlice,

  },
})

export default store;

