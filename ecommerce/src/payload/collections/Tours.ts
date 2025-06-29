import type { CollectionConfig } from 'payload/types'

const Tours: CollectionConfig = {
  slug: 'tours',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'duration',
      type: 'group',
      fields: [
        {
          name: 'value',
          type: 'number',
        },
        {
          name: 'unit',
          type: 'select',
          options: ['hours', 'days', 'weeks'],
        },
      ],
    },
    {
      name: 'destinations',
      type: 'relationship',
      relationTo: 'destinations',
      hasMany: true,
    },
    {
      name: 'included',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'itinerary',
      type: 'array',
      fields: [
        {
          name: 'day',
          type: 'number',
        },
        {
          name: 'activities',
          type: 'richText',
        },
      ],
    },
  ],
}

export default Tours 