import { Gutter } from '../../_components/Gutter'
import { VerticalPadding } from '../../_components/VerticalPadding'
import { Button } from '../../_components/Button'
import { fetchDocs } from '../../_api/fetchDocs'
import type { Destination, Media } from '../../../payload/payload-types'
import Image from 'next/image'
import React from 'react'
import { HeroCarousel } from '../../_components/HeroCarousel'
import DestinationCard from '../../_components/Destinations/DestinationCard'

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
  console.log(heroImage)
  const heroImageUrl = heroImage?.url || ''
  console.log(heroImageUrl)
  // Attractions: use first 4 destinations
  const attractions = destinations.slice(0, 4)

  return (
    <div style={{ background: '#f7f7f7' }}>
      {/* Hero Section as Video */}
      {videoUrl && heroImageUrl && <HeroCarousel videoUrl={videoUrl} heroImageUrl={heroImageUrl} />}
      <Gutter>
        {/* Destinations/Attractions Grid */}
        <section id="destinations" style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1a237e', marginBottom: 8, letterSpacing: 1, textTransform: 'uppercase' }}>ATTRACTIONS</h2>
          <div style={{ height: 4, background: '#e3f2fd', borderRadius: 2, marginBottom: 24 }} />
          <div style={{ display: 'flex', gap: 32, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            {attractions.map((dest, i) => (
              <div key={dest.id || i} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.10)', overflow: 'hidden', width: 420, minWidth: 320, maxWidth: '100%', marginBottom: 16 }}>
                <DestinationCard destination={dest} />
              </div>
            ))}
          </div>
        </section>

        {/* Travel Diaries Section */}
        <section style={{ marginTop: 56, background: '#ffe082', borderRadius: 16, padding: 32 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#e65100', marginBottom: 8, textTransform: 'uppercase' }}>TRAVEL DIARIES</h2>
          <div style={{ height: 4, background: '#fff3e0', borderRadius: 2, marginBottom: 24 }} />
          <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            <select style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }}>
              <option>Interests</option>
              <option>Adventure</option>
              <option>Culture</option>
              <option>Nature</option>
            </select>
            <select style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }}>
              <option>Regions</option>
              <option>North</option>
              <option>South</option>
              <option>East</option>
              <option>West</option>
            </select>
          </div>
          {/* Featured Diary Only */}
          {diaries.length > 0 && (
            <div style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
              overflow: 'hidden',
              marginBottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 0,
            }}>
              {diaries[0].image && typeof diaries[0].image === 'object' && diaries[0].image.url && (
                <Image src={diaries[0].image.url} alt={diaries[0].title} width={900} height={400} style={{ width: '100%', height: 400, objectFit: 'cover' }} />
              )}
              {diaries[0].image && typeof diaries[0].image === 'string' && (
                <Image src={diaries[0].image} alt={diaries[0].title} width={900} height={400} style={{ width: '100%', height: 400, objectFit: 'cover' }} />
              )}
              <div style={{ padding: 24, width: '100%' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: 22, fontWeight: 700 }}>{diaries[0].title}</h3>
                <p style={{ color: '#666', fontSize: 16 }}>{diaries[0].description}</p>
                <div style={{ fontSize: 14, color: '#888', marginTop: 4 }}>{diaries[0].region} | {diaries[0].interest}</div>
              </div>
            </div>
          )}
        </section>

        {/* Thematic Sections (Itineraries, Crafts, etc.) */}
        <section style={{ marginTop: 56 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1976d2', marginBottom: 8, textTransform: 'uppercase' }}>EXQUISITE CRAFTS</h2>
          <div style={{ height: 4, background: '#e3f2fd', borderRadius: 2, marginBottom: 24 }} />
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 24 }}>
            {crafts.map(craft => (
              <div key={craft.id} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', overflow: 'hidden', textAlign: 'center', padding: 16, minWidth: 320, maxWidth: 420 }}>
                {craft.image && typeof craft.image === 'object' && craft.image.url && (
                  <Image src={craft.image.url} alt={craft.title} width={120} height={80} style={{ objectFit: 'cover', borderRadius: 8, marginBottom: 12 }} />
                )}
                {craft.image && typeof craft.image === 'string' && (
                  <Image src={craft.image} alt={craft.title} width={120} height={80} style={{ objectFit: 'cover', borderRadius: 8, marginBottom: 12 }} />
                )}
                <h4 style={{ margin: 0, fontSize: 16 }}>{craft.title}</h4>
                {craft.description && <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>{craft.description}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Get Started Section */}
        <section style={{ marginTop: 64, background: '#1a237e', color: '#fff', borderRadius: 16, padding: 40, textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 12 }}>Inspired?</h2>
          <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>GET STARTED</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 0, flexWrap: 'wrap', marginBottom: 24, background: '#111a5c', borderRadius: 8, overflow: 'hidden', width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
            <Button href="#flights" label="Flights" appearance="primary" className="tab-active" />
            <Button href="#hotels" label="Hotels" appearance="secondary" className="tab-inactive" />
            <Button href="#tours" label="Tours" appearance="secondary" className="tab-inactive" />
            <Button href="#guides" label="Guides" appearance="secondary" className="tab-inactive" />
          </div>
          <input type="text" placeholder="Search destinations, hotels, or experiences..." style={{ padding: 12, borderRadius: 8, border: 'none', width: 320, maxWidth: '90%', marginBottom: 16 }} />
          <br />
          <Button href="#" label="Search" appearance="primary" />
        </section>
      </Gutter>
    </div>
  )
} 