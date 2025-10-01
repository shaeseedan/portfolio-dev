import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HeaderBar from "./components/HeaderBar";
import Work from "./pages/Work";
import Info from "./pages/Info";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <HeaderBar />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
