import clinicRep from "../database/repositories/ClinicRep";
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';


class Clinic {
    getClinicsByCity = async (args: { city: string }) => {
        return await clinicRep.getClinicsByCity(args.city);
    }

    getClinicsByState = async (args: { state: string }) => {
        return await clinicRep.getClinicsByState(args.state);
    }

    getClinicsByPostcode = async (args: { postcode: string }) => {
        return await clinicRep.getClinicsByPostcode(args.postcode);
    }

    getClinicsByClinicName = async (args: { clinicName: string }) => {
        return await clinicRep.getClinicsByClinicName(args.clinicName);
    }

    getClinicsBySuburb = async (args: { suburb: string }) => {
        return await clinicRep.getClinicsBySuburb(args.suburb);
    }
}

export default new Clinic();
