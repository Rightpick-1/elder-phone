import React from "react";
import "./home.css";

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

const Home = () => {
  return (
    <div>
      {/* Header Bar */}
      <div className="header-bar">
        <span>14:45</span>
        <div className="header-icons">
          <span>📶</span>
          <span>📡</span>
          <span>🔋85%</span>
        </div>
      </div>

      {/* Date Section */}
      <div className="date-section">
        <h1>Monday, September 8, 2025</h1>
      </div>

      {/* Main Buttons */}
      <div className="main-buttons">
        <button className="main-button green">
          <img src={im9} alt="Call" />
          <h1>Call</h1>
        </button>
        <button className="main-button blue">
          <img src={im14} alt="Message" />
          <h1>Message</h1>
        </button>
        <button className="main-button orange">
          <img src={im10} alt="Camera" />
          <h1>Camera</h1>
        </button>
        <button className="main-button red">
          <img src={im17} alt="SOS" />
          <h1>SOS</h1>
        </button>
      </div>

      {/* Secondary Menu */}
      <div className="secondary-menu">
        <div className="menu-item light-green">
          <img src={im12} alt="Contact" />
          <h1>Contact</h1>
        </div>
        <div className="menu-item light-purple">
          <img src={im13} alt="Photo" />
          <h1>Photo</h1>
        </div>
        <div className="menu-item light-orange">
          <img src={im11} alt="Alarm Clock" />
          <h1>Alarm Clock</h1>
        </div>
        <div className="menu-item light-blue">
          <img src={im18} alt="Weather" />
          <h1>Weather</h1>
        </div>
        <div className="menu-item light-yellow">
          <img src={im15} alt="Magnifying Glass" />
          <h1>Magnifying Glass</h1>
        </div>
        <div className="menu-item light-gray">
          <img src={im16} alt="Setting" />
          <h1>Setting</h1>
        </div>
      </div>

      {/* Applications Section */}
      <div className="applications-section">
        <h2>Applications</h2>
        <div className="apps-grid">
          <div className="app green-dark">
            <img src={im2} alt="App 1" />
          </div>
          <div className="app green-darker">
            <img src={im3} alt="App 2" />
          </div>
          <div className="app blue-light">
            <img src={im1} alt="App 3" />
          </div>
          <div className="app gray-light">
            <img src={im4} alt="App 4" />
          </div>
          <div className="app red-light">
            <img src={im5} alt="App 5" />
          </div>
          <div className="app yellow-light">
            <img src={im6} alt="App 6" />
          </div>
          <div className="app red-dark">
            <img src={im7} alt="App 7" />
          </div>
          <div className="app blue-medium">
            <img src={im8} alt="App 8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
