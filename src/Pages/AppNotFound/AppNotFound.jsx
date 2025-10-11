import React from 'react';
import "./AppNotFound.css"
const AppNotFound = () => {
    return (
        <>
        <div className="error-container">
      <div className="error-content">
        <img src="/images/App-Error.png" alt="" />
        <h1 className="error-title">OPPS!! APP NOT FOUND</h1>
        <p className="error-message">
          The App you are requesting is not found on our system.  please try another apps
        </p>
        <button 
          className="go-back-button"
          onClick={() => window.history.back()} 
        >
          Go Back!
        </button>
      </div>
    </div>    
        </>
    );
};

export default AppNotFound; 