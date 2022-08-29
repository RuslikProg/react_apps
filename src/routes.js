import React from 'react';
import { Route, Routes } from "react-router-dom";
import ToDoTub from './pages/to-do-list/index';
import WeatherTab from './pages/weather/index';


export default
 (
  <Routes>
    <Route path="/todo" element={<ToDoTub />} />
    <Route path="/weather" element={<WeatherTab />} />
  </Routes>
)