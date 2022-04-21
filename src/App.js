import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "./pages/Profile.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
