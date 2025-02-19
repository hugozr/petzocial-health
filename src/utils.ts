import { equal } from 'assert';
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

export const filterAppointments = async (data: any) => {
    console.log(data, ";,,")
    const filter = data.filterIdName;
    const whereConditions: any = {
        or: [
            {
                [filter]: { // Uso de la variable como clave dinámica
                    equals: data.id,
                },
            },
        ],
    };
    if (data.dateRange.startDate && data.dateRange.endDate) {
        whereConditions.and = [
            {
                appointmentDate: {
                    greater_than_equal: data.dateRange.startDate
                },
            },
            {
                appointmentDate: {
                    less_than_equal:addOneDay(data.dateRange.endDate)
                },
            },
        ];
    }
    console.log(whereConditions, "aaa")
    const appointments = await payload.find({
        collection: 'appointments',
        page: data.page,
        limit: data.limit,
        where: whereConditions,
    });
    return appointments;
}

function addOneDay(dateISO) {
    let date = new Date(dateISO); // Convertir el string a un objeto Date
    date.setUTCDate(date.getUTCDate() + 1); // Sumar un día manteniendo la zona horaria UTC
    return date.toISOString(); // Convertir de nuevo a formato ISO
}
