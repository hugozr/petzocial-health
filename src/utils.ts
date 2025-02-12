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


export const retrieveBytVetId = async (vetId: string) => {
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

export const canDeleteVet = async (vetId: string) => {
        const humans = await payload.find({
        collection: 'vet-communities',
        depth: 1,
        where: {
            vetId: {
                equals: vetId,
            },
        },
    });
    if (humans.totalDocs > 0) {
        return ({ canDelete: false, message: "There are associated communities. Check that!" })
    }
    return ({ canDelete: true, message: "You can delete this vet" });
}

