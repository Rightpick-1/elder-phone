import React from "react";
import "./dial.css";
import { useNavigate } from "react-router-dom";

import log from "./img/log.png";
import pad from "./img/pad.png";
import dials from "./img/dial.png";
import hm from "./img/hm.png";
import cntct from "./img/cntct.png";
import app from "./img/app.png";
import prof from "./img/prof.png";
import dl from "./img/dl.png";
import wifi from "./img/wifi.png";

const DialerPage = () => {
  const navigate = useNavigate();
  return (
    <div className="dialer-container">
      {/* Status Bar */}
      <div className="status-bar">
        <span>14:30</span>
        <div>
          <img src={wifi} alt="wifi" className="icon" />
        </div>
      </div>

      {/* Dialer Title */}
      <h1 className="dialer-title">Call</h1>

      {/* Number Display */}
      <div className="number-display">
        +852
        <button className="delete-btn">
          <img src={dl} alt="delete" className="icon" />
        </button>
      </div>

      {/* Dial Pad as Image */}
      <div className="dial-pad">
        <img src={pad} alt="dialpad" className="dial-pad-img" />
      </div>

      {/* Speed Dial */}
      <div className="speed-dial">
        <h2>Speed Dial</h2>
        <img src={dials} alt="speed dial" className="full-width-img" />
      </div>

      {/* Speed Dial Labels */}
      <div className="speed-dial-labels">
        <h1>Son</h1>
        <h1>Daughter</h1>
        <h1>Doctor</h1>
        <h1>Mary</h1>
      </div>

      {/* Call Log */}
      <div className="call-log">
        <h2>Call Log</h2>
        <img src={log} alt="call log" className="full-width-img" />
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item" onClick={() => navigate("/")}>
          <img src={hm} alt="home" className="nav-icon" />
          <span>Home Page</span>
        </div>
        <div className="nav-item active">
          <img src={cntct} alt="contacts" className="nav-icon" />
          <span>Contacts</span>
        </div>
        <div className="nav-item" onClick={() => navigate("/services")}>
          <img src={prof} alt="services" className="nav-icon" />
          <span>Services</span>
        </div>
        <div className="nav-item">
          <img src={app} alt="options" className="nav-icon" />
          <span>Options</span>
        </div>
      </div>
    </div>
  );
};

export default DialerPage;
