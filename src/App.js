// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Upload from "./components/Upload";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route paht="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
