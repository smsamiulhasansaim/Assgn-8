import React from 'react';
import './Hero.css';
import { FaGooglePlay } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';

function Hero() {
  const stats = [
    {
      value: "29.6M",
      label: "Total Downloads",
      growth: "21% More Than Last Month"
    },
    {
      value: "906K",
      label: "Total Reviews",
      growth: "48% More Than Last Month"
    },
    {
      value: "132+",
      label: "Active Apps",
      growth: "31 More Will Launch"
    }
  ];

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          We Build <br />
          <span className="highlight-text">Productive</span> Apps
        </h1>

        <p className="hero-subtitle">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="app-buttons">
          <a href="https://play.google.com/store" className="app-button google-play">
            <FaGooglePlay className="app-icon" /> Google Play
          </a>
          <a href="https://www.apple.com/app-store/" className="app-button app-store">
            <BsApple className="app-icon" /> App Store
          </a>
        </div>
      </div>
      <section class="hero-image-section">
    <div class="mockup-container">
        <img src="/images/hero.png" alt="" class="mockup-image" />
    </div>
    </section>
      <section className="hero-stats-section">
        <div className="hero-stats-container">
          <h1 className="hero-stats-title">Trusted By Millions, Built For You</h1>
          
          <div className="stats-grid-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item-card">
                <p className="stat-item-label">{stat.label}</p>
                <h2 className="stat-item-value">{stat.value}</h2>
                <p className="stat-item-growth">{stat.growth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;