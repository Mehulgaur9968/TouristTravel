"use client"
import React from 'react';
import { Button } from '../Button';

export const HeroCarousel: React.FC<{ videoUrl: string; heroImageUrl: string }> = ({ videoUrl, heroImageUrl }) => {
  return (
    <>
      {/* Video Section */}
      <section
        style={{
          position: 'relative',
          height: 700,
          overflow: 'hidden',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))',
            zIndex: 1,
          }}
        />
      </section>
      {/* Hero Image Section with Text */}
      <section
        style={{
          position: 'relative',
          height: 1000,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={heroImageUrl}
          alt="Hero"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))',
            zIndex: 1,
          }}
        />
        <div style={{
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          pointerEvents: 'auto',
        }}>
          <h1 style={{ fontSize: 48, fontWeight: 900, marginBottom: 8, letterSpacing: 2, color: '#fff' }}>DESTINATIONS</h1>
          <p style={{ fontSize: 20, fontWeight: 500, marginBottom: 24, color: '#fff' }}>for every bucket list</p>
          <Button href="#destinations" label="Explore Now" appearance="primary" />
        </div>
      </section>
    </>
  );
}; 