import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './pages/weather/reducer';
import toDoSlice from './pages/to-do-list/reducer'

export const store = configureStore({
  reducer: {
      weatherApp: weatherSlice,
      toDo: toDoSlice,


      
  },
})

export default store;

