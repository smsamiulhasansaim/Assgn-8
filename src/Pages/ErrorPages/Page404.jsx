import React from 'react';
import './Page404.css';
function Page404() {
  return (
    <div className="error-container">
      <div className="error-content">
        <img src="/src/assets/error-404.png" alt="" />
        <h1 className="error-title">Oops, page not found!</h1>
        <p className="error-message">
          The page you are looking for is not available.
        </p>
        <button 
          className="go-back-button"
          onClick={() => window.history.back()} 
        >
          Go Back!
        </button>
      </div>
    </div>
  );
}

export default Page404;