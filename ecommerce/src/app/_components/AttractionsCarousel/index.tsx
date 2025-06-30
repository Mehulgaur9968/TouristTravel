"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Accepts an array of attractions (destinations) and a background image URL
export default function AttractionsCarousel({ attractions, backgroundImage }: { attractions: any[], backgroundImage: string }) {
  return (
    <section style={{
      position: 'relative',
      padding: '64px 0 40px 0',
      background: `url(${backgroundImage}) center/cover no-repeat`,
      minHeight: 600,
      overflow: 'hidden',
    }}>
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,0.85)',
        zIndex: 1,
        backdropFilter: 'blur(2px) grayscale(1)'
      }} />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        {/* Title and subtitle */}
        <h2 style={{
          fontSize: 56,
          fontWeight: 900,
          color: '#5fa8e6',
          textAlign: 'center',
          marginBottom: 0,
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}>ATTRACTIONS</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '8px 0 32px 0' }}>
          <div style={{ flex: 1, height: 2, background: '#b3d6f7', maxWidth: 120, marginRight: 16 }} />
          <span style={{ color: '#7bb6e6', fontWeight: 500, fontSize: 20, letterSpacing: 1 }}>worth a thousand stories</span>
          <div style={{ flex: 1, height: 2, background: '#b3d6f7', maxWidth: 120, marginLeft: 16 }} />
        </div>
        {/* Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={4}
          breakpoints={{
            1200: { slidesPerView: 4 },
            900: { slidesPerView: 3 },
            600: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          style={{ paddingBottom: 32 }}
        >
          {attractions.map((dest, i) => (
            <SwiperSlide key={dest.id || i}>
              <div style={{
                borderRadius: 18,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                position: 'relative',
                minHeight: 340,
                background: '#222',
              }}>
                {dest.image && (
                  <Image src={typeof dest.image === 'object' && dest.image.url ? dest.image.url : dest.image} alt={dest.title} width={400} height={340} style={{ width: '100%', height: 340, objectFit: 'cover' }} />
                )}
                {/* Dark overlay for text readability */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  top: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.05) 100%)',
                }} />
                {/* Title */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '18px 20px',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 20,
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.0) 100%)',
                  borderBottomLeftRadius: 18,
                  borderBottomRightRadius: 18,
                }}>{dest.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Discover more button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
          <button style={{
            background: '#e53935',
            color: '#fff',
            border: 'none',
            borderRadius: 24,
            padding: '10px 32px',
            fontWeight: 700,
            fontSize: 18,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            transition: 'background 0.2s',
          }}>Discover more</button>
        </div>
      </div>
    </section>
  );
} 