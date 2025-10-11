import React, { useState, useEffect } from 'react';
import './AllApp.css';
import { FaStar, FaDownload, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AppNotFound from '../AppNotFound/AppNotFound';
const AllApp = () => {
  const [appsData, setAppsData] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setAppsData(data);
        setFilteredApps(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = appsData.filter(app =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (app.companyName && app.companyName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (app.description && app.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredApps(filtered);
  }, [searchTerm, appsData]);

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000000) return (downloads / 1000000000).toFixed(1) + 'B';
    if (downloads >= 1000000) return (downloads / 1000000).toFixed(1) + 'M';
    if (downloads >= 1000) return (downloads / 1000).toFixed(1) + 'K';
    return downloads;
  };

  const AppCard = ({ id, image, title, downloads, ratingAvg, companyName }) => {
    return (
      <Link to={`/app-details/${id}`} className="app-card-link">
        <div className="app-card">
          <div className="app-card-placeholder">
            <img 
              src={image} 
              alt={title} 
              style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}}
              onError={(e) => {
                e.target.src = '';
              }}
            />
          </div>
          <div className="app-info">
            <p className="app-title">{title}</p>
            {companyName && <p className="app-company">{companyName}</p>}
            <div className="app-stats">
              <div className="downloads">
                <FaDownload className="icon" />
                <span className="count">{formatDownloads(downloads)}</span>
              </div>
              <div className="rating">
                <FaStar className="icon" />
                <span className="score">{ratingAvg}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  if (loading) {
    return (
      <div className="all-apps-container">
        <div className="loading">Loading apps...</div>
      </div>
    );
  }

  if (filteredApps.length === 0 && !loading) {
    return <AppNotFound />;
  }

  return (
    <div className="all-apps-container">

      <header className="apps-header">
        <h1>Our All Applications</h1>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </header>

      <div className="search-and-count">
        <span className="apps-count">({filteredApps.length}) Apps Found</span>
        <div className="search-box-container">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search Apps..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="apps-grid">
        {filteredApps.map((app) => (
          <AppCard
            key={app.id}
            id={app.id}
            image={app.image}
            title={app.title}
            downloads={app.downloads}
            ratingAvg={app.ratingAvg}
            companyName={app.companyName}
          />
        ))}
      </div>
    </div>
  );
};

export default AllApp;