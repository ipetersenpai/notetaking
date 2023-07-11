import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardScreen from "./screens/dashboardScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
