import {createAsyncThunk} from '@reduxjs/toolkit';


 export const getWeather = createAsyncThunk(
  //action type string
  'weatherApp/getWeather',
  // callback function
  async (locations) => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=1f907d965bbdd8fe10e98cd058a015e7&units=metric`)
    .then((data) => data.json())
  return res
})