import React from 'react';
import { Route, Routes } from "react-router-dom";
import ToDoTub from './pages/to-do-list/index';
import WeatherTab from './pages/weather/index';
import DashboardTub from './pages/dashboard/index';

export default
(
  <Routes>
    <Route path="/todo" element={<ToDoTub />} />
    <Route path="/weather" element={<WeatherTab />} />
    <Route path="/dashboard" element={<DashboardTub />} />
  </Routes>
);