import "./App.css";
import React from "react";
import DialerPage from "./dial";
import EntertainmentPage from "./entertaiment";
import MedicalPage from "./medical";
import Home from "./home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Outer Mobile Frame */}
      <div className="w-[350px] h-[440px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-300">
        {/* Scrollable Content Area */}
        <div className="h-full overflow-y-scroll relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<DialerPage />} />
            <Route path="/services" element={<EntertainmentPage />} />
            <Route path="/medical" element={<MedicalPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
