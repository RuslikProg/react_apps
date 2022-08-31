import {createAsyncThunk} from '@reduxjs/toolkit';


const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
 export const getCrypto = createAsyncThunk(
  //action type string
  'dashboardApp/getCrypto',
  // callback function
  async () => {
    const res = await fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=15", requestOptions)
    .then((data) => data.json())
    .catch(error => console.log('error', error));
    
  return res
})