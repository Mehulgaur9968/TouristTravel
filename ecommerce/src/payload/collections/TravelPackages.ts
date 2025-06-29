import type { CollectionConfig } from 'payload/types'

const TravelPackages: CollectionConfig = {
  slug: 'travel-packages',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'duration',
      label: 'Duration (days)',
      type: 'number',
    },
    {
      name: 'destinations',
      type: 'relationship',
      relationTo: 'destinations',
      hasMany: true,
    },
    {
      name: 'accommodations',
      type: 'relationship',
      relationTo: 'accommodations',
      hasMany: true,
    },
    {
      name: 'includedTours',
      type: 'relationship',
      relationTo: 'tours',
      hasMany: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'startDates',
      type: 'array',
      fields: [
        {
          name: 'date',
          type: 'date',
        },
      ],
    },
  ],
}

export default TravelPackages 