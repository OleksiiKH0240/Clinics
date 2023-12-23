import { db } from "../databaseConnection";
import clinics from "../schemas/clinics";
import { ClinicsSearchReturnType } from "../../types/RepReturnTypes";
import { eq } from "drizzle-orm";


class ClinicRep {
    dbClient
    constructor(dbClient = db) {
        this.dbClient = dbClient;
    }

    getClinicsByCity = async (city: string): Promise<ClinicsSearchReturnType> => {
        const queryResult = await this.dbClient.select({
            slug: clinics.slug,
            clinicName: clinics.clinicName,
            fullAddress: clinics.fullAddress,
            website: clinics.website,
            phone: clinics.phone,
            suburb: clinics.suburb,
            state: clinics.state,
            email: clinics.email,
        }).from(clinics).where(eq(clinics.city, city));
        return queryResult;
    }

    getClinicsByState = async (state: string): Promise<ClinicsSearchReturnType> => {
        const queryResult = await this.dbClient.select({
            slug: clinics.slug,
            clinicName: clinics.clinicName,
            fullAddress: clinics.fullAddress,
            website: clinics.website,
            phone: clinics.phone,
            suburb: clinics.suburb,
            state: clinics.state,
            email: clinics.email,
        }).from(clinics).where(eq(clinics.state, state));
        return queryResult;
    }

    getClinicsByPostcode = async (postcode: string): Promise<ClinicsSearchReturnType> => {
        const queryResult = await this.dbClient.select({
            slug: clinics.slug,
            clinicName: clinics.clinicName,
            fullAddress: clinics.fullAddress,
            website: clinics.website,
            phone: clinics.phone,
            suburb: clinics.suburb,
            state: clinics.state,
            email: clinics.email,
        }).from(clinics).where(eq(clinics.postcode, postcode));
        return queryResult;
    }

    getClinicsByClinicName = async (clinicName: string): Promise<ClinicsSearchReturnType> => {
        const queryResult = await this.dbClient.select({
            slug: clinics.slug,
            clinicName: clinics.clinicName,
            fullAddress: clinics.fullAddress,
            website: clinics.website,
            phone: clinics.phone,
            suburb: clinics.suburb,
            state: clinics.state,
            email: clinics.email,
        }).from(clinics).where(eq(clinics.clinicName, clinicName));
        return queryResult;
    }

    getClinicsBySuburb = async (suburb: string): Promise<ClinicsSearchReturnType> => {
        const queryResult = await this.dbClient.select({
            slug: clinics.slug,
            clinicName: clinics.clinicName,
            fullAddress: clinics.fullAddress,
            website: clinics.website,
            phone: clinics.phone,
            suburb: clinics.suburb,
            state: clinics.state,
            email: clinics.email,
        }).from(clinics).where(eq(clinics.suburb, suburb));
        return queryResult;
    }

}

export default new ClinicRep();
