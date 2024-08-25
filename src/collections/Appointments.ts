import { CollectionConfig } from 'payload/types'

const Appointments: CollectionConfig = {
  slug: 'appointments',
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

export default Appointments
