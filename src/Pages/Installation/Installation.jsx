
import React, { useState, useEffect } from 'react';
import './Installation.css';
import { CloudDownload, Star } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppItem = ({ app, onUninstall }) => (
  <div className="app-item">
    <div className="app-icon-placeholder">
      {app.image ? (
        <img 
          src={app.image} 
          alt={app.name} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            borderRadius: '8px'
          }} 
        />
      ) : (
        <CloudDownload size={24} color="#666" />
      )}
    </div>
    <div className="app-details">
      <div className="app-name">{app.name}</div>
      <div className="app-stats">
        <span className="app-rating">
          <Star size={14} color="#FFC107" fill="#FFC107" />
          {app.rating}
        </span>
        <span className="app-downloads">{app.downloads} downloads</span>
        <span className="app-size">{app.size}</span>
      </div>
    </div>
    <button className="uninstall-button" onClick={() => onUninstall(app.id)}>
      Uninstall
    </button>
  </div>
);

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter(app => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    toast.info('App uninstalled successfully!');
  };

  const handleSortBySize = () => {
    const sortedApps = [...installedApps].sort((a, b) => {
      const sizeA = parseFloat(a.size);
      const sizeB = parseFloat(b.size);
      return sizeB - sizeA;
    });
    setInstalledApps(sortedApps);
  };

  return (
    <div className="installation-container">
      <header className="installation-header">
        <h1>Your Installed Apps</h1>
        <p>Manage your installed applications</p>
      </header>
      
      {installedApps.length === 0 ? (
        <div className="no-apps-message" style={{ 
          textAlign: 'center', 
          padding: '40px', 
          color: '#666',
          fontSize: '1.1em'
        }}>
          No apps installed yet. Browse apps and install them to see them here!
        </div>
      ) : (
        <div className="app-list-wrapper">
          <div className="app-list-header">
            <span className="apps-found">{installedApps.length} App{installedApps.length !== 1 ? 's' : ''} Found</span>
            <div className="sort-by" onClick={handleSortBySize}>
              Sort By Size
              <span className="sort-arrow">▼</span>
            </div>
          </div>
          <div className="app-list">
            {installedApps.map(app => (
              <AppItem key={app.id} app={app} onUninstall={handleUninstall} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Installation;