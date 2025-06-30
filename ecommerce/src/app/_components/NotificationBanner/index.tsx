'use client';

import React, { useState } from 'react';
import InfoIcon from './InfoIcon';
import CloseIcon from './CloseIcon';

const NotificationBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#000',
        color: '#fff',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1000,
      }}
    >
      <InfoIcon 
        style={{ 
          fontSize: '24px',
          marginRight: '12px',
          flexShrink: 0
        }} 
      />
      <p style={{ 
        margin: 0,
        fontSize: '14px',
        fontWeight: 400,
        flex: 1,
        textAlign: 'center',
        padding: '0 24px'
      }}>
        Welcome to the new Incredible India Digital Portal! While we are continuously updating and improving the site, we would love to hear your suggestions for features or content you'd like to see. Please share your feedback at{' '}
        <a
          href="mailto:mehul@wanderlust.com"
          style={{
            color: '#ff4444',
            textDecoration: 'none'
          }}
        >
          mehul@wanderlust.com
        </a>
        .
      </p>
      <button
        onClick={() => setIsVisible(false)}
        style={{
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CloseIcon style={{ fontSize: '20px' }} />
      </button>
    </div>
  );
};

export default NotificationBanner; 