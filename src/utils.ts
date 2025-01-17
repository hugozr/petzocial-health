import payload from 'payload'

export const getVetServices = async (vetId) => {
    const vetServices = await payload.find({
        collection: 'vet-services',
        where: {
            vetId: {
                equals: vetId,
            },
        },
    });
    return vetServices;
}

export const setVetServices = async (vetId, serviceData: any) => {
    // console.log("aaaaaaaaaaaaaaaaaa", vetId, serviceData);
    serviceData.vetId = vetId;
    const vetServices = await payload.create({
        collection: 'vet-services',
        data: serviceData
    });
    return vetServices;
}


export const retrieveBtVetId = async (vetId: string) => {
    const vetCommunities = await payload.find({
        collection: 'vet-communities',
        where: {
            vetId: {
                equals: vetId,
            },
        },
    });
    return vetCommunities;
}


