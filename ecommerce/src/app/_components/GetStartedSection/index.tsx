"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const bgUrl = "/assets/images/plane-wing.jpg"; // Use your provided image path

const tabOptions = [
  { label: 'Flights', icon: '✈️' },
  { label: 'Trains', icon: '🚆' },
  { label: 'Buses', icon: '🚌' },
  { label: 'Cabs', icon: '🚕' },
  { label: 'Accommodations', icon: '🏨' },
  { label: 'Travel Partners', icon: '🤝' },
];

const fareTypes = [
  'Regular Fares',
  'Armed Forces Fares',
  'Student Fares',
  'Senior Citizen Fares',
  'Doctors & Nurses Fares',
];

export default function GetStartedSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [tripType, setTripType] = useState('oneway');
  const [fareType, setFareType] = useState('Regular Fares');
  const [directOnly, setDirectOnly] = useState(false);

  return (
    <section style={{
      position: 'relative',
      minHeight: 600,
      width: '100vw',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      background: `url(${bgUrl}) center/cover no-repeat`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      overflow: 'hidden',
    }}>
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(10,30,80,0.55)',
        zIndex: 1,
      }} />
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '48px 0' }}>
        <div style={{ textAlign: 'center', color: '#fff', marginBottom: 32 }}>
          <div style={{ fontSize: 32, fontWeight: 400, marginBottom: '16px', lineHeight: 1 }}>Inspired?</div>
          <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: 2, marginBottom: 32, marginTop: 0, lineHeight: 1.1 }}>GET STARTED</div>
        </div>
        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {tabOptions.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              style={{
                background: activeTab === idx ? '#e53935' : 'rgba(255,255,255,0.08)',
                color: activeTab === idx ? '#fff' : '#fff',
                border: activeTab === idx ? '2px solid #e53935' : '2px solid #fff',
                borderRadius: 6,
                padding: '16px 32px',
                fontWeight: 700,
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
                minWidth: 120,
                boxShadow: activeTab === idx ? '0 2px 8px rgba(0,0,0,0.10)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              <span style={{ fontSize: 24 }}>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>
        {/* Trip type toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 16, color: '#fff', fontWeight: 700, fontSize: 18 }}>
          <span
            style={{
              color: tripType === 'oneway' ? '#ffd600' : '#fff',
              textDecoration: tripType === 'oneway' ? 'underline' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => setTripType('oneway')}
          >One Way</span>
          <span
            style={{
              color: tripType === 'round' ? '#ffd600' : '#fff',
              textDecoration: tripType === 'round' ? 'underline' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => setTripType('round')}
          >Round Trip</span>
        </div>
        {/* Inputs */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
          <input placeholder="From Origin" style={{ padding: 16, borderRadius: 6, border: 'none', minWidth: 200, fontSize: 18, marginRight: 4 }} />
          <input placeholder="To Destination" style={{ padding: 16, borderRadius: 6, border: 'none', minWidth: 200, fontSize: 18, marginRight: 4 }} />
          <input type="date" style={{ padding: 16, borderRadius: 6, border: 'none', minWidth: 180, fontSize: 18, marginRight: 4 }} />
          {tripType === 'round' && <input type="date" style={{ padding: 16, borderRadius: 6, border: 'none', minWidth: 180, fontSize: 18, marginRight: 4 }} />}
          <select style={{ padding: 16, borderRadius: 6, border: 'none', minWidth: 140, fontSize: 18, marginRight: 4 }}>
            <option>1 Traveler</option>
            <option>2 Travelers</option>
            <option>3 Travelers</option>
            <option>4 Travelers</option>
          </select>
          <select style={{ padding: 16, borderRadius: 6, border: 'none', minWidth: 140, fontSize: 18 }}>
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>
        {/* Fare type */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 8, flexWrap: 'wrap' }}>
          <span style={{ color: '#fff', fontWeight: 600, fontSize: 16, marginRight: 8 }}>Select A Fare Type:</span>
          {fareTypes.map(type => (
            <label key={type} style={{ color: '#fff', fontWeight: 500, fontSize: 15, display: 'flex', alignItems: 'center', gap: 4 }}>
              <input
                type="radio"
                name="fareType"
                value={type}
                checked={fareType === type}
                onChange={() => setFareType(type)}
                style={{ accentColor: '#e53935', marginRight: 4 }}
              />
              {type}
            </label>
          ))}
        </div>
        {/* Direct flight only */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
          <label style={{ color: '#fff', fontWeight: 500, fontSize: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="checkbox"
              checked={directOnly}
              onChange={e => setDirectOnly(e.target.checked)}
              style={{ accentColor: '#e53935' }}
            />
            Direct flight only
          </label>
        </div>
        {/* Search button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
          <button style={{
            background: '#e0e0e0',
            color: '#e53935',
            border: 'none',
            borderRadius: 24,
            padding: '14px 48px',
            fontWeight: 700,
            fontSize: 24,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            transition: 'background 0.2s',
          }}>Search</button>
        </div>
        {/* Info text */}
        <div style={{ color: '#fff', fontSize: 12, textAlign: 'center', marginTop: 24, opacity: 0.8 }}>
          The information related to booking is provided through API integration from various Online Travel Aggregators (OTA). Other OTAs interested in integration with Incredible India Digital Portal may contact the Ministry of Tourism.
        </div>
      </div>
    </section>
  );
} 