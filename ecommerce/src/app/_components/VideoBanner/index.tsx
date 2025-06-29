import React from 'react';

export const VideoBanner: React.FC<{ videoUrl: string }> = ({ videoUrl }) => (
  <section
    style={{
      position: 'relative',
      width: '100%',
      height: 400,
      overflow: 'hidden',
    }}
  >
    <video
      src={videoUrl}
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  </section>
);

export default VideoBanner; 