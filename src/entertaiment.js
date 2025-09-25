import React from "react";
import "./entertainment.css";

import im1 from "./img/01.png";
import im2 from "./img/002.png";
import im3 from "./img/003.png";
import im4 from "./img/005.png";
import im5 from "./img/0004.png";
import im6 from "./img/06.png";
import im7 from "./img/movie.png";
import im8 from "./img/rec.png";
import im9 from "./img/wifi.png";
import im10 from "./img/hm.png";
import cntct from "./img/cntcg.png";
import app from "./img/appo.png";
import prof from "./img/prof.png";

const EntertainmentPage = () => {
  return (
    <div className="entertainment-container">
      {/* Status Bar */}
      <div className="status-bar">
        <span>14:30</span>
        <div className="status-icons">
          <img src={im9} alt="wifi" className="wifi-icon" />
        </div>
      </div>

      {/* Title */}
      <h1 className="page-title">Entertainment</h1>

      {/* Top Menu */}
      <div className="top-menu">
        <div className="menu-item">
          <img src={im1} alt="Music" className="menu-icon" />
          <span>Music</span>
        </div>
        <div className="menu-item">
          <img src={im2} alt="Videos" className="menu-icon" />
          <span>Videos</span>
        </div>
        <div className="menu-item">
          <img src={im3} alt="News" className="menu-icon" />
          <span>News</span>
        </div>
        <div className="menu-item">
          <img src={im4} alt="Games" className="menu-icon" />
          <span>Games</span>
        </div>
        <div className="menu-item">
          <img src={im5} alt="Radio" className="menu-icon" />
          <span>Radio</span>
        </div>
        <div className="menu-item">
          <img src={im6} alt="Reading" className="menu-icon" />
          <span>Reading</span>
        </div>
      </div>

      {/* Recommended For You */}
      <div className="section">
        <h2 className="section-title">Recommended For You</h2>
        <img src={im7} alt="Recommended" className="section-img" />
      </div>

      {/* Recently Watched */}
      <div className="section last-section">
        <h2 className="section-title">Recently Watched</h2>
        <img src={im8} alt="Recently Watched" className="section-img" />
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item">
          <img src={im10} alt="home" className="nav-icon" />
          <span>Home Page</span>
        </div>
        <div className="nav-item">
          <img src={cntct} alt="contacts" className="nav-icon" />
          <span>Contacts</span>
        </div>
        <div className="nav-item active">
          <img src={app} alt="entertainment" className="nav-icon" />
          <span>Entertainment</span>
        </div>
        <div className="nav-item">
          <img src={prof} alt="options" className="nav-icon" />
          <span>Options</span>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentPage;
