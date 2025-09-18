import React from "react";
import im1 from "./img/1.png";
import im2 from "./img/2.png";
import im3 from "./img/3.png";
import im4 from "./img/4.png";
import im5 from "./img/5.png";
import im6 from "./img/6.png";
import im7 from "./img/7.png";
import im8 from "./img/8.png";
import im9 from "./img/call.png";
import im10 from "./img/cam.png";
import im11 from "./img/clock.png";
import im12 from "./img/contact.png";
import im13 from "./img/im.png";
import im14 from "./img/msg.png";
import im15 from "./img/search.png";
import im16 from "./img/setting.png";
import im17 from "./img/sos.png";
import im18 from "./img/weather.png";
const home = () => {
  return (
    <div>
      <div className="bg-blue-900 text-white flex justify-between items-center px-4 py-2 text-sm">
        <span>14:45</span>
        <div className="flex items-center space-x-2">
          <span>📶</span>
          <span>📡</span>
          <span>🔋85%</span>
        </div>
      </div>

      {/* Date Section */}
      <div className="bg-blue-100 text-center py-2">
        <h1 className="font-bold text-lg">Monday, September 8, 2025</h1>
      </div>

      {/* Main Buttons */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <button className="bg-[#55AA68] text-white rounded-xl p-6 text-lg font-bold">
          <img src={im9} />
          <h1>Call</h1>
        </button>
        <button className="bg-[#5098D5] text-white rounded-xl p-6 text-lg font-bold">
          <img src={im14} />
          <h1>Message</h1>
        </button>
        <button className="bg-[#E79E3C] text-white rounded-xl p-6 text-lg font-bold">
          <img src={im10} />
          <h1>Camera</h1>
        </button>
        <button className="bg-[#D65745] text-white rounded-xl p-6 text-lg font-bold">
          <img src={im17} />
          <h1>SOS</h1>
        </button>
      </div>

      {/* Secondary Menu */}
      <div className="grid grid-cols-3 gap-4 px-4 pb-4">
        <div className="bg-[#B4DDC1] rounded-xl p-4 text-center font-medium">
          <img src={im12} />
          <h1>Contact</h1>
        </div>
        <div className="bg-[#CDB6DB] rounded-xl p-4 text-center font-medium">
          <img src={im13} />
          <h1>Photo</h1>
        </div>
        <div className="bg-[#F5D7A7] rounded-xl p-4 text-center font-medium">
          <img src={im11} />
          <h1>Alarm Clock</h1>
        </div>
        <div className="bg-[#B5D5EE] rounded-xl p-4 text-center font-medium">
          <img src={im18} />
          <h1>Weather</h1>
        </div>
        <div className="bg-[#F6E6A8] rounded-xl p-4 text-center font-medium text-sm">
          <img src={im15} />
          <h1>Magnifying glass</h1>
        </div>
        <div className="bg-[#D6DBDB] rounded-xl p-4 text-center font-medium">
          <img src={im16} />
          <h1>Setting</h1>
        </div>
      </div>

      {/* Applications Section */}
      <div className="px-4 pb-20">
        <h2 className="font-bold text-lg mb-2">Applications</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-green-500 rounded-lg h-12 flex items-center justify-center text-white">
            <img src={im2} />
          </div>
          <div className="bg-green-600 rounded-lg h-12 flex items-center justify-center text-white">
            <img src={im3} />
          </div>
          <div className="bg-blue-300 rounded-lg h-12 flex items-center justify-center text-white">
            <img src={im1} />
          </div>
          <div className="bg-gray-200 rounded-lg h-12 flex items-center justify-center text-black">
            <img src={im4} />
          </div>
          <div className="bg-red-500 rounded-lg h-12 flex items-center justify-center text-white">
            <img src={im5} />
          </div>
          <div className="bg-yellow-400 rounded-lg h-12 flex items-center justify-center text-black">
            <img src={im6} />
          </div>
          <div className="bg-red-600 rounded-lg h-12 flex items-center justify-center text-white">
            <img src={im7} />
          </div>
          <div className="bg-blue-400 rounded-lg h-12 flex items-center justify-center text-white">
            <img src={im8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
