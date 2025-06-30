"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Diary {
  id: string;
  title: string;
  description: string;
  image?: string | { url?: string } | null;
  region: string;
  interest: string;
}

export default function TravelDiariesCarousel({ diaries }: { diaries: Diary[] }) {
  // Get unique interests and regions for dropdowns
  const interests = Array.from(new Set(diaries.map(d => d.interest)));
  const regions = Array.from(new Set(diaries.map(d => d.region)));

  // (Optional) You can add state for filtering if you want dropdowns to work

  return (
    <section style={{
      position: 'relative',
      background: '#ffe082',
    //   borderRadius: 16,
      padding: '56px 0 40px 0',
      minHeight: 500,
      overflow: 'hidden',
    }}>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        {/* Title and subtitle */}
        <h2 style={{
          fontSize: 56,
          fontWeight: 900,
          color: '#fff',
          textAlign: 'center',
          marginBottom: 0,
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}>TRAVEL DIARIES</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '8px 0 32px 0' }}>
          <div style={{ flex: 1, height: 2, background: '#fffde7', maxWidth: 120, marginRight: 16 }} />
          <span style={{ color: '#fff', fontWeight: 500, fontSize: 20, letterSpacing: 1 }}>for every passion</span>
          <div style={{ flex: 1, height: 2, background: '#fffde7', maxWidth: 120, marginLeft: 16 }} />
        </div>
        {/* Dropdowns */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 24, justifyContent: 'center' }}>
          <select style={{ padding: 10, borderRadius: 6, border: '1px solid #fff', minWidth: 160, fontSize: 16 }}>
            <option>Interests</option>
            {interests.map(interest => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
          <select style={{ padding: 10, borderRadius: 6, border: '1px solid #fff', minWidth: 160, fontSize: 16 }}>
            <option>Regions</option>
            {regions.map(region => (
              <option key={region}>{region}</option>
            ))}
          </select>
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
          {diaries.map((diary, i) => {
            let imageUrl = '';
            if (typeof diary.image === 'string') imageUrl = diary.image;
            else if (diary.image && typeof diary.image === 'object' && diary.image.url) imageUrl = diary.image.url;
            return (
              <SwiperSlide key={diary.id || i}>
                <div style={{
                  borderRadius: 8,
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  position: 'relative',
                  minHeight: 320,
                  background: '#222',
                  display: 'flex',
                  flexDirection: 'column',
                  height: 340,
                }}>
                  {imageUrl && (
                    <Image src={imageUrl} alt={diary.title} width={400} height={220} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                  )}
                  {/* Black overlay for text readability */}
                  <div style={{
                    background: '#111',
                    color: '#fff',
                    padding: '18px 18px 12px 18px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}>
                    {/* Region and Interest label */}
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>
                      <span style={{ color: '#ff5252' }}>{diary.region}</span>
                      <span style={{ color: '#ffd600' }}> | {diary.interest}</span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{diary.title}</div>
                    <div style={{ fontSize: 14, color: '#fff', opacity: 0.85 }}>{diary.description}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
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