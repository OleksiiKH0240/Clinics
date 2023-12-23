import { db } from "../databaseConnection";
import clinics from "../schemas/clinics";
import { ClinicsSearchReturnType } from "../../types/RepReturnTypes";
import { sql } from "drizzle-orm";


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
        }).from(clinics).where(sql.raw(`lower(city) like '${city.toLowerCase()}%'`));
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
        }).from(clinics).where(sql.raw(`lower(state) like '${state.toLowerCase()}%'`));
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
        }).from(clinics).where(sql.raw(`lower(postcode) like '${postcode.toLowerCase()}%'`));
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
        }).from(clinics).where(sql.raw(`lower(clinic_name) like '${clinicName.toLowerCase()}%'`));
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
        }).from(clinics).where(sql.raw(`lower(suburb) like '${suburb.toLowerCase()}%'`));
        return queryResult;
    }

}

export default new ClinicRep();
