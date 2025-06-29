import type { CollectionConfig } from 'payload/types'

const Accommodations: CollectionConfig = {
  slug: 'accommodations',
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
      type: 'textarea',
    },
    {
      name: 'type',
      type: 'select',
      options: ['Hotel', 'Resort', 'Villa', 'Apartment', 'Hostel'],
      required: true,
    },
    {
      name: 'stars',
      type: 'number',
      min: 1,
      max: 5,
    },
    {
      name: 'amenities',
      type: 'array',
      fields: [
        {
          name: 'amenity',
          type: 'text',
        },
      ],
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'destinations',
    },
    {
      name: 'priceRange',
      type: 'group',
      fields: [
        {
          name: 'min',
          type: 'number',
        },
        {
          name: 'max',
          type: 'number',
        },
      ],
    },
  ],
}

export default Accommodations 