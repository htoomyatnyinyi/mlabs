// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Upload from "./components/Upload";
import Home from "./components/Home";
import Login from "./components/Login";
import Api from "./components/Api";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api/config" element={<Api />} />
      </Routes>
    </Router>
  );
}

export default App;
