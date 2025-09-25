import "./App.css";
import React from "react";
import DialerPage from "./dial";
import EntertainmentPage from "./entertaiment";
import MedicalPage from "./medical";

function App() {
  return (
    <div className="w-[350px] h-[440px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-300 ">
      <div className="h-full overflow-y-scroll">
        <MedicalPage />
      </div>
    </div>
  );
}

export default App;
