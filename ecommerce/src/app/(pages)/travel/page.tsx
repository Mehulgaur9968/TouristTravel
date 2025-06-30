import { Gutter } from '../../_components/Gutter'
import { VerticalPadding } from '../../_components/VerticalPadding'
import { Button } from '../../_components/Button'
import { fetchDocs } from '../../_api/fetchDocs'
import type { Destination, Media } from '../../../payload/payload-types'
import Image from 'next/image'
import React from 'react'
import { HeroCarousel } from '../../_components/HeroCarousel'
import DestinationCard from '../../_components/Destinations/DestinationCard'
import dynamic from 'next/dynamic'
import TravelDiariesCarousel from '../../_components/TravelDiariesCarousel'
import GetStartedSection from '../../_components/GetStartedSection'
import CraftsCarousel from '../../_components/CraftsCarousel'
import TravelFooter from '../../_components/Footer/FooterComponent/TravelFooter'
import NotificationBanner from '../../_components/NotificationBanner'

// Define Diary and Craft types inline since they are not in payload-types yet
interface Diary {
  id: string;
  title: string;
  description: string;
  image?: string | Media | null;
  region: string;
  interest: string;
}
interface Craft {
  id: string;
  title: string;
  image?: string | Media | null;
  description?: string | null;
}

const AttractionsCarousel = dynamic(
  () => import('../../_components/AttractionsCarousel'),
  { ssr: false }
)

export default async function TravelPage() {
  const destinations = await fetchDocs<Destination>('destinations')
  const diaries = await fetchDocs<Diary>('diaries')
  const crafts = await fetchDocs<Craft>('crafts')
  const media = await fetchDocs<Media>('media')

  // Find the video with filename 'India-360-v2.mp4'
  const videoMedia = media.find(m => m.filename === 'India-360-v2.mp4')
  const videoUrl = videoMedia?.url || null

  // Use the image with filename 'red-fort-delhi1-attr-hero.jpg' as the hero image
  const heroImage = media.find(m => m.filename === 'red-fort-delhi1-attr-hero.jpg')
  const heroImageUrl = heroImage?.url || ''
  
  const footerBg = media.find(m => m.filename === 'footer-background-image.jpg')
  const footerBgUrl = footerBg?.url || ''

  // Find the flight home page background image
  const flightBg = media.find(m => m.filename === 'flight-home-page-bg.jpg')
  const flightBgUrl = flightBg?.url || ''
  
  // Attractions: use first 4 destinations
  const attractions = destinations.slice(0, 6)

  return (
    <>
      <NotificationBanner />
      <div style={{ background: '#f7f7f7' }}>
        {videoUrl && heroImageUrl && <HeroCarousel videoUrl={videoUrl} heroImageUrl={heroImageUrl} />}
        <AttractionsCarousel attractions={attractions} backgroundImage={heroImageUrl} />
        <TravelDiariesCarousel diaries={diaries} />
        <CraftsCarousel crafts={crafts} />
        <GetStartedSection backgroundImage={flightBgUrl} />
      </div>
      <TravelFooter footerBgUrl={footerBgUrl} />
    </>
  )
} 