
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaGithub } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo-icon">
          <img src="/src/assets/logo.png" alt="HERO.IO Logo" />
        </span>
        HERO.IO
      </div>

      <button 
        className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/AllApp" 
            className={`nav-link ${location.pathname === '/AllApp' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Apps
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            to="/Installation" 
            className={`nav-link ${location.pathname === '/Installation' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Installation
          </Link>
        </li>
      </ul>

      <Link 
        to="https://github.com/smsamiulhasansaim" 
        className="navbar-contribute-btn"
        target="_blank" 
        rel="noopener noreferrer"
        onClick={closeMenu}
      >
        <FaGithub className="github-icon" /> Contribute
      </Link>
    </nav>
  );
}

export default Navbar;