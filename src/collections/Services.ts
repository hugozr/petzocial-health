import { CollectionConfig } from 'payload/types'

const Services: CollectionConfig = {
  slug: 'services',
  auth: true,
  admin: {
    useAsTitle: 'description',
  },
  fields: [
    {
      name: 'description',
      type: 'text',
      required: true,
    }
  ],
}

export default Services
