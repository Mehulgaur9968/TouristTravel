import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from 'payload/components'

import { SeedButton } from './SeedButton'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to your Travel Dashboard!</h4>
      </Banner>
      {"Here's what to do next:"}
      <ul className={`${baseClass}__instructions`}>
        <li>
          <SeedButton />
          {' to populate your dashboard with sample destinations, tours, and bookings to jump-start your new travel project. Then '}
          <a href="/">visit your travel website</a>
          {' to see the results.'}
        </li>
        <li>
          {'Head over to the '}
          <Link to="/admin/collections/destinations">Destinations</Link>
          {' and '}
          <Link to="/admin/collections/tours">Tours</Link>
          {' collections to add or edit travel destinations and tour packages.'}
        </li>
        <li>
          {'Customize your collections to include details such as itineraries, pricing, images, and booking options. You can also add new collections for hotels, activities, or customer reviews as needed.'}
        </li>
        <li>
          {'Check out the '}
          <a
            href="https://payloadcms.com/docs/configuration/collections"
            target="_blank"
            rel="noopener noreferrer"
          >
            collections documentation
          </a>
          {' and '}
          <a
            href="https://payloadcms.com/docs/fields/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            fields overview
          </a>
          {' to learn how to further customize your travel dashboard.'}
        </li>
        <li>
          {'If you are new to Payload, we recommend you check out the '}
          <a
            href="https://payloadcms.com/docs/getting-started/what-is-payload"
            target="_blank"
            rel="noopener noreferrer"
          >
            Getting Started
          </a>
          {' docs.'}
        </li>
        <li>
          {'Commit and push your changes to the repository to trigger a redeployment of your project.'}
        </li>
      </ul>
      {'Pro Tip: This block is a '}
      <a
        href={'https://payloadcms.com/docs/admin/components#base-component-overrides'}
        target="_blank"
        rel="noopener noreferrer"
      >
        custom component
      </a>
      {', you can remove it at any time by updating your '}<strong>payload.config</strong>{'.'}
    </div>
  )
}

export default BeforeDashboard
