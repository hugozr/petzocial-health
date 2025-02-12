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
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'petId',
      type: 'text',
      required: true,
    },
    {
      name: 'vetId',
      type: 'text',
      required: true,
    },
    {
      name: 'humanId',
      type: 'text',
    },
    {
      name: 'zoneId',
      type: 'text',
      required: true,
    },
    {
      name: 'appointmentDate',
      type: 'date',
    },
    {
      name: 'jsonData',
      type: 'json',
    },
    {
      name: 'appointmentImage',
      type: 'upload',
      relationTo: 'media',
    },  
    {
      name: 'contactMe', 
      type: 'checkbox', 
    }, 
    {
      name: 'comeHome', 
      type: 'checkbox', 
    },
    {
      name: 'status', 
      type: 'select', 
      hasMany: false,
      defaultValue: 'registered',
      required: true,   //HZUMAETA: La modalidad en el tipo de comunidad es importante porque define una linea de negocio
      options: [
        {
          label: 'Registered',
          value: 'registered',
        },
        {
          label: 'Accepted',
          value: 'accepted',
        },
        {
          label: 'Attended',
          value: 'attended',
        },
      ],
    },
  ],
}

export default Appointments
