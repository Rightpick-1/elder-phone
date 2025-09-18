import React from "react";
import log from "./img/log.png";
import pad from "./img/pad.png";
import dials from "./img/dial.png";
import hm from "./img/hm.png";
import cntct from "./img/cntct.png";
import app from "./img/app.png";
import prof from "./img/prof.png";
import dl from "./img/dl.png";

const DialerPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white font-sans">
      {/* Status Bar */}
      <div className="flex justify-between px-4 pt-3 text-sm text-black">
        <span>14:30</span>
        <div className="flex gap-2">
          <img src="/icons/wifi.png" alt="wifi" className="w-5" />
          <img src="/icons/battery.png" alt="battery" className="w-5" />
        </div>
      </div>

      {/* Dialer Title */}
      <h1 className="text-center text-lg font-bold mt-2">Call</h1>

      {/* Number Display */}
      <div className="text-center text-2xl font-bold mt-2 flex justify-center items-center gap-2">
        +852
        <button className="text-gray-500">
          <img src={dl} alt="delete" className="w-5" />
        </button>
      </div>

      {/* Dial Pad as Image */}
      <div className="flex justify-center mt-4">
        <img src={pad} alt="dialpad" className="w-80" />
      </div>

      {/* Call Button */}

      {/* Speed Dial as Image */}
      <div className="px-6 mt-4">
        <h2 className="font-bold text-lg mb-2">Speed Dial</h2>
        <img src={dials} alt="speed dial" className="w-full" />
      </div>
      <div className="flex gap-7 ml-12">
        <h1>Son</h1>
        <h1>Daughter</h1>
        <h1>Doctor</h1>
        <h1>Mary</h1>
      </div>

      {/* Call Log as Image */}
      <div className="px-6 mt-4">
        <h2 className="font-bold text-lg mb-2">Call Log</h2>
        <img src={log} alt="call log" className="w-full" />
      </div>

      {/* Bottom Navigation */}
      <div className=" bottom-0 w-full bg-white border-t flex justify-around py-2">
        <div className="flex flex-col items-center text-gray-500">
          <img src={hm} alt="home" className="w-6" />
          <span className="text-xs">Home Page</span>
        </div>
        <div className="flex flex-col items-center text-orange-500">
          <img src={cntct} alt="contacts" className="w-6" />
          <span className="text-xs">Contacts</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <img src={prof} alt="services" className="w-6" />
          <span className="text-xs">Services</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <img src={app} alt="options" className="w-6" />
          <span className="text-xs">Options</span>
        </div>
      </div>
    </div>
  );
};

export default DialerPage;
