import { CollectionConfig } from 'payload/types';

const Crafts: CollectionConfig = {
  slug: 'crafts',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
  ],
  access: {
    read: () => true,
  },
};

export default Crafts; 