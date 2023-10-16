

import React from 'react';
import NotificationCard from './NotificationCard';
import './NotificationPage.css';
import { Link } from 'react-router-dom';

const NotificationPage = () => {
  const notifications = [
    { message: 'Notification 1: This is the first notification.', timestamp: 'Oct 15, 2023' },
    { message: 'Notification 2: This is the second notification.', timestamp: 'Oct 16, 2023' },
    // Add more notifications as needed
  ];

  return (
    <div className="notifications-page">
      <h2 className="page-title">Notifications</h2>
      <div className="notification-list">
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            message={notification.message}
            timestamp={notification.timestamp}
          />
        ))}
      </div>
      <Link to="/"><button className="back-button">Back</button></Link>
    </div>
  );
};

export default NotificationPage;