import React from 'react';
import './Step.css';
import logo from "../../image/instai_icon.png";
import { NavLink } from 'react-router-dom';

function Step() {
  return (
    <div className="app">
      <header id="nav">
        <div id="logo">
          <img src={logo} alt="Your Logo" />
        </div>
        <div id="allProjects">
          <div style={{ position: "relative", left: "250px", fontWeight: "bold" }}>All Projects</div>
        </div>
        <div className="rectangle"></div>
      </header>
      
      <header id="subNav">
        Traffic cone ...
      </header>

      <div className="circles">
        <div className="circle"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
      </div>

      <nav id="secondNav">
        <ul>
          <li>1. Upload training data</li>
          <li>2. Provide your model training requirements</li>
          <li>3. Confirm data and requirements</li>
          <li>4. Train your AI model</li>
          <li>5. Download AI model</li>
        </ul>
      </nav>

      <div className="frame">
        <ul>
          <li>Upload training data</li>
          <li>Upload the image data you wish to use to train your style model</li>
        </ul>
        <NavLink to='/Download2'><button className="upload-button">Upload</button></NavLink>
      </div>

      <div className="frame2">
        <ul>
          <li>Provide your training requirements</li>
          <li>Tell us your specific needs for AI model training</li>
        </ul>
        <button className="upload-button2">Fill out the form</button>
      </div>

      <div className="frame3">
        <ul>
          <li>Confirm data and requirements</li>
          <li>Tell your needs for AI model training</li>
        </ul>
        <button className="upload-button3">Confirm data</button>
        <button className="upload-button4">Confirm requirements</button>
      </div>

      <div className="frame4">
        <ul>
          <li>Training your AI model</li>
          <li>You haven't submitted data yet</li>
        </ul>
      </div>

      <div className="frame5">
        <ul>
          <li>Download AI model</li>
          <li>No model available for download</li>
        </ul>
      </div>
    </div>
  );
}

export default Step;
