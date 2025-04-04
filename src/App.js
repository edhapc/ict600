import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import AIDemo from './AIDemo';
import Footer from './Footer';

function Home() {
  const [language, setLanguage] = useState('English');
  const navigate = useNavigate();

  return (
    <div className="wildlife-app">
      <header className="app-header">
        <div className="header-container">
          <h1>Wildlife Safety Guide</h1>
          <nav className="main-nav">
            <a href="https://alerts.dbca.wa.gov.au/">WILDLIFE ALERTS</a>
            <a href="https://www.australianwildlife.org/">AUSTRALIA WILDLIFE</a>
            <a href="https://www.nationalparks.nsw.gov.au/safety/wildlife-encounters">Safety Tips</a>
            <a href="#about">ABOUT</a>
            <a href="#signin">SIGN IN</a>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="language-select"
            >
              <option value="English">English</option>
              <option value="Spanish">Español</option>
              <option value="French">Français</option>
            </select>
          </nav>
        </div>
        <div className="header-divider"></div>
      </header>

      {/* ✅ Insert Video Section */}
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="images/animal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <main className="hero-section">
        <div className="hero-container">
          <h2>Bringing Cutting-Edge Technology to Wildlife Safety</h2>
          <p className="hero-description">
          The integration of cutting-edge technology in wildlife safety is a game-changer, offering innovative solutions to protect both humans and animals.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">About</button>
            <button className="secondary-btn" onClick={() => navigate('/ai-demo')}>
              Explore AI Demo
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-demo" element={<AIDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
