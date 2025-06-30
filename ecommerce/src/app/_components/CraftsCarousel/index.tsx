"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Craft {
  id: string;
  title: string;
  image?: string | { url?: string } | null;
  description?: string | null; // Assuming description might be used for location/origin
}

export default function CraftsCarousel({ crafts }: { crafts: Craft[] }) {
  return (
    <section style={{
      width: '100%',
      padding: '0',
    //   marginTop: '56px',
    }}>
      {/* Red Header */}
      <div style={{
        background: '#e53935',
        color: '#fff',
        padding: '64px 24px 48px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 56,
          fontWeight: 900,
          letterSpacing: 2,
          textTransform: 'uppercase',
          margin: 0,
        }}>EXQUISITE CRAFTS</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '8px 0 0 0' }}>
          <div style={{ flex: 1, height: 2, background: 'rgba(255,255,255,0.5)', maxWidth: 120, marginRight: 16 }} />
          <span style={{ fontWeight: 500, fontSize: 20, letterSpacing: 1 }}>of timeless tradition</span>
          <div style={{ flex: 1, height: 2, background: 'rgba(255,255,255,0.5)', maxWidth: 120, marginLeft: 16 }} />
        </div>
      </div>

      {/* Carousel Section */}
      <div style={{
        background: '#f7f7f7', // Light grey background for the carousel area
        padding: '48px 0',
      }}>
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
          style={{ padding: '0 24px 32px 24px', maxWidth: 1400, margin: '0 auto' }}
        >
          {crafts.map((craft, i) => {
            const imageUrl = typeof craft.image === 'string' ? craft.image : (craft.image?.url || '');
            return (
              <SwiperSlide key={craft.id || i}>
                <div style={{
                  borderRadius: 8,
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                  background: '#fff',
                  height: '100%',
                }}>
                  {imageUrl && (
                    <Image src={imageUrl} alt={craft.title} width={400} height={220} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                  )}
                  <div style={{ padding: '16px 20px', background: '#f0f0f0' }}>
                    <div style={{ color: '#e53935', fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
                      {/* Placeholder for location - using description for now */}
                      {craft.description || 'India'} 
                    </div>
                    <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#111' }}>{craft.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        
        {/* Discover more button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
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