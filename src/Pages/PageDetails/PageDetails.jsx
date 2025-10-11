import React from 'react';
import './PageDetails.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const PageDetails = () => {
  const appData = {
    title: "SmPlan:ToDo List With Reminder",
    developer: "productive.io",
    downloads: "8M",
    averageRatings: "4.9",
    totalReviews: "54K",
    installSize: "291 MB"
  };

  const ratingsData = [
    { name: '5 star', count: 11000 },
    { name: '4 star', count: 6200 },
    { name: '3 star', count: 2800 },
    { name: '2 star', count: 1800 },
    { name: '1 star', count: 900 },
  ];

  return (
    <div className="page-details-wrapper">
      <div className="page-details-container">
        <div className="main-app-image-wrapper">
          <div className="main-app-image-placeholder">
            <img src="#" alt="" />
          </div>
        </div>

        <div className="details-content">
          <h1 className="app-title">{appData.title}</h1>
          <p className="developer-info">Developed by <span className="developer-name">{appData.developer}</span></p>
          <div className="line-pro"></div>
          <div className="ratings-reviews-section">
            <div className="detail-item">
              <div className="detail-icon-placeholder">
                <img src="/src/assets/icon-downloads.png" alt="" />
              </div>
              <p className="detail-value">{appData.downloads}</p>
              <p className="detail-label">Downloads</p>
            </div>
            <div className="detail-item">
              <div className="detail-icon-placeholder">
                <img src="/src/assets/icon-ratings.png" alt="" />
              </div>
              <p className="detail-value">{appData.averageRatings}</p>
              <p className="detail-label">Average Ratings</p>
            </div>
            <div className="detail-item">
              <div className="detail-icon-placeholder">
                <img src="/src/assets/icon-review.png" alt="" />
              </div>
              <p className="detail-value">{appData.totalReviews}</p>
              <p className="detail-label">Total Reviews</p>
            </div>
          </div>
          <button className="install-button">
            Install Now ({appData.installSize})
          </button>
        </div>
      </div>
      <div className="line"></div>

      <div className="chart-section">
        <div className="chart-container">
          <h3 className="chart-title">Ratings</h3>
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
                domain={[0, 12000]}
                tickLine={true}
                axisLine={true}
                style={{ fontSize: '12px' }}
              />
              <Tooltip />
              <Bar 
                dataKey="count" 
                fill="#ff8c00" 
                maxBarSize={25}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="line"></div>

      <div className="description-section">
        <div className="description-container">
          <h3 className="description-title">Description</h3>
          <div className="description-content">
            <p className="description-paragraph">
              This focus app takes the proven <strong>Pomodoro technique</strong> and makes it even more practical for modern lifestyles. 
              Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions 
              and maximizing concentration. Users can create custom work and break intervals, track how many sessions 
              they complete each day, and review detailed statistics about their focus habits over time. The design is 
              minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications 
              gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
            </p>
            
            <p className="description-paragraph">
              A unique feature of this app is the integration of <strong>task lists with timers</strong>. You can assign each task to 
              a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how 
              much time you've worked but also which tasks consumed the most energy. This allows you to reflect on your 
              efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as 
              white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
            </p>
            
            <p className="description-paragraph">
              For people who struggle with procrastination, the app provides <strong>motivational streaks and achievements</strong>. 
              Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified 
              approach makes focusing more engaging and less like a chore. Whether you're studying for exams, coding, 
              writing, or handling office work, the app adapts to your routine. By combining focus tracking, task 
              management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. 
              It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;