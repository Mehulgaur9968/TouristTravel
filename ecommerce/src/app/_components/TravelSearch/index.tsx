import React, { useState } from 'react'
import classes from './index.module.scss'

interface TravelSearchProps {
  onSearch?: (destination: string, dates: string, travelers: number) => void
}

export const TravelSearch: React.FC<TravelSearchProps> = ({ onSearch }) => {
  const [destination, setDestination] = useState('')
  const [dates, setDates] = useState('')
  const [travelers, setTravelers] = useState(1)

  const handleSearch = () => {
    if (onSearch) {
      onSearch(destination, dates, travelers)
    }
    // You can add actual search functionality here
    console.log('Searching for:', { destination, dates, travelers })
  }

  return (
    <div className={classes.travelSearch}>
      <h2>Find Your Perfect Trip</h2>
      <div className={classes.searchForm}>
        <div className={classes.inputGroup}>
          <label>Destination</label>
          <input
            type="text"
            placeholder="Where do you want to go?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        
        <div className={classes.inputGroup}>
          <label>Travel Dates</label>
          <input
            type="text"
            placeholder="Select dates"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
          />
        </div>
        
        <div className={classes.inputGroup}>
          <label>Travelers</label>
          <select
            value={travelers}
            onChange={(e) => setTravelers(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Traveler' : 'Travelers'}
              </option>
            ))}
          </select>
        </div>
        
        <button onClick={handleSearch} className={classes.searchButton}>
          Search Deals
        </button>
      </div>
    </div>
  )
} 