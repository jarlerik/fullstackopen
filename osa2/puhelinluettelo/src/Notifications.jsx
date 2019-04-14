import React from 'react';
import './notification.css';

const Notifications = ({notifications}) => {
    return (
        <ul>
            {notifications.map( (notification, index) => <li key={`notification-${notification.message}-${index}`} className={`notification-${notification.type}`}>{notification.message}</li>)}
        </ul>
    );
};

Notifications.ERROR = 'error';
Notifications.SUCCESS = 'success';

export default Notifications;