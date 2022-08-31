import { createSlice } from '@reduxjs/toolkit';
import {getWeather} from './weatherThunk';



const initialState = {
  data: [],
  loading: false,
};


export const weatherSlice = createSlice({
  name: 'weatherApp',
  initialState: initialState,
  reducers: {},
  extraReducers:{ 
    [getWeather.pending]: (state) => {
      state.loading = true
  },
    [getWeather.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
  },
    [getWeather.rejected]: (state) => {
      state.loading = false
  },},
});


export default weatherSlice.reducer;