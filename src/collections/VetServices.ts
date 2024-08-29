import { CollectionConfig } from 'payload/types'
import { getVetServices, setVetServices } from '../utils';

const VetServices: CollectionConfig = {
  slug: 'vet-services',
  auth: false,
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
  },
  admin: {
    useAsTitle: 'text',
  },
  endpoints: [
    {
      path: "/:vetId/by-vet-id",
      method: "get",
      handler: async (req, res, next) => {
        const services = await getVetServices(req.params.vetId);
        res.status( 200 ).send(services.docs);
      },
    },
    {
      path: "/:vetId/set-service",
      method: "post",
      handler: async (req, res, next) => {
        const services = await setVetServices(req.params.vetId, req.body);
        res.status( 200 ).send(services);
      },
    },
  ],
  fields: [
    {
      name: 'vetId',
      type: 'text',
      required: true,
    },
    {
      name: 'healthServiceId',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
  ],
}

export default VetServices
