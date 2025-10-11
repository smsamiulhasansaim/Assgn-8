import React from 'react';
import './Installation.css';
import { CloudDownload, Star } from 'lucide-react';

const installedApps = [
    {
        id: 1,
        name: 'Forest: Focus For Productivity',
        downloads: '9M',
        rating: 5,
        size: '258 MB'
    },
    {
        id: 2,
        name: 'Photo Editor Pro',
        downloads: '5.2M',
        rating: 4,
        size: '152 MB'
    },
    {
        id: 3,
        name: 'Fitness Tracker',
        downloads: '3.8M',
        rating: 4.5,
        size: '89 MB'
    },
    {
        id: 4,
        name: 'Music Stream',
        downloads: '12M',
        rating: 4.8,
        size: '342 MB'
    },
    {
        id: 5,
        name: 'Language Learning',
        downloads: '7.5M',
        rating: 4.2,
        size: '210 MB'
    }
];

const AppItem = ({ app }) => (
    <div className="app-item">
        <div className="app-icon-placeholder">
            <CloudDownload size={24} color="#666" />
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
        <button className="uninstall-button">Uninstall</button>
    </div>
);

const Installation = () => {
    return (
        <div className="installation-container">
            <header className="installation-header">
                <h1>Your Installed Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </header>
            <div className="app-list-wrapper">
                <div className="app-list-header">
                    <span className="apps-found">{installedApps.length} Apps Found</span>
                    <div className="sort-by">
                        Sort By Size
                        <span className="sort-arrow">▼</span>
                    </div>
                </div>
                <div className="app-list">
                    {installedApps.map(app => (
                        <AppItem key={app.id} app={app} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Installation;        