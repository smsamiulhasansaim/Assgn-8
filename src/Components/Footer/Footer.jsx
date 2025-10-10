import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <span className="footer-logo">
              <img src="/src/assets/logo.png" alt="HERO.IO Logo" />
            </span>
            HERO.IO
          </div>
          <p className="footer-description">
            Building amazing applications for modern web experiences.
          </p>
          <div className="social-links">
            <a 
              href="https://github.com/smsamiulhasansaim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaTwitter />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link">Home</Link>
            </li>
            <li>
              <Link to="/AllApp" className="footer-link">Apps</Link>
            </li>
            <li>
              <Link to="/Installation" className="footer-link">Installation</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">Documentation</a>
            </li>
            <li>
              <a href="#" className="footer-link">Help Center</a>
            </li>
            <li>
              <a href="#" className="footer-link">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="footer-link">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="footer-link">License</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} HERO.IO. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;