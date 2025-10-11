import React, { useState, useEffect } from 'react';
import './TrendingApps.css';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AppCard = ({ id, image, title, downloads, ratingAvg }) => {
    return (
        <Link to={`/app-details/${id}`} className="app-card-link">
            <div className="app-card">
                <div className="app-card-placeholder">
                    <img src={image} alt={title} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
                </div>
                <div className="app-info">
                    <p className="app-title">{title}</p>
                    <div className="app-stats">
                        <div className="downloads">
                            <FaDownload className="icon" />
                            <span className="count">{downloads}</span>
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

const TrendingApps = () => {
    const [appsData, setAppsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Public/Data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setAppsData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const formatDownloads = (downloads) => {
        if (downloads >= 1000000000) return (downloads / 1000000000).toFixed(0) + 'B';
        if (downloads >= 1000000) return (downloads / 1000000).toFixed(0) + 'M';
        if (downloads >= 1000) return (downloads / 1000).toFixed(0) + 'K';
        return downloads;
    };

    if (loading) return (
        <div className="trending-apps-container">
            <div>Loading apps...</div>
        </div>
    );

    const trendingApps = appsData.slice(0, 8);

    return (
        <div className="trending-apps-container">
            <header className="trending-apps-header">
                <h1>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </header>
            
            <div className="apps-grid">
                {trendingApps.map((app) => (
                    <AppCard
                        key={app.id}
                        id={app.id}
                        image={app.image}
                        title={app.title}
                        downloads={formatDownloads(app.downloads)}
                        ratingAvg={app.ratingAvg}
                    />
                ))}
            </div>

            <div className="show-all-button-container">
             <Link to="/AllApp"><button className="show-all-button">Show All</button></Link>
            </div>
        </div>
    );
};

export default TrendingApps;