import { CollectionConfig } from 'payload/types'

const Appointments: CollectionConfig = {
  slug: 'appointments',
  auth: false,
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
  },
  admin: {
    useAsTitle: 'description',
  },
  fields: [
    {
      name: 'petId',
      type: 'text',
      required: true,
    },
    {
      name: 'humanJSON',
      type: 'json',
    },
    
    {
      name: 'petJSON',
      type: 'json',
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'appointmentImage',
      type: 'upload',
      relationTo: 'media',
    },  

  ],
}

export default Appointments
