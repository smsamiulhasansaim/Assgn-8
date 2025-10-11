import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <img 
        src="/src/assets/logo.png" 
        alt="Loading" 
        className="loading-image"
      />
      <p style={{marginTop: '10px', color: '#5d3fd3'}}>Loading...</p>
    </div>
  );
};

export default Loader;