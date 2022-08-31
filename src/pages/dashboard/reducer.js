import { createSlice } from '@reduxjs/toolkit';
import {getCrypto} from './dashboardThunk';

const initialState = {
  data: [],
  loading: false,
};

export const dashboardSlice = createSlice({
  name: 'dashboardApp',
  initialState: initialState,
  reducers: {},
  extraReducers:{ 
    [getCrypto.pending]: (state) => {
      state.loading = true
  },
    [getCrypto.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
  },
    [getCrypto.rejected]: (state) => {
      state.loading = false
  },},
});

export default dashboardSlice.reducer;