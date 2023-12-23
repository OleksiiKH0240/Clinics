import clinicRep from "../database/repositories/ClinicRep";


class Clinic {
    getClinicsBy = async (args: {
        city?: string,
        state?: string,
        postcode?: string,
        clinicName?: string,
        suburb?: string
    }) => {
        // console.log(args);
        if (args.city != undefined) {
            return await clinicRep.getClinicsByCity(args.city);
        }
        else if (args.state != undefined) {
            return await clinicRep.getClinicsByState(args.state);
        }
        else if (args.postcode != undefined) {
            return await clinicRep.getClinicsByPostcode(args.postcode);
        }
        else if (args.clinicName != undefined) {
            return await clinicRep.getClinicsByClinicName(args.clinicName);
        }
        else if (args.suburb != undefined) {
            return await clinicRep.getClinicsBySuburb(args.suburb);
        }
        else {
            return [];
        }

    }

    // getClinicsByCity = async (args: { city: string }) => {
    //     return await clinicRep.getClinicsByCity(args.city);
    // }

    // getClinicsByState = async (args: { state: string }) => {
    //     return await clinicRep.getClinicsByState(args.state);
    // }

    // getClinicsByPostcode = async (args: { postcode: string }) => {
    //     return await clinicRep.getClinicsByPostcode(args.postcode);
    // }

    // getClinicsByClinicName = async (args: { clinicName: string }) => {
    //     return await clinicRep.getClinicsByClinicName(args.clinicName);
    // }

    // getClinicsBySuburb = async (args: { suburb: string }) => {
    //     return await clinicRep.getClinicsBySuburb(args.suburb);
    // }
}

export default new Clinic();
