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
    </div>
  );
};

export default Loader;