import React from 'react';
import Image from 'next/image';
import type { Destination } from '../../../../payload/payload-types';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
      {destination.image && typeof destination.image === 'object' && destination.image.url && (
        <Image src={destination.image.url} alt={destination.title} width={400} height={220} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
      )}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.5)', color: '#fff', padding: 12 }}>
        <h3 style={{ margin: 0, fontSize: 20 }}>{destination.title}</h3>
        <span style={{ fontSize: 14 }}>{destination.location}</span>
      </div>
    </div>
  );
};

export default DestinationCard; 