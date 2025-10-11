import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AppDetails.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const [appData, setAppData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppData = async () => {
      try {
        const response = await fetch('/src/Data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const app = data.find(item => item.id === parseInt(id));
        setAppData(app);
      } catch (error) {
        console.error('Error fetching app data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppData();
  }, [id]);

  const formatDownloads = (downloads) => {
    if (downloads >= 1000000000) return (downloads / 1000000000).toFixed(1) + 'B';
    if (downloads >= 1000000) return (downloads / 1000000).toFixed(1) + 'M';
    if (downloads >= 1000) return (downloads / 1000).toFixed(1) + 'K';
    return downloads;
  };

  const formatReviews = (reviews) => {
    if (reviews >= 1000000) return (reviews / 1000000).toFixed(1) + 'M';
    if (reviews >= 1000) return (reviews / 1000).toFixed(1) + 'K';
    return reviews;
  };

  if (loading) {
    return (
      <div className="page-details-wrapper">
        <div className="page-details-container">
          <div>Loading app details...</div>
        </div>
      </div>
    );
  }

  if (!appData) {
    return (
      <div className="page-details-wrapper">
        <div className="page-details-container">
          <div>App not found</div>
        </div>
      </div>
    );
  }

  const ratingsData = appData.ratings ? appData.ratings.map(rating => ({
    name: rating.name,
    count: rating.count
  })).reverse() : [];

  return (
    <div className="page-details-wrapper">
      <div className="page-details-container">
        <div className="main-app-image-wrapper">
          <div className="main-app-image-placeholder">
            <img src={appData.image} alt={appData.title} />
          </div>
        </div>

        <div className="details-content">
          <h1 className="app-title">{appData.title}</h1>
          <p className="developer-info">
            Developed by <span className="developer-name">{appData.companyName}</span>
          </p>
          <div className="line-pro"></div>
          <div className="ratings-reviews-section">
            <div className="detail-item">
              <div className="detail-icon-placeholder">
                <img src="/src/assets/icon-downloads.png" alt="Downloads" />
              </div>
              <p className="detail-value">{formatDownloads(appData.downloads)}</p>
              <p className="detail-label">Downloads</p>
            </div>
            <div className="detail-item">
              <div className="detail-icon-placeholder">
                <img src="/src/assets/icon-ratings.png" alt="Ratings" />
              </div>
              <p className="detail-value">{appData.ratingAvg}</p>
              <p className="detail-label">Average Ratings</p>
            </div>
            <div className="detail-item">
              <div className="detail-icon-placeholder">
                <img src="/src/assets/icon-review.png" alt="Reviews" />
              </div>
              <p className="detail-value">{formatReviews(appData.reviews)}</p>
              <p className="detail-label">Total Reviews</p>
            </div>
            <div className="detail-item">
              <div className="detail-icon-placeholder">
                <img src="/src/assets/icon-size.png" alt="Size" />
              </div>
              <p className="detail-value">{appData.size} MB</p>
              <p className="detail-label">Size</p>
            </div>
          </div>
          <button className="install-button">
            Install Now ({appData.size} MB)
          </button>
        </div>
      </div>
      <div className="line"></div>

      {appData.ratings && (
        <div className="chart-section">
          <div className="chart-container">
            <h3 className="chart-title">Ratings Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                layout="vertical"
                data={ratingsData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 20,
                }}
                barCategoryGap="10%"
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#b3d9ff"
                  horizontal={false}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  style={{ fontSize: '14px' }}
                />
                <XAxis
                  type="number"
                  tickLine={true}
                  axisLine={true}
                  style={{ fontSize: '12px' }}
                />
                <Tooltip />
                <Bar 
                  dataKey="count" 
                  fill="#FF8811" 
                  maxBarSize={25}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
      
      <div className="line"></div>

      <div className="description-section">
        <div className="description-container">
          <h3 className="description-title">Description</h3>
          <div className="description-content">
            <p className="description-paragraph">
              {appData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;