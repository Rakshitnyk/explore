import React from "react";
import "./DentalApp.css";

const DentalApp = () => {
  return (
    <div className="dental-app">
      <header className="main-header">
        <img src="logo.png" alt="Logo" className="logo" />
        <input type="text" placeholder="What are you looking for?" className="search-bar" />
        <nav>
          <a href="#">Explore</a>
          <a href="#">Hire a Designer</a>
          <a href="#">Find Jobs</a>
          <a href="#">Blog</a>
          <button className="btn">Sign Up</button>
          <button className="btn dark">Log In</button>
        </nav>
      </header>
      
      <div className="page-title">
        <h1>Dental Website Application - Patient List & Details</h1>
      </div>

      <div className="container">
        <aside className="sidebar">
          <h2>Patient Queue</h2>
          <ul>
            <li>Cooper</li>
            <li>Savannah Nguyen</li>
            <li>Kathryn Murphy</li>
          </ul>
        </aside>
        
        <main className="main-content">
          <div className="patient-header">
            <img src="profile.jpg" alt="Profile" className="profile-pic" />
            <div>
              <h2>Jerome Bellingham</h2>
              <span className="status active">Active</span>
            </div>
          </div>
          
          <div className="details-grid">
            <div className="card">
              <h3>Basic Information</h3>
              <p><strong>Phone:</strong> 234-234-232-32</p>
              <p><strong>Email:</strong> jerome.b@example.com</p>
            </div>
            <div className="card">
              <h3>Appointment Schedule</h3>
              <p>Tooth Extraction - 10:00 AM</p>
              <p>Root Canal - 2:00 PM</p>
            </div>
            <div className="card">
              <h3>Member Diagnosis</h3>
              <p>Teeth Sensitivity</p>
            </div>
            <div className="card">
              <h3>Appointment Documents</h3>
              <p>Medical History.pdf</p>
              <p>X-Ray Report.jpg</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DentalApp;