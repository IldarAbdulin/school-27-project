import React from "react";
import { Routes, Route } from "react-router-dom";
import { AboutRoute } from "./routes/AboutRoute";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AboutRoute />}/>
      </Routes>
    </div>
  );
}