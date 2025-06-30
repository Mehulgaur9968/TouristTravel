'use client';

import React from 'react';
import dynamic from 'next/dynamic';

type TravelFooterProps = {
  footerBgUrl: string;
};

const TravelFooter = dynamic(() => import('./TravelFooter'), {
  ssr: true,
  loading: () => <div>Loading footer...</div>
});

export default function TravelFooterWrapper({ footerBgUrl }: TravelFooterProps) {
  return <TravelFooter footerBgUrl={footerBgUrl} />;
} 