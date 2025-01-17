import { CollectionConfig } from 'payload/types'
import { getVetServices, retrieveBtVetId, setVetServices } from '../utils';

const VetCommunities: CollectionConfig = {
  slug: 'vet-communities',
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
      path: '/:vetId/by-vet-id',
      method: "get",
      handler: async (req, res, next) => {
        const communities = await retrieveBtVetId(req.params.vetId);
        res.status( 200 ).send(communities);
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
      name: 'communityId',
      type: 'text',
      required: true,
    },
    {
      name: 'username',
      type: 'text',
      required: true,
    },
    {
      name: 'jsonData',
      type: 'json',
      required: true,
    },
  ],
}

export default VetCommunities
