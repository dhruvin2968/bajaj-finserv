import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BfhlApiTester from "./pages/BfhlApiTester";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BfhlApiTester />} />
        </Routes>
    </Router>
  );
}

export default App;
