import { CollectionConfig } from 'payload/types'
import { filterAppointments, retrievePetHealthRecord } from '../utils';

const PetHealthRecords: CollectionConfig = {
  slug: 'pet-health-records',
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
    endpoints: [
      {
        path: "/filter-me",
        method: "put",
          handler: async (req, res, next) => {
          const appointments = await filterAppointments(req.body);
          res.status(200).send(appointments);
        },
      },
      {
        path: "/:appointmentId/by-appointment-id",
        method: "get",
          handler: async (req, res, next) => {
          const appointments = await retrievePetHealthRecord(req.params.appointmentId);
          res.status(200).send(appointments);
        },
      },
    ],
  fields: [
    {
      name: 'appointment',
      type: 'relationship',
      relationTo: 'appointments',
    },
    {
      name: 'appointmentId',
      type: 'text',
    },
    {
      name: 'petId',
      type: 'text',
      required: true,
    },
    {
      name: 'petHumanId',
      type: 'text',
      required: true,
    },
    {
      name: 'vetHumanId',
      type: 'text',
    },
    {
      name: 'checkUpDate',
      type: 'date',
    }, 
    {
      name: 'diagnosis',
      type: 'text',
    },
    {
      name: 'treatment',
      type: 'text',
    },
    
    {
      name: 'medications',
      type: 'text',
    },
    {
      name: 'jsonData',
      type: 'json',
    },
    {
      name: 'checkUpImage',
      type: 'upload',
      relationTo: 'media',
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
          label: 'Ended',
          value: 'ended',
        }
      ],
    },
  ],
}

export default PetHealthRecords
