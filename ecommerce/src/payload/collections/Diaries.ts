import { CollectionConfig } from 'payload/types';

const Diaries: CollectionConfig = {
  slug: 'diaries',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'region',
      type: 'select',
      options: [
        { label: 'North', value: 'north' },
        { label: 'South', value: 'south' },
        { label: 'East', value: 'east' },
        { label: 'West', value: 'west' },
        { label: 'All', value: 'all' },
      ],
      required: true,
    },
    {
      name: 'interest',
      type: 'select',
      options: [
        { label: 'Adventure', value: 'adventure' },
        { label: 'Culture', value: 'culture' },
        { label: 'Nature', value: 'nature' },
        { label: 'Other', value: 'other' },
      ],
      required: true,
    },
  ],
  access: {
    read: () => true,
  },
};

export default Diaries; 