import React from "react";
import "./medical.css";

import wifiIcon from "./img/wifi.png";

import bloodPressure from "./img/bp.png";
import diabetes from "./img/db.png";
import vitamin from "./img/vt.png";
import cholesterol from "./img/cl.png";
import emergency from "./img/doctor.png";

import homeIcon from "./img/hm.png";
import contactsIcon from "./img/cntct.png";
import healthIcon from "./img/appo.png";
import optionsIcon from "./img/prof.png";

const MedicalPage = () => {
  return (
    <div className="medical-container">
      <div className="status-bar">
        <span className="time">14:30</span>
        <div>
          <img src={wifiIcon} alt="wifi" className="status-icon" />
        </div>
      </div>

      <div className="header">
        <h1 className="title">Medication Reminder</h1>
        <p className="subtitle">Your daily medication schedule</p>
      </div>

      <div className="section">
        <h2 className="section-heading">Today's Medications</h2>
        <p className="section-date">Monday, June 10</p>

        <div className="medications-list">
          <img src={bloodPressure} alt="Blood Pressure" className="med-img" />
          <img src={diabetes} alt="Diabetes" className="med-img" />
          <img src={vitamin} alt="Vitamin" className="med-img" />
        </div>
      </div>

      <div className="section">
        <h2 className="section-heading">Upcoming Medications</h2>
        <div className="medications-list">
          <img src={cholesterol} alt="Cholesterol" className="med-img" />
        </div>
      </div>

      <div className="section">
        <img
          src={emergency}
          alt="Emergency Section"
          className="emergency-img"
        />
      </div>

      <div className="bottom-nav">
        <div className="nav-item">
          <img src={homeIcon} alt="home" className="nav-icon" />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <img src={contactsIcon} alt="contacts" className="nav-icon" />
          <span>Contacts</span>
        </div>
        <div className="nav-item active">
          <img src={healthIcon} alt="health" className="nav-icon" />
          <span>Health</span>
        </div>
        <div className="nav-item">
          <img src={optionsIcon} alt="options" className="nav-icon" />
          <span>Options</span>
        </div>
      </div>
    </div>
  );
};

export default MedicalPage;
